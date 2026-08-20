/**
 * Software Genome (SGX) - Genome Graph Interactive Canvas Renderer
 */

class GenomeGraph {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    this.nodes = [];
    this.edges = [];
    this.selectedNode = null;
    this.hoveredNode = null;
    this.activeFilterLayer = 'all';

    this.panX = 0;
    this.panY = 0;
    this.zoom = 1;
    this.isDragging = false;
    this.dragStartX = 0;
    this.dragStartY = 0;
    this.draggedNode = null;

    this.initCanvasSize();
    window.addEventListener('resize', () => this.initCanvasSize());
    this.setupInteractions();
  }

  initCanvasSize() {
    const parent = this.canvas.parentElement;
    if (!parent) return;
    this.canvas.width = parent.clientWidth || 800;
    this.canvas.height = parent.clientHeight || 500;
    this.render();
  }

  setData(nodes, edges) {
    this.nodes = JSON.parse(JSON.stringify(nodes));
    this.edges = JSON.parse(JSON.stringify(edges));
    this.centerGraph();
    this.startSimulation();
  }

  centerGraph() {
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    this.nodes.forEach(n => {
      if (n.x < minX) minX = n.x;
      if (n.x > maxX) maxX = n.x;
      if (n.y < minY) minY = n.y;
      if (n.y > maxY) maxY = n.y;
    });

    const graphWidth = maxX - minX || 600;
    const graphHeight = maxY - minY || 400;
    this.zoom = Math.min((this.canvas.width - 100) / graphWidth, (this.canvas.height - 100) / graphHeight, 1.2);
    this.panX = (this.canvas.width / 2) - ((minX + maxX) / 2) * this.zoom;
    this.panY = (this.canvas.height / 2) - ((minY + maxY) / 2) * this.zoom;
  }

  startSimulation() {
    let ticks = 0;
    const animate = () => {
      if (ticks < 120) {
        this.stepPhysics();
        ticks++;
        this.render();
        requestAnimationFrame(animate);
      } else {
        this.render();
      }
    };
    animate();
  }

  stepPhysics() {
    // Simple force layout for gene node spacing
    const k = 80;
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const n1 = this.nodes[i];
        const n2 = this.nodes[j];
        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        if (dist < 180) {
          const force = (k * k) / dist;
          const fx = (dx / dist) * force * 0.05;
          const fy = (dy / dist) * force * 0.05;
          if (!n1.isFixed) { n1.x -= fx; n1.y -= fy; }
          if (!n2.isFixed) { n2.x += fx; n2.y += fy; }
        }
      }
    }

    // Edge attraction
    this.edges.forEach(edge => {
      const source = this.nodes.find(n => n.id === edge.source);
      const target = this.nodes.find(n => n.id === edge.target);
      if (source && target) {
        const dx = target.x - source.x;
        const dy = target.y - source.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = (dist - 120) * 0.03;
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        if (!source.isFixed) { source.x += fx; source.y += fy; }
        if (!target.isFixed) { target.x -= fx; target.y -= fy; }
      }
    });
  }

  setLayerFilter(layer) {
    this.activeFilterLayer = layer;
    this.render();
  }

  setupInteractions() {
    this.canvas.addEventListener('mousedown', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const worldPos = this.screenToWorld(mouseX, mouseY);
      const clickedNode = this.getNodeAt(worldPos.x, worldPos.y);

      if (clickedNode) {
        this.draggedNode = clickedNode;
        this.selectedNode = clickedNode;
        if (window.onGenomeNodeSelect) window.onGenomeNodeSelect(clickedNode);
      } else {
        this.isDragging = true;
        this.dragStartX = mouseX - this.panX;
        this.dragStartY = mouseY - this.panY;
        this.selectedNode = null;
        if (window.onGenomeNodeSelect) window.onGenomeNodeSelect(null);
      }
      this.render();
    });

    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      if (this.draggedNode) {
        const worldPos = this.screenToWorld(mouseX, mouseY);
        this.draggedNode.x = worldPos.x;
        this.draggedNode.y = worldPos.y;
        this.render();
        return;
      }

      if (this.isDragging) {
        this.panX = mouseX - this.dragStartX;
        this.panY = mouseY - this.dragStartY;
        this.render();
        return;
      }

      const worldPos = this.screenToWorld(mouseX, mouseY);
      const prevHover = this.hoveredNode;
      this.hoveredNode = this.getNodeAt(worldPos.x, worldPos.y);
      this.canvas.style.cursor = this.hoveredNode ? 'pointer' : 'grab';
      if (prevHover !== this.hoveredNode) {
        this.render();
      }
    });

    this.canvas.addEventListener('mouseup', () => {
      this.isDragging = false;
      this.draggedNode = null;
    });

    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
      const newZoom = Math.max(0.4, Math.min(3.0, this.zoom * zoomFactor));

      const rect = this.canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      this.panX = mouseX - (mouseX - this.panX) * (newZoom / this.zoom);
      this.panY = mouseY - (mouseY - this.panY) * (newZoom / this.zoom);
      this.zoom = newZoom;
      this.render();
    });
  }

  screenToWorld(sx, sy) {
    return {
      x: (sx - this.panX) / this.zoom,
      y: (sy - this.panY) / this.zoom
    };
  }

  getNodeAt(wx, wy) {
    for (let i = this.nodes.length - 1; i >= 0; i--) {
      const node = this.nodes[i];
      if (this.activeFilterLayer !== 'all' && node.layer !== 'core' && node.layer !== this.activeFilterLayer) {
        continue;
      }
      const radius = node.type === 'app' ? 24 : 14;
      const dx = node.x - wx;
      const dy = node.y - wy;
      if (Math.sqrt(dx * dx + dy * dy) <= radius) {
        return node;
      }
    }
    return null;
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw background grid dots
    this.drawBackgroundGrid();

    this.ctx.save();
    this.ctx.translate(this.panX, this.panY);
    this.ctx.scale(this.zoom, this.zoom);

    // Draw edges
    this.edges.forEach(edge => {
      const source = this.nodes.find(n => n.id === edge.source);
      const target = this.nodes.find(n => n.id === edge.target);

      if (!source || !target) return;

      const isFilteredOut = this.activeFilterLayer !== 'all' && 
                            target.layer !== 'core' && 
                            target.layer !== this.activeFilterLayer;

      if (isFilteredOut) return;

      const isHighlighted = (this.selectedNode && (this.selectedNode.id === source.id || this.selectedNode.id === target.id)) ||
                            (this.hoveredNode && (this.hoveredNode.id === source.id || this.hoveredNode.id === target.id));

      this.ctx.beginPath();
      this.ctx.moveTo(source.x, source.y);
      this.ctx.lineTo(target.x, target.y);
      this.ctx.strokeStyle = isHighlighted ? '#00f2fe' : 'rgba(255, 255, 255, 0.15)';
      this.ctx.lineWidth = isHighlighted ? 2.5 : 1;
      if (isHighlighted) {
        this.ctx.setLineDash([4, 4]);
      } else {
        this.ctx.setLineDash([]);
      }
      this.ctx.stroke();
      this.ctx.setLineDash([]);
    });

    // Draw Nodes
    this.nodes.forEach(node => {
      const isFilteredOut = this.activeFilterLayer !== 'all' && 
                            node.layer !== 'core' && 
                            node.layer !== this.activeFilterLayer;

      if (isFilteredOut) return;

      const isSelected = this.selectedNode && this.selectedNode.id === node.id;
      const isHovered = this.hoveredNode && this.hoveredNode.id === node.id;

      if (node.type === 'app') {
        // App node (large circle)
        const radius = 24;

        if (isSelected || isHovered) {
          this.ctx.beginPath();
          this.ctx.arc(node.x, node.y, radius + 8, 0, Math.PI * 2);
          this.ctx.fillStyle = 'rgba(0, 242, 254, 0.2)';
          this.ctx.fill();
        }

        this.ctx.beginPath();
        this.ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        this.ctx.fillStyle = node.color || '#3b82f6';
        this.ctx.fill();
        this.ctx.lineWidth = isSelected ? 3 : 2;
        this.ctx.strokeStyle = isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.6)';
        this.ctx.stroke();

        // Node Label
        this.ctx.font = 'bold 12px Inter, sans-serif';
        this.ctx.fillStyle = '#ffffff';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(node.label, node.x, node.y + radius + 16);

      } else {
        // Gene node (small glowing diamond/dot)
        const radius = 14;
        const colorMap = {
          ux: '#FF385C',
          data: '#3B82F6',
          architecture: '#10B981',
          pattern: '#F59E0B',
          security: '#EF4444',
          performance: '#8B5CF6',
          ai: '#EC4899',
          integration: '#06B6D4'
        };
        const nodeColor = colorMap[node.layer] || '#00f2fe';

        if (isSelected || isHovered) {
          this.ctx.beginPath();
          this.ctx.arc(node.x, node.y, radius + 6, 0, Math.PI * 2);
          this.ctx.fillStyle = 'rgba(0, 242, 254, 0.25)';
          this.ctx.fill();
        }

        this.ctx.beginPath();
        this.ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        this.ctx.fillStyle = nodeColor;
        this.ctx.fill();
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeStyle = '#ffffff';
        this.ctx.stroke();

        // Frequency pill badge inside
        if (node.frequency) {
          this.ctx.font = 'bold 9px sans-serif';
          this.ctx.fillStyle = '#ffffff';
          this.ctx.textAlign = 'center';
          this.ctx.fillText(node.frequency, node.x, node.y + 3);
        }

        this.ctx.font = '10px Inter, sans-serif';
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(node.label, node.x, node.y + radius + 12);
      }
    });

    this.ctx.restore();
  }

  drawBackgroundGrid() {
    const gridSize = 40 * this.zoom;
    const startX = this.panX % gridSize;
    const startY = this.panY % gridSize;

    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    for (let x = startX; x < this.canvas.width; x += gridSize) {
      for (let y = startY; y < this.canvas.height; y += gridSize) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        this.ctx.fill();
      }
    }
  }
}

const globalObj = typeof window !== 'undefined' ? window : global;
globalObj.GenomeGraph = GenomeGraph;

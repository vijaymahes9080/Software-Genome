/**
 * Software Genome (SGX) - Core Application Logic & State Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Core Services
  const synthesizer = new GenomeSynthesizer();
  let graphInstance = null;
  
  let selectedAppId = 'app-airbnb';
  let activeGenomeLayer = 'ux';
  let currentSynthesizedResult = null;
  let activeCodeTab = 'frontend';

  // Render Initial Benchmark Apps List
  renderBenchmarkApps();
  renderGenomeLayers();
  
  // Initialize Genome Graph
  graphInstance = new GenomeGraph('genomeGraphCanvas');
  if (window.SGX_GRAPH_NODES && window.SGX_GRAPH_EDGES) {
    graphInstance.setData(window.SGX_GRAPH_NODES, window.SGX_GRAPH_EDGES);
  }

  // Handle Graph Node Selection Callback
  window.onGenomeNodeSelect = (node) => {
    const drawer = document.getElementById('nodeInspectorDrawer');
    if (!node) {
      drawer.classList.remove('active');
      return;
    }

    drawer.classList.add('active');
    document.getElementById('nodeTitle').innerText = node.label;
    document.getElementById('nodeTypeBadge').innerText = node.type.toUpperCase() + ' NODE';
    document.getElementById('nodeLayerText').innerText = (node.layer || 'Core').toUpperCase();

    if (node.type === 'app') {
      const app = window.SGX_BENCHMARK_APPS.find(a => a.id === node.app);
      document.getElementById('nodeDescription').innerText = app ? app.tagline : 'Analyzed Application Node';
      document.getElementById('nodeLineageText').innerText = 'Deconstructed into 8 Genome Layers';
    } else {
      document.getElementById('nodeDescription').innerText = `Extracted engineering pattern detected across ${node.frequency || 5} benchmark applications.`;
      document.getElementById('nodeLineageText').innerText = `Synthesized in ${node.frequency || 5}/10 applications`;
    }
  };

  // Setup Navigation Tabs
  const navTabs = document.querySelectorAll('.nav-tab-btn');
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      navTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetTabId = tab.getAttribute('data-tab');
      document.querySelectorAll('.tab-view').forEach(view => {
        view.classList.remove('active');
      });
      document.getElementById(targetTabId).classList.add('active');

      if (targetTabId === 'tab-graph' && graphInstance) {
        setTimeout(() => graphInstance.initCanvasSize(), 50);
      }
    });
  });

  // Setup Graph Filter Buttons
  const filterBtns = document.querySelectorAll('.graph-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const layer = btn.getAttribute('data-layer');
      graphInstance.setLayerFilter(layer);
    });
  });

  // Preset Prompt Clicking
  const presetPills = document.querySelectorAll('.preset-prompt-pill');
  presetPills.forEach(pill => {
    pill.addEventListener('click', () => {
      document.getElementById('promptTextarea').value = pill.innerText;
    });
  });

  // Synthesize Button Click Handler
  const synthesizeBtn = document.getElementById('synthesizeBtn');
  if (synthesizeBtn) {
    synthesizeBtn.addEventListener('click', () => {
      const prompt = document.getElementById('promptTextarea').value;
      if (!prompt.trim()) return;

      synthesizeBtn.innerText = '🧬 Deconstructing & Synthesizing Genome...';
      synthesizeBtn.disabled = true;

      setTimeout(() => {
        currentSynthesizedResult = synthesizer.synthesizeApp(prompt);
        renderSynthesisResult(currentSynthesizedResult);
        synthesizeBtn.innerText = '⚡ Synthesize Architecture & Generate Application';
        synthesizeBtn.disabled = false;
      }, 600);
    });
  }

  // Code Tab Switching
  const codeTabBtns = document.querySelectorAll('.code-tab-btn');
  codeTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      codeTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCodeTab = btn.getAttribute('data-code');
      renderCodeContent();
    });
  });

  // Preset App Render Function
  function renderBenchmarkApps() {
    const grid = document.getElementById('benchmarkAppsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    window.SGX_BENCHMARK_APPS.forEach(app => {
      const card = document.createElement('div');
      card.className = `app-card ${app.id === selectedAppId ? 'selected' : ''}`;
      card.innerHTML = `
        <div class="app-card-header">
          <span class="app-card-icon">${app.icon}</span>
          <div>
            <div class="app-card-title">${app.name}</div>
            <div class="app-card-category">${app.category}</div>
          </div>
        </div>
        <p style="font-size: 0.8rem; color: #94a3b8; height: 38px; overflow: hidden;">${app.tagline}</p>
        <div class="app-stats-row">
          <span>🖥️ ${app.stats.screens} Screens</span>
          <span>🗄️ ${app.stats.tables} Tables</span>
          <span>⚡ ${app.stats.apis} APIs</span>
        </div>
      `;

      card.addEventListener('click', () => {
        selectedAppId = app.id;
        renderBenchmarkApps();
        renderGenomeLayers();
      });

      grid.appendChild(card);
    });
  }

  // Render 8-Layer Genome View
  function renderGenomeLayers() {
    const app = window.SGX_BENCHMARK_APPS.find(a => a.id === selectedAppId) || window.SGX_BENCHMARK_APPS[0];
    
    // Render Layer Buttons
    const listContainer = document.getElementById('genomeLayerList');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    const layers = ['ux', 'data', 'architecture', 'pattern', 'security', 'performance', 'ai', 'integration'];
    
    layers.forEach(layerKey => {
      const layerData = app.genomeLayers[layerKey];
      const btn = document.createElement('button');
      btn.className = `layer-btn ${layerKey === activeGenomeLayer ? 'active' : ''}`;
      btn.innerHTML = `
        <span>${layerData.title}</span>
        <span class="pattern-badge">${layerData.patterns.length} Genes</span>
      `;

      btn.addEventListener('click', () => {
        activeGenomeLayer = layerKey;
        renderGenomeLayers();
      });

      listContainer.appendChild(btn);
    });

    // Render Active Layer Content Details
    const detailPanel = document.getElementById('genomeLayerDetailPanel');
    if (detailPanel) {
      const activeData = app.genomeLayers[activeGenomeLayer];
      detailPanel.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
          <h3 style="font-size: 1.2rem; font-weight: 700; color: #00f2fe;">${activeData.title} - ${app.name}</h3>
          <span style="font-size: 0.8rem; color: #94a3b8;">Extracted Genome Layer</span>
        </div>
        <p style="color: #94a3b8; font-size: 0.88rem; margin-bottom: 1.2rem;">
          AI reverse-engineered pattern extraction for ${app.name} (${app.architectureType}).
        </p>
        <div class="pattern-list-group">
          ${activeData.patterns.map((p, idx) => `
            <div class="pattern-item-card">
              <span class="pattern-badge">GENE-${idx + 1}</span>
              <span style="font-size: 0.9rem; font-weight: 500;">${p}</span>
            </div>
          `).join('')}
        </div>
      `;
    }
  }

  // Render Synthesis Result & Code
  function renderSynthesisResult(res) {
    if (!res) return;

    // Update Metrics Display
    document.getElementById('fitnessScoreVal').innerText = res.metrics.fitnessScore + '%';
    document.getElementById('noveltyIndexVal').innerText = res.metrics.noveltyIndex + '%';
    document.getElementById('verbatimMatchVal').innerText = res.metrics.verbatimCodeMatch + '%';
    document.getElementById('abstractionThresholdVal').innerText = res.metrics.abstractionThreshold + '%';

    // Render Lineage Table
    const lineageBox = document.getElementById('lineageTracingBox');
    if (lineageBox) {
      lineageBox.innerHTML = `
        <h4 style="font-size: 0.9rem; color: #00f2fe; margin-bottom: 0.5rem;">🧬 Synthesized Gene Lineage</h4>
        <div style="display: flex; flex-direction: column; gap: 0.4rem;">
          ${res.lineageTracing.map(item => `
            <div style="font-size: 0.8rem; background: rgba(255,255,255,0.03); padding: 0.5rem; border-radius: 6px; display: flex; justify-content: space-between;">
              <span style="font-weight: 600;">${item.component}</span>
              <span style="color: #94a3b8;">Inherited from: ${item.parentApps.join(', ')}</span>
            </div>
          `).join('')}
        </div>
      `;
    }

    renderCodeContent();
  }

  function renderCodeContent() {
    const codeBlock = document.getElementById('codeDisplayBlock');
    if (!codeBlock) return;

    if (!currentSynthesizedResult) {
      codeBlock.innerText = '// Click "Synthesize Architecture" to generate full-stack code bundle';
      return;
    }

    const codeMap = currentSynthesizedResult.generatedCode;
    codeBlock.innerText = codeMap[activeCodeTab] || '// Code component empty';
  }
});

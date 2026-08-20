/**
 * Software Genome (SGX) - Reverse Engineering Directory Scanner
 * Analyzes local codebase structures and extracts 8-Layer Genome metrics.
 */

const fs = require('fs');
const path = require('path');

class CodebaseGenomeScanner {
  scanDirectory(dirPath) {
    const stats = {
      filesCount: 0,
      totalLines: 0,
      detectedLayers: {
        ux: [],
        data: [],
        architecture: [],
        pattern: [],
        security: [],
        performance: [],
        ai: [],
        integration: []
      }
    };

    if (!fs.existsSync(dirPath)) {
      throw new Error(`Directory not found: ${dirPath}`);
    }

    const walk = (currentDir) => {
      const files = fs.readdirSync(currentDir);
      files.forEach(file => {
        const fullPath = path.join(currentDir, file);
        if (file === 'node_modules' || file === '.git' || file === 'dist') return;

        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          walk(fullPath);
        } else if (stat.isFile()) {
          stats.filesCount++;
          const content = fs.readFileSync(fullPath, 'utf8');
          stats.totalLines += content.split('\n').length;

          // Perform pattern detection heuristics
          this.analyzeContent(file, content, stats.detectedLayers);
        }
      });
    };

    walk(dirPath);
    return stats;
  }

  analyzeContent(filename, content, layers) {
    const lower = content.toLowerCase();

    // UX Detection
    if (filename.endsWith('.jsx') || filename.endsWith('.tsx') || filename.endsWith('.vue') || filename.endsWith('.html')) {
      if (lower.includes('map') || lower.includes('leaflet') || lower.includes('mapbox')) {
        layers.ux.push(`Interactive Map View in ${filename}`);
      }
      if (lower.includes('form') || lower.includes('wizard')) {
        layers.ux.push(`Multi-step Form Flow in ${filename}`);
      }
    }

    // Data Detection
    if (lower.includes('create table') || lower.includes('postgis') || lower.includes('schema')) {
      layers.data.push(`Database Table Definition in ${filename}`);
    }

    // Security Detection
    if (lower.includes('jwt') || lower.includes('oauth') || lower.includes('rbac') || lower.includes('bcrypt')) {
      layers.security.push(`Authentication & Auth Rule in ${filename}`);
    }

    // Integration Detection
    if (lower.includes('stripe') || lower.includes('paypal') || lower.includes('twilio') || lower.includes('axios')) {
      layers.integration.push(`Third-party API Integration in ${filename}`);
    }
  }
}

const globalObj = typeof window !== 'undefined' ? window : global;
globalObj.CodebaseGenomeScanner = CodebaseGenomeScanner;

module.exports = CodebaseGenomeScanner;

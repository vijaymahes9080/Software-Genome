#!/usr/bin/env node

/**
 * Software Genome (SGX) - Command Line Interface (CLI)
 * Usage: npx sgx synthesize "Build a rural property marketplace for India"
 */

const path = require('path');
const fs = require('fs');

const globalObj = typeof window !== 'undefined' ? window : global;
require('../genome-data.js');
require('../synthesizer.js');

const args = process.argv.slice(2);
const command = args[0] || 'help';

console.log(`
🧬 Software Genome CLI (SGX v1.0.0)
==============================================
`);

if (command === 'synthesize' || command === 'synth') {
  const prompt = args[1] || 'Build a rural property marketplace for India with GIS maps and offline capability';
  console.log(`📥 Parsing Prompt: "${prompt}"`);
  console.log(`🔍 Traversing 8 Genome Layers across 10 benchmark applications...`);

  const syn = new globalObj.GenomeSynthesizer();
  const res = syn.synthesizeApp(prompt);

  console.log(`
✅ Synthesis Complete!
----------------------------------------------
🏆 Fitness Score:        ${res.metrics.fitnessScore}%
💡 Novelty Index:        ${res.metrics.noveltyIndex}%
🛡️ Verbatim Code Match:  ${res.metrics.verbatimCodeMatch}%
🔒 Abstraction Threshold:${res.metrics.abstractionThreshold}%
----------------------------------------------
`);

  const outputDir = path.join(process.cwd(), 'sgx-output');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(path.join(outputDir, 'App.jsx'), res.generatedCode.frontend);
  fs.writeFileSync(path.join(outputDir, 'server.js'), res.generatedCode.backend);
  fs.writeFileSync(path.join(outputDir, 'schema.sql'), res.generatedCode.schema);
  fs.writeFileSync(path.join(outputDir, 'openapi.json'), res.generatedCode.openapi);

  console.log(`📦 Synthesized Code Bundle exported to: ${outputDir}`);

} else if (command === 'list-apps') {
  console.log(`📊 Analyzed Benchmark Applications (${globalObj.SGX_BENCHMARK_APPS.length}):\n`);
  globalObj.SGX_BENCHMARK_APPS.forEach((app, i) => {
    console.log(` ${i + 1}. ${app.icon} ${app.name} (${app.category}) - ${app.architectureType}`);
  });
} else {
  console.log(`
Usage:
  sgx synthesize "<prompt>"   Synthesize a new software architecture from prompt
  sgx list-apps               List all deconstructed benchmark applications
  sgx help                    Show this help manual
`);
}

/**
 * Software Genome (SGX) - Core Test Suite
 */

const assert = require('assert');
const path = require('path');

const globalObj = typeof window !== 'undefined' ? window : global;
require('../genome-data.js');
require('../synthesizer.js');
const GenomeMutationEngine = require('../lib/mutation-engine.js');
const IPSafeguardShield = require('../lib/ip-shield.js');

console.log('🧪 Starting Software Genome Unit Test Suite...\n');

// Test 1: Benchmark Catalog Loading
assert.strictEqual(globalObj.SGX_BENCHMARK_APPS.length, 10, 'Should load exactly 10 benchmark apps');
console.log('✅ Test 1 Passed: 10 Benchmark apps verified');

// Test 2: Genetic Algorithm Mutation
const engine = new GenomeMutationEngine(0.3, 0.7);
const mutated = engine.mutateLayerTraits('ux', ['Map Grid', 'Filter Drawer']);
assert.strictEqual(Array.isArray(mutated), true, 'Mutated traits should return an array');
console.log('✅ Test 2 Passed: Genetic mutation engine verified');

// Test 3: IP Shield Cleanroom Audit
const shield = new IPSafeguardShield();
const audit = shield.auditGeneratedCode('function testApp() { return "cleanroom"; }');
assert.strictEqual(audit.passAudit, true, 'Cleanroom code should pass IP audit');
assert.strictEqual(audit.verbatimMatchPercentage, 0, 'Verbatim match should be 0%');
console.log('✅ Test 3 Passed: IP Safeguard Cleanroom Shield verified');

// Test 4: Architecture Synthesis
const syn = new globalObj.GenomeSynthesizer();
const res = syn.synthesizeApp('Build a rural property marketplace');
assert.ok(res.generatedCode.frontend.includes('RuralPropertyApp'), 'Frontend code should contain component');
console.log('✅ Test 4 Passed: Architecture synthesizer verified');

console.log('\n🎉 ALL SOFTWARE GENOME UNIT TESTS PASSED SUCCESSFULLY!');

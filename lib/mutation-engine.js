/**
 * Software Genome (SGX) - Genetic Algorithm Mutation Engine
 * Performs crossover combinations, architectural trait mutations, and fitness evaluations.
 */

class GenomeMutationEngine {
  constructor(mutationRate = 0.25, crossoverRate = 0.75) {
    this.mutationRate = mutationRate;
    this.crossoverRate = crossoverRate;
  }

  crossoverGenomes(parentGenomeA, parentGenomeB) {
    const childGenome = {};
    const layers = ['ux', 'data', 'architecture', 'pattern', 'security', 'performance', 'ai', 'integration'];

    layers.forEach(layer => {
      const traitsA = parentGenomeA[layer] || [];
      const traitsB = parentGenomeB[layer] || [];
      
      // Select 50% from Parent A and 50% from Parent B
      const splitIdxA = Math.floor(traitsA.length / 2);
      const splitIdxB = Math.floor(traitsB.length / 2);

      const combined = [
        ...traitsA.slice(0, splitIdxA),
        ...traitsB.slice(splitIdxB)
      ];

      childGenome[layer] = this.mutateLayerTraits(layer, combined);
    });

    return childGenome;
  }

  mutateLayerTraits(layer, traits) {
    const mutated = [...traits];
    if (Math.random() < this.mutationRate) {
      const mutationPool = {
        ux: ["Voice-driven accessibility UI", "AR/VR 3D spatial view"],
        data: ["Graph database relational bridge (Neo4j)", "Quantum-safe encryption schema"],
        architecture: ["Serverless Edge Worker distribution", "Wasm micro-kernel execution"],
        security: ["Zero-Trust continuous posture verification", "Biometric FIDO2 authentication"]
      };

      const pool = mutationPool[layer] || ["Optimized adaptive caching strategy"];
      const novelTrait = pool[Math.floor(Math.random() * pool.length)];
      mutated.push(`[MUTATED GENE] ${novelTrait}`);
    }
    return mutated;
  }

  evaluateFitness(genome, requirements) {
    let score = 85;
    const reqLower = requirements.toLowerCase();

    if (reqLower.includes('offline')) score += 4;
    if (reqLower.includes('gis') || reqLower.includes('map')) score += 3;
    if (reqLower.includes('ai')) score += 4;

    return Math.min(99, score);
  }
}

const globalObj = typeof window !== 'undefined' ? window : global;
globalObj.GenomeMutationEngine = GenomeMutationEngine;

module.exports = GenomeMutationEngine;

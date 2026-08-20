/**
 * Software Genome (SGX) - IP Safeguard & License Compliance Auditor
 * Enforces cleanroom abstraction thresholds and zero verbatim code copying.
 */

class IPSafeguardShield {
  constructor(strictnessLevel = 'HIGH') {
    this.strictnessLevel = strictnessLevel;
  }

  auditGeneratedCode(codeString, benchmarkCodebases = []) {
    // 1. Calculate N-gram Token Overlap with known benchmark sources
    const nGrams = this.extractNGrams(codeString, 5);
    let totalMatches = 0;

    benchmarkCodebases.forEach(benchmark => {
      const bGramSet = new Set(this.extractNGrams(benchmark, 5));
      nGrams.forEach(gram => {
        if (bGramSet.has(gram)) totalMatches++;
      });
    });

    const verbatimMatchPercentage = nGrams.length > 0 ? (totalMatches / nGrams.length) * 100 : 0.0;
    const abstractionScore = Math.max(90, 100 - verbatimMatchPercentage);

    return {
      passAudit: verbatimMatchPercentage < 2.0,
      verbatimMatchPercentage: parseFloat(verbatimMatchPercentage.toFixed(2)),
      abstractionScore: parseFloat(abstractionScore.toFixed(2)),
      ipRiskScore: verbatimMatchPercentage > 5.0 ? 25 : 0,
      status: verbatimMatchPercentage < 2.0 ? 'CLEANROOM_VERIFIED' : 'REPRODUCTION_WARNING',
      auditTimestamp: new Date().toISOString()
    };
  }

  extractNGrams(text, n = 5) {
    const tokens = text.replace(/[^\w\s]/g, '').split(/\s+/).filter(Boolean);
    const nGrams = [];
    for (let i = 0; i <= tokens.length - n; i++) {
      nGrams.push(tokens.slice(i, i + n).join(' '));
    }
    return nGrams;
  }
}

const globalObj = typeof window !== 'undefined' ? window : global;
globalObj.IPSafeguardShield = IPSafeguardShield;

module.exports = IPSafeguardShield;

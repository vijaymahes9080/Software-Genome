/**
 * Software Genome (SGX) - Rate Limiter & Bot Protection Middleware
 */

class RateLimiterMiddleware {
  generateLimiterConfig() {
    return `// =========================================================
// Software Genome Token Bucket Rate Limiter
// Lineage: Synthesized from Booking.com (Anti-Scraping / WAF) + Zillow API
// =========================================================

const rateLimit = require('express-rate-limit');

const apiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // Limit each IP to 200 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too Many Requests',
    message: 'Rate limit exceeded. Please wait 15 minutes before retrying.',
    code: 'RATE_LIMIT_EXCEEDED'
  }
});

module.exports = apiRateLimiter;
`;
  }
}

const globalObj = typeof window !== 'undefined' ? window : global;
globalObj.RateLimiterMiddleware = RateLimiterMiddleware;

module.exports = RateLimiterMiddleware;

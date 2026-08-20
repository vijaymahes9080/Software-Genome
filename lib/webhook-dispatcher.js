/**
 * Software Genome (SGX) - Transactional Outbox Webhook Dispatcher
 */

class WebhookDispatcher {
  generateOutboxHandler() {
    return `// =========================================================
// Software Genome Outbox Pattern Webhook Publisher
// Lineage: Synthesized from Booking.com + Airbnb (Outbox Pattern)
// =========================================================

const axios = require('axios');

class OutboxWorker {
  async processOutboxQueue(dbPool) {
    const { rows } = await dbPool.query(
      "SELECT * FROM webhook_outbox WHERE status = 'PENDING' LIMIT 20 FOR UPDATE SKIP LOCKED"
    );

    for (const msg of rows) {
      try {
        await axios.post(msg.destination_url, msg.payload, { timeout: 3000 });
        await dbPool.query("UPDATE webhook_outbox SET status = 'DELIVERED' WHERE id = $1", [msg.id]);
      } catch (err) {
        await dbPool.query("UPDATE webhook_outbox SET status = 'FAILED', retry_count = retry_count + 1 WHERE id = $1", [msg.id]);
      }
    }
  }
}

module.exports = OutboxWorker;
`;
  }
}

const globalObj = typeof window !== 'undefined' ? window : global;
globalObj.WebhookDispatcher = WebhookDispatcher;

module.exports = WebhookDispatcher;

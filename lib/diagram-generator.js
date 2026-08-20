/**
 * Software Genome (SGX) - Mermaid.js Architecture Diagram Synthesizer
 */

class MermaidDiagramGenerator {
  generateSequenceDiagram() {
    return `sequenceDiagram
    autonumber
    actor User as Field Agent / Buyer
    participant App as React PWA (Offline Store)
    participant GW as GraphQL Gateway
    participant Cache as Redis Tile Mesh
    participant DB as PostGIS Database
    participant Kafka as Event Bus

    User->>App: Perform Spatial Land Search (Bounding Box)
    alt Is Device Online
        App->>GW: GET /api/v1/rural-properties (Spatial Bounds)
        GW->>Cache: Query Redis Cache
        alt Cache Hit
            Cache-->>GW: Return GeoJSON Listings (<5ms)
        else Cache Miss
            GW->>DB: ST_Within(geom, ST_MakeEnvelope)
            DB-->>GW: Return Spatial Coordinates
            GW->>Cache: Set Cache TTL 300s
        end
        GW-->>App: Render Vector Map & Land Cards
    else Is Device Offline
        App->>App: Query IndexedDB Local Cache
        App-->>User: Render Cached Farmland Listings
    end

    User->>App: Submit New Land Listing (Offline Draft)
    App->>App: Save to ServiceWorker Outbox Queue
    Note over App,GW: When Connectivity Restored
    App->>GW: POST /api/v1/offline-sync
    GW->>Kafka: Publish "property-created" Event
    Kafka->>DB: Batch Insert & Trigger Spatial Index Update
`;
  }
}

const globalObj = typeof window !== 'undefined' ? window : global;
globalObj.MermaidDiagramGenerator = MermaidDiagramGenerator;

module.exports = MermaidDiagramGenerator;

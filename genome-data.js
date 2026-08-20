/**
 * Software Genome (SGX) - Core Genome Data & Benchmark Repository
 */

const BENCHMARK_APPS = [
  {
    id: "app-airbnb",
    name: "Airbnb",
    category: "Property Marketplace & Hospitality",
    icon: "🏠",
    tagline: "Global vacation rental & home sharing platform",
    color: "#FF385C",
    architectureType: "Event-Driven Microservices",
    stats: { screens: 42, tables: 86, apis: 124, score: 94 },
    genomeLayers: {
      ux: {
        title: "🎨 UX Genome",
        patterns: [
          "Split-view interactive map & property card grid",
          "Dynamic date-range & guest count filter drawer",
          "Step-by-step host onboarding wizard",
          "Wishlist collection with collaborative sharing",
          "Unified messaging & reservation inbox"
        ]
      },
      data: {
        title: "🗄️ Data Genome",
        patterns: [
          "Listing entity with dynamic pricing tiers & seasonal rules",
          "Geospatial indexed property locations (H3 / S2 spatial indexing)",
          "Poly-store: Postgres (Bookings), Cassandra (Messages), Redis (Cache)",
          "State-machine for reservation workflow (Pending -> Confirmed -> Completed)",
          "Review & Rating aggregation pipeline with weighted trust score"
        ]
      },
      architecture: {
        title: "🏗️ Architecture Genome",
        patterns: [
          "GraphQL gateway with service mesh aggregation (Apollo Federation)",
          "Asynchronous event bus (Kafka) for booking state transitions",
          "Decoupled search service backed by Elasticsearch",
          "Edge image optimization & multi-region CDN distribution"
        ]
      },
      pattern: {
        title: "🧩 Pattern Genome",
        patterns: [
          "Command Query Responsibility Segregation (CQRS) for listings",
          "Optimistic UI updates for favorite/wishlist toggles",
          "Circuit Breaker pattern for third-party payout APIs",
          "Repository pattern for data access abstractions"
        ]
      },
      security: {
        title: "🔐 Security Genome",
        patterns: [
          "OAuth 2.0 + OIDC with multi-factor authentication (MFA)",
          "Role-Based Access Control (RBAC: Guest, Host, Co-host, Admin)",
          "End-to-end PII encryption at rest (KMS envelope encryption)",
          "PCI-DSS compliant payment tokenization via Stripe/Adyen"
        ]
      },
      performance: {
        title: "⚡ Performance Genome",
        patterns: [
          "Tile-based map viewport bounds caching",
          "GraphQL response caching with Stale-While-Revalidate",
          "Lazy-loaded image galleries with blur-up placeholder previews",
          "Read-replica routing for listing detail queries"
        ]
      },
      ai: {
        title: "🤖 AI Genome",
        patterns: [
          "Personalized property recommendation engine (Collaborative filtering)",
          "Smart dynamic pricing suggestion model for hosts",
          "AI review summary generator & sentiment tagger",
          "Image aesthetics score & automatically categorized listing photos"
        ]
      },
      integration: {
        title: "🔗 Integration Genome",
        patterns: [
          "Stripe & PayPal multi-currency payment payout webhooks",
          "Twilio SMS & SendGrid email notification dispatcher",
          "Google Maps / Mapbox Vector Tile APIs",
          "Calendar iCal synchronization protocol"
        ]
      }
    }
  },
  {
    id: "app-booking",
    name: "Booking.com",
    category: "Travel & Accommodations",
    icon: "🏨",
    tagline: "High-concurrency global hotel & property booking engine",
    color: "#003580",
    architectureType: "High-Throughput Distributed System",
    stats: { screens: 56, tables: 112, apis: 180, score: 91 },
    genomeLayers: {
      ux: {
        title: "🎨 UX Genome",
        patterns: [
          "Urgency & scarcity triggers ('Only 1 room left at this price!')",
          "Multi-attribute filter sidebar with real-time tally counters",
          "Instant confirmation badge & printable voucher flow",
          "Genius loyalty tier status progression dashboard"
        ]
      },
      data: {
        title: "🗄️ Data Genome",
        patterns: [
          "Hotel inventory block allocation & lock mechanism",
          "Complex currency conversion matrix with live rate updates",
          "Multi-property chain hierarchy (Brand -> Hotel -> Room Type -> Unit)"
        ]
      },
      architecture: {
        title: "🏗️ Architecture Genome",
        patterns: [
          "Low-latency distributed cache mesh (Redis Cluster)",
          "Microfrontends architecture with independent vertical deployments",
          "gRPC internal microservices communication"
        ]
      },
      pattern: {
        title: "🧩 Pattern Genome",
        patterns: [
          "Saga pattern for multi-step booking transactions",
          "Rate Limiter & bot protection middleware",
          "Outbox pattern for guaranteed webhook message publishing"
        ]
      },
      security: {
        title: "🔐 Security Genome",
        patterns: [
          "Strict Anti-Scraping / Bot Mitigation (Cloudflare + Custom WAF)",
          "Session token pinning with IP fingerprinting",
          "GDPR data subject request automated erasure pipeline"
        ]
      },
      performance: {
        title: "⚡ Performance Genome",
        patterns: [
          "Edge-cached static search pages across 200+ POPs",
          "Gzip/Brotli payload compression with JSON binary serialization",
          "Asynchronous room availability check streaming (Server-Sent Events)"
        ]
      },
      ai: {
        title: "🤖 AI Genome",
        patterns: [
          "Real-time fraud detection AI during checkout",
          "Multilingual neural machine translation for host reviews",
          "Dynamic rank booster based on user conversion propensity"
        ]
      },
      integration: {
        title: "🔗 Integration Genome",
        patterns: [
          "Global Distribution System (GDS: Amadeus, Sabre) connectivity",
          "Hotel Channel Manager XML/JSON sync protocol",
          "Local payment gateways (iDEAL, Alipay, WeChat Pay)"
        ]
      }
    }
  },
  {
    id: "app-zillow",
    name: "Zillow",
    category: "Real Estate & Valuations",
    icon: "🏠",
    tagline: "Residential real estate database, Zestimate & agent portal",
    color: "#006AFF",
    architectureType: "Data-Lakehouse & Microservices",
    stats: { screens: 48, tables: 95, apis: 140, score: 93 },
    genomeLayers: {
      ux: {
        title: "🎨 UX Genome",
        patterns: [
          "Draw-on-map custom geographic boundary search",
          "Zestimate valuation historical curve chart visualization",
          "3D virtual home walkthrough viewer & floorplan overlay",
          "Tour scheduling calendar drawer with local agent assignment"
        ]
      },
      data: {
        title: "🗄️ Data Genome",
        patterns: [
          "MLS (Multiple Listing Service) normalized data store (RESO Web API)",
          "Property tax history, price change log, and school boundary records",
          "Time-series database for historical home value estimates"
        ]
      },
      architecture: {
        title: "🏗️ Architecture Genome",
        patterns: [
          "Spark / Snowflake data lakehouse for automated valuation models",
          "Geospatial indexing engine (PostGIS + Elasticsearch)",
          "Serverless API endpoints (AWS Lambda) for tax calculations"
        ]
      },
      pattern: {
        title: "🧩 Pattern Genome",
        patterns: [
          "ETL Ingestion Pipeline with Schema Evolution detection",
          "Observer pattern for real-time price drop notification alerts",
          "Facade pattern for multi-source MLS provider integration"
        ]
      },
      security: {
        title: "🔐 Security Genome",
        patterns: [
          "Agent license credential validation pipeline",
          "Fine-grained MLS licensing compliance access rules",
          "Rate-limited public API endpoints with JWT API keys"
        ]
      },
      performance: {
        title: "⚡ Performance Genome",
        patterns: [
          "Spatial index caching (R-Tree / QuadTree in memory)",
          "Pre-rendered static property pages (SSG with Incremental Regeneration)",
          "Vector tile compression for rapid map rendering"
        ]
      },
      ai: {
        title: "🤖 AI Genome",
        patterns: [
          "Zestimate automated valuation AI model (Computer Vision + Tabular)",
          "Floorplan generator from panoramic room photos",
          "Natural language property description generator"
        ]
      },
      integration: {
        title: "🔗 Integration Genome",
        patterns: [
          "RESO Web API / RETS MLS synchronization engine",
          "Mortgage rates API & debt affordability calculator",
          "Local school district & crime rate data feeds"
        ]
      }
    }
  },
  {
    id: "app-redfin",
    name: "Redfin",
    category: "Real Estate Brokerage",
    icon: "🏡",
    tagline: "Direct-to-consumer technology powered real estate brokerage",
    color: "#CC0000",
    architectureType: "Real-time MLS Ingestion & Web App",
    stats: { screens: 38, tables: 74, apis: 110, score: 89 },
    genomeLayers: {
      ux: {
        title: "🎨 UX Genome",
        patterns: [
          "Direct agent tour booking with instantly confirmed time slots",
          "Hot Home competition indicator gauge",
          "Owner dashboard with live market view and listing activity analytics"
        ]
      },
      data: {
        title: "🗄️ Data Genome",
        patterns: [
          "Direct agent schedule shift calendar & dispatch table",
          "Commission fee calculation rules engine",
          "Offer tracking pipeline with status timestamps"
        ]
      },
      architecture: {
        title: "🏗️ Architecture Genome",
        patterns: [
          "Near-realtime 5-minute MLS data refresh pipeline",
          "WebSocket server cluster for live agent tour updates",
          "Containerized microservices on Kubernetes (EKS)"
        ]
      },
      pattern: {
        title: "🧩 Pattern Genome",
        patterns: [
          "Publish-Subscribe for instantaneous client update feeds",
          "State pattern for house listing lifecycle",
          "Proxy pattern for protected buyer contact details"
        ]
      },
      security: {
        title: "🔐 Security Genome",
        patterns: [
          "DocuSign digital document signing integration with audit trail",
          "Strict identity verification for agent home access locks",
          "TLS 1.3 encrypted data channel for buyer offers"
        ]
      },
      performance: {
        title: "⚡ Performance Genome",
        patterns: [
          "Optimized Mapbox GL client-side clustering",
          "Distributed Redis cache for fast hot-home computation",
          "Debounced client search input with query cancellation"
        ]
      },
      ai: {
        title: "🤖 AI Genome",
        patterns: [
          "Hot Home predictive likelihood classifier",
          "Automated comparative market analysis (CMA) report builder",
          "Image enhancement & lighting auto-correction AI"
        ]
      },
      integration: {
        title: "🔗 Integration Genome",
        patterns: [
          "DocuSign e-Signature API",
          "Smart Keyless lockbox IoT API (August / Supra)",
          "Title & Escrow closing software integration"
        ]
      }
    }
  },
  {
    id: "app-realtor",
    name: "Realtor.com",
    category: "Property Search & Media",
    icon: "🏢",
    tagline: "National Association of Realtors official listing portal",
    color: "#D9222A",
    architectureType: "High-Traffic Content Portal",
    stats: { screens: 40, tables: 82, apis: 115, score: 88 },
    genomeLayers: {
      ux: {
        title: "🎨 UX Genome",
        patterns: [
          "Neighborhood noise level & flood risk visual overlays",
          "Mortgage calculator drawer with property tax sliders",
          "Saved search alert preference builder"
        ]
      },
      data: {
        title: "🗄️ Data Genome",
        patterns: [
          "Property history record linking 30+ year sales records",
          "Neighborhood amenity score & school rating database",
          "Lead attribution tracking table for real estate agents"
        ]
      },
      architecture: {
        title: "🏗️ Architecture Genome",
        patterns: [
          "Server-Side Rendered (SSR) React pages for SEO dominance",
          "Event-driven messaging queue for instant lead distribution",
          "Distributed GraphQL mesh for multi-tenant property data"
        ]
      },
      pattern: {
        title: "🧩 Pattern Genome",
        patterns: [
          "Decorator pattern for adding environmental hazard layers to maps",
          "Factory pattern for multi-state real estate lead routing",
          "Singleton configuration manager for API rate limits"
        ]
      },
      security: {
        title: "🔐 Security Genome",
        patterns: [
          "Lead privacy guard & consent tracking",
          "CAPTCHA protected contact agent forms",
          "Cross-Site Request Forgery (CSRF) token validation"
        ]
      },
      performance: {
        title: "⚡ Performance Genome",
        patterns: [
          "Aggressive Static Site Generation (SSG) for neighborhood pages",
          "Web Worker multi-threaded map marker calculations",
          "Image WebP/AVIF auto-conversion pipeline"
        ]
      },
      ai: {
        title: "🤖 AI Genome",
        patterns: [
          "Neighborhood safety & flood risk AI scoring models",
          "Property image room tagger (Kitchen, Backyard, Master Bedroom)",
          "Buyer preference matching engine"
        ]
      },
      integration: {
        title: "🔗 Integration Genome",
        patterns: [
          "FEMA flood hazard data API",
          "GreatSchools API for school ratings",
          "Agent CRM integrations (Salesforce, Follow Up Boss)"
        ]
      }
    }
  },
  {
    id: "app-trulia",
    name: "Trulia",
    category: "Community & Local Insights",
    icon: "🏘️",
    tagline: "Neighborhood-focused residential property & lifestyle app",
    color: "#20C063",
    architectureType: "Microservices with GIS Emphasis",
    stats: { screens: 34, tables: 65, apis: 95, score: 87 },
    genomeLayers: {
      ux: {
        title: "🎨 UX Genome",
        patterns: [
          "Local visual story cards (What locals say about this area)",
          "Interactive heatmaps for crime, dining, and commute times",
          "Resident review feed with verified neighbor badges"
        ]
      },
      data: {
        title: "🗄️ Data Genome",
        patterns: [
          "Community insight sentiment database",
          "GIS polygon tables for custom neighborhood bounds",
          "User-submitted photo and commentary relational store"
        ]
      },
      architecture: {
        title: "🏗️ Architecture Genome",
        patterns: [
          "Tile server (Mapnik/PostGIS) for custom heatmap layer rendering",
          "Node.js API gateway with Redis caching",
          "Elasticsearch for geospatial text queries"
        ]
      },
      pattern: {
        title: "🧩 Pattern Genome",
        patterns: [
          "Strategy pattern for calculating overall Walk/Commute scores",
          "Observer pattern for neighborhood activity feeds",
          "Composite pattern for nested geographic regions"
        ]
      },
      security: {
        title: "🔐 Security Genome",
        patterns: [
          "Community guideline content moderation workflow",
          "Anonymized resident review posting",
          "Rate-limited geotargeted lookup endpoints"
        ]
      },
      performance: {
        title: "⚡ Performance Genome",
        patterns: [
          "Map tile caching via Cloudflare Workers",
          "Optimized GeoJSON compression (TopoJSON)",
          "Virtual scrolling lists for resident reviews"
        ]
      },
      ai: {
        title: "🤖 AI Genome",
        patterns: [
          "Resident commentary sentiment analyzer",
          "Automated neighborhood photo curator",
          "Commute time estimator under peak traffic conditions"
        ]
      },
      integration: {
        title: "🔗 Integration Genome",
        patterns: [
          "Yelp API for nearby restaurant data",
          "Walk Score API",
          "Transit & public transport feeds (GTFS format)"
        ]
      }
    }
  },
  {
    id: "app-hotpads",
    name: "HotPads",
    category: "Urban Rental Marketplace",
    icon: "🏢",
    tagline: "Map-centric urban apartment & house rental search engine",
    color: "#FF5A00",
    architectureType: "Map-First Web Application",
    stats: { screens: 28, tables: 52, apis: 80, score: 85 },
    genomeLayers: {
      ux: {
        title: "🎨 UX Genome",
        patterns: [
          "Map-dominant full screen view with sidebar peek preview",
          "Rent price filter with dynamic range distribution histogram",
          "Direct landlord instant messaging popup"
        ]
      },
      data: {
        title: "🗄️ Data Genome",
        patterns: [
          "Apartment building unit availability matrix",
          "Landlord response time tracking metrics",
          "Application submission status table"
        ]
      },
      architecture: {
        title: "🏗️ Architecture Genome",
        patterns: [
          "Real-time WebSocket connection for landlord chat",
          "Mapbox vector tile engine with high marker density",
          "Node.js microservices for rental lead management"
        ]
      },
      pattern: {
        title: "🧩 Pattern Genome",
        patterns: [
          "Flyweight pattern for high-density map marker objects",
          "State machine for rental application progression",
          "Mediator pattern for tenant-landlord communication"
        ]
      },
      security: {
        title: "🔐 Security Genome",
        patterns: [
          "Rental scam detection engine",
          "Tenant background check & credit score tokenization",
          "Encrypted direct messaging channel"
        ]
      },
      performance: {
        title: "⚡ Performance Genome",
        patterns: [
          "Canvas-based map marker renderer for 10,000+ listings",
          "In-memory Redis geospatial cache",
          "Fast JSON streaming response"
        ]
      },
      ai: {
        title: "🤖 AI Genome",
        patterns: [
          "Landlord scam/fraud probability classifier",
          "Rent price fairness evaluator",
          "Match score recommendation based on tenant budget & commute"
        ]
      },
      integration: {
        title: "🔗 Integration Genome",
        patterns: [
          "TransUnion SmartMove background check API",
          "Plaid API for tenant income verification",
          "Property management software sync (Yardi, RealPage)"
        ]
      }
    }
  },
  {
    id: "app-apartments",
    name: "Apartments.com",
    category: "Multifamily Rental Portal",
    icon: "🏢",
    tagline: "Comprehensive rental portal for complex multifamily communities",
    color: "#008080",
    architectureType: "Enterprise Rental Marketplace",
    stats: { screens: 45, tables: 90, apis: 130, score: 90 },
    genomeLayers: {
      ux: {
        title: "🎨 UX Genome",
        patterns: [
          "3D interactive building floorplan unit picker",
          "Move-in date availability matrix with live pricing",
          "Online rental application wizard with document upload"
        ]
      },
      data: {
        title: "🗄️ Data Genome",
        patterns: [
          "Complex unit lease terms database (6-18 month pricing grid)",
          "Pet policy, parking fee, and deposit breakdown schemas",
          "Tenant online application & co-signer relational records"
        ]
      },
      architecture: {
        title: "🏗️ Architecture Genome",
        patterns: [
          "Enterprise API gateway integrating with property management ERPs",
          "Content Delivery Network for HD video walkthroughs & 3D models",
          "Distributed SQL database (CockroachDB) for high availability"
        ]
      },
      pattern: {
        title: "🧩 Pattern Genome",
        patterns: [
          "Builder pattern for assembling dynamic lease agreements",
          "Adapter pattern for legacy property management software feeds",
          "Chain of Responsibility for tenant application approval"
        ]
      },
      security: {
        title: "🔐 Security Genome",
        patterns: [
          "FCRA-compliant credit reporting data pipeline",
          "Secure document vault for bank statements & paystubs",
          "Multi-tenant data isolation per property management firm"
        ]
      },
      performance: {
        title: "⚡ Performance Genome",
        patterns: [
          "3D mesh optimization for web GL rendering speed",
          "Server-side pre-fetching of unit availability grids",
          "Edge routing based on user geolocation"
        ]
      },
      ai: {
        title: "🤖 AI Genome",
        patterns: [
          "Dynamic rent yield optimization engine for property managers",
          "AI virtual leasing agent chatbot for instant FAQs",
          "Tenant churn prediction model"
        ]
      },
      integration: {
        title: "🔗 Integration Genome",
        patterns: [
          "Yardi Voyager API",
          "RealPage / RentManager API",
          "Experian credit check API"
        ]
      }
    }
  },
  {
    id: "app-compass",
    name: "Compass",
    category: "Luxury Tech Brokerage",
    icon: "📐",
    tagline: "Premium end-to-end technology platform for luxury agents",
    color: "#8E44AD",
    architectureType: "Agent-Centric Enterprise Platform",
    stats: { screens: 50, tables: 105, apis: 160, score: 92 },
    genomeLayers: {
      ux: {
        title: "🎨 UX Genome",
        patterns: [
          "Digital client Workspace for co-designing search criteria",
          "Marketing center with drag-and-drop flyer & social ad generator",
          "Insights dashboard tracking client view time & favorite properties"
        ]
      },
      data: {
        title: "🗄️ Data Genome",
        patterns: [
          "Client relationship management (CRM) contacts & interactions graph",
          "Private Exclusive non-MLS off-market listing table",
          "Marketing campaign performance metrics store"
        ]
      },
      architecture: {
        title: "🏗️ Architecture Genome",
        patterns: [
          "Microservices architecture with Go & Python backend services",
          "Event-driven architecture with NATS messaging",
          "GraphQL interface powering web, iOS, and Android clients"
        ]
      },
      pattern: {
        title: "🧩 Pattern Genome",
        patterns: [
          "Command pattern for marketing asset generation workflows",
          "Observer pattern for real-time client activity notifications",
          "Factory pattern for multi-channel ad dispatching"
        ]
      },
      security: {
        title: "🔐 Security Genome",
        patterns: [
          "Strict off-market NDA listing access controls",
          "Agent team permission scoping (Lead Agent, Assistant, Transaction Coordinator)",
          "Enterprise SSO (SAML 2.0 / Okta)"
        ]
      },
      performance: {
        title: "⚡ Performance Genome",
        patterns: [
          "High-performance Go backend service endpoints (<10ms response)",
          "Client workspace state sync via Operational Transformation / CRDTs",
          "Aggressive asset bundling & dynamic code splitting"
        ]
      },
      ai: {
        title: "🤖 AI Genome",
        patterns: [
          "Likely to Sell predictive listing AI model for agents",
          "Automated marketing copy generation for luxury listings",
          "AI agent task assistant & follow-up reminder generator"
        ]
      },
      integration: {
        title: "🔗 Integration Genome",
        patterns: [
          "Facebook/Instagram Ads API for agent campaign launching",
          "Google Workspace & Microsoft 365 calendar/email sync",
          "DocuSign & ZipLogix e-signature integration"
        ]
      }
    }
  },
  {
    id: "app-opendoor",
    name: "Opendoor",
    category: "iBuyer & Direct Home Purchasing",
    icon: "🚪",
    tagline: "Instant algorithmic cash offer home buying & selling platform",
    color: "#0052FF",
    architectureType: "Algorithmic Pricing & Operations System",
    stats: { screens: 32, tables: 78, apis: 105, score: 91 },
    genomeLayers: {
      ux: {
        title: "🎨 UX Genome",
        patterns: [
          "Instant cash offer request flow in 5 simple steps",
          "Self-guided video home inspection upload tool",
          "Flexible close-date selector slider (14 to 60 days)"
        ]
      },
      data: {
        title: "🗄️ Data Genome",
        patterns: [
          "Automated cash offer evaluation & risk margin model schema",
          "Home repair assessment breakdown & deductibles table",
          "Inventory holding cost & resale ledger"
        ]
      },
      architecture: {
        title: "🏗️ Architecture Genome",
        patterns: [
          "Machine learning model serving platform (Python / Ray / FastAPI)",
          "PostgreSQL primary database with transactional guarantees",
          "Asynchronous worker queues (Celery / RabbitMQ) for offer generation"
        ]
      },
      pattern: {
        title: "🧩 Pattern Genome",
        patterns: [
          "State Machine for home acquisition (Requested -> Offer Made -> Inspection -> Closed -> Renovated -> Relisted)",
          "Strategy pattern for location-specific risk adjustments",
          "Unit of Work pattern for financial escrow calculations"
        ]
      },
      security: {
        title: "🔐 Security Genome",
        patterns: [
          "Digital identity & land deed ownership verification",
          "Financial escrow wire fraud prevention safeguards",
          "Self-tour smart lock temporary pin code authorization"
        ]
      },
      performance: {
        title: "⚡ Performance Genome",
        patterns: [
          "Pre-computed valuation cache for nationwide zip codes",
          "Async background processing for heavy vision models",
          "Optimized image processing for rapid condition inspection"
        ]
      },
      ai: {
        title: "🤖 AI Genome",
        patterns: [
          "iBuyer automated valuation & offer decision model (AVM)",
          "Computer vision defect detector from home walk-through videos",
          "Resale price trajectory forecast AI"
        ]
      },
      integration: {
        title: "🔗 Integration Genome",
        patterns: [
          "Smart lock API (Schlage / Yale) for self-guided buyer tours",
          "Title insurance automated underwriting API",
          "Contractor work-order repair management API"
        ]
      }
    }
  }
];

const GENOME_GRAPH_INITIAL_NODES = [
  // App Nodes
  { id: "node-airbnb", label: "Airbnb", type: "app", layer: "core", app: "app-airbnb", x: 150, y: 150, color: "#FF385C" },
  { id: "node-booking", label: "Booking.com", type: "app", layer: "core", app: "app-booking", x: 450, y: 120, color: "#003580" },
  { id: "node-zillow", label: "Zillow", type: "app", layer: "core", app: "app-zillow", x: 750, y: 160, color: "#006AFF" },
  { id: "node-redfin", label: "Redfin", type: "app", layer: "core", app: "app-redfin", x: 300, y: 320, color: "#CC0000" },
  { id: "node-realtor", label: "Realtor", type: "app", layer: "core", app: "app-realtor", x: 600, y: 300, color: "#D9222A" },
  { id: "node-trulia", label: "Trulia", type: "app", layer: "core", app: "app-trulia", x: 180, y: 480, color: "#20C063" },
  { id: "node-hotpads", label: "HotPads", type: "app", layer: "core", app: "app-hotpads", x: 420, y: 500, color: "#FF5A00" },
  { id: "node-apartments", label: "Apartments.com", type: "app", layer: "core", app: "app-apartments", x: 720, y: 480, color: "#008080" },
  { id: "node-compass", label: "Compass", type: "app", layer: "core", app: "app-compass", x: 880, y: 320, color: "#8E44AD" },
  { id: "node-opendoor", label: "Opendoor", type: "app", layer: "core", app: "app-opendoor", x: 50, y: 320, color: "#0052FF" },

  // Extracted Gene Nodes across 8 layers
  { id: "gene-ux-mapgrid", label: "Map + Card Grid", type: "gene", layer: "ux", x: 300, y: 220, frequency: 9 },
  { id: "gene-ux-filter", label: "Drawer Filters", type: "gene", layer: "ux", x: 500, y: 220, frequency: 10 },
  { id: "gene-ux-wizard", label: "Multi-step Onboarding", type: "gene", layer: "ux", x: 120, y: 250, frequency: 7 },
  
  { id: "gene-data-gis", label: "Geospatial Indexing (H3/PostGIS)", type: "gene", layer: "data", x: 380, y: 280, frequency: 8 },
  { id: "gene-data-statemachine", label: "Reservation State Machine", type: "gene", layer: "data", x: 220, y: 220, frequency: 6 },

  { id: "gene-arch-graphql", label: "GraphQL Gateway", type: "gene", layer: "architecture", x: 450, y: 380, frequency: 7 },
  { id: "gene-arch-kafka", label: "Kafka Event Bus", type: "gene", layer: "architecture", x: 620, y: 220, frequency: 5 },

  { id: "gene-pat-cqrs", label: "CQRS Pattern", type: "gene", layer: "pattern", x: 350, y: 400, frequency: 6 },
  { id: "gene-pat-saga", label: "Saga Booking Pattern", type: "gene", layer: "pattern", x: 520, y: 400, frequency: 5 },

  { id: "gene-sec-oauth", label: "OAuth2 + RBAC Security", type: "gene", layer: "security", x: 260, y: 380, frequency: 10 },
  { id: "gene-sec-token", label: "Payment Tokenization", type: "gene", layer: "security", x: 100, y: 400, frequency: 8 },

  { id: "gene-perf-tile", label: "Vector Tile Caching", type: "gene", layer: "performance", x: 680, y: 380, frequency: 9 },
  { id: "gene-perf-redis", label: "Redis Cluster Mesh", type: "gene", layer: "performance", x: 550, y: 460, frequency: 8 },

  { id: "gene-ai-rec", label: "Collaborative Filtering Recs", type: "gene", layer: "ai", x: 260, y: 150, frequency: 7 },
  { id: "gene-ai-vision", label: "CV Photo Tagger", type: "gene", layer: "ai", x: 800, y: 240, frequency: 5 },

  { id: "gene-int-stripe", label: "Stripe Payment Gateway", type: "gene", layer: "integration", x: 680, y: 240, frequency: 9 },
  { id: "gene-int-maps", label: "Mapbox / Google Maps API", type: "gene", layer: "integration", x: 480, y: 150, frequency: 10 }
];

const GENOME_GRAPH_INITIAL_EDGES = [
  { source: "node-airbnb", target: "gene-ux-mapgrid", label: "extracts" },
  { source: "node-booking", target: "gene-ux-mapgrid", label: "extracts" },
  { source: "node-zillow", target: "gene-ux-mapgrid", label: "extracts" },
  { source: "node-hotpads", target: "gene-ux-mapgrid", label: "extracts" },
  { source: "node-trulia", target: "gene-ux-mapgrid", label: "extracts" },

  { source: "node-airbnb", target: "gene-data-gis", label: "extracts" },
  { source: "node-zillow", target: "gene-data-gis", label: "extracts" },
  { source: "node-trulia", target: "gene-data-gis", label: "extracts" },

  { source: "node-airbnb", target: "gene-arch-graphql", label: "extracts" },
  { source: "node-realtor", target: "gene-arch-graphql", label: "extracts" },
  { source: "node-compass", target: "gene-arch-graphql", label: "extracts" },

  { source: "node-booking", target: "gene-pat-saga", label: "extracts" },
  { source: "node-airbnb", target: "gene-data-statemachine", label: "extracts" },
  { source: "node-opendoor", target: "gene-data-statemachine", label: "extracts" },

  { source: "node-airbnb", target: "gene-ai-rec", label: "extracts" },
  { source: "node-realtor", target: "gene-ai-vision", label: "extracts" },
  { source: "node-zillow", target: "gene-ai-vision", label: "extracts" },

  { source: "node-zillow", target: "gene-perf-tile", label: "extracts" },
  { source: "node-redfin", target: "gene-perf-tile", label: "extracts" },
  { source: "node-hotpads", target: "gene-perf-tile", label: "extracts" }
];

const globalObj = typeof window !== 'undefined' ? window : global;
globalObj.SGX_BENCHMARK_APPS = BENCHMARK_APPS;
globalObj.SGX_GRAPH_NODES = GENOME_GRAPH_INITIAL_NODES;
globalObj.SGX_GRAPH_EDGES = GENOME_GRAPH_INITIAL_EDGES;

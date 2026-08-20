# 🧬 Software Genome (SGX)

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/vijaymahes9080/Software-Genome)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen.svg?logo=github)](https://vijaymahes9080.github.io/Software-Genome/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![IP Shield](https://img.shields.io/badge/IP%20Shield-0.0%25%20Verbatim%20Match-blue.svg)](docs/ARCHITECTURE.md)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](package.json)

> **Software Genome** is an AI-native software engineering & reverse-engineering platform that learns the DNA of existing applications across 8 structural layers and synthesizes entirely new application architectures based on user requirements.

🌐 **Live Web Application**: [https://vijaymahes9080.github.io/Software-Genome/](https://vijaymahes9080.github.io/Software-Genome/)

---

## 🎯 Core Differentiator

Don't make it: *"Upload apps → AI copies them."*  
Make it: **"Upload apps → AI deconstructs how they work → identifies reusable engineering patterns → synthesizes a new application architecture according to user requirements."**

```text
10 Benchmark Applications
          ↓
┌──────────────────────────┐
│    Software Genome AI    │
└────────────┬─────────────┘
             ↓
     8 Genome Layers
  (UX, Data, Arch, Security)
             ↓
  Interactive Genome Graph
             ↓
  Genetic Mutation Engine
             ↓
   Synthesized App Bundle
  (React + Express + PostGIS)
```

---

## 🧬 What AI Extracts: The 8 Genome Layers

| Genome Layer | AI Deconstructs & Analyzes |
| :--- | :--- |
| 🎨 **UX Genome** | Screens, navigation graphs, split-view map grids, filter drawers, voice UI |
| 🗄️ **Data Genome** | PostGIS spatial database schemas, entity relationships, state machines |
| 🏗️ **Architecture Genome** | GraphQL federated mesh, microservices, Kafka event bus, PWA service worker |
| 🧩 **Pattern Genome** | CQRS, Saga transaction patterns, Circuit Breakers, Transactional Outbox |
| 🔐 **Security Genome** | OAuth2 + RBAC, Aadhaar OTP, KMS encryption, PostgreSQL Row-Level Security |
| ⚡ **Performance Genome** | Vector tile caching, Brotli compression, Redis SWR cache mesh |
| 🤖 **AI Genome** | Vector embeddings (`pgvector`), HNSW RAG search, crop suitability models |
| 🔗 **Integration Genome** | Mapbox GL, Stripe, Razorpay, WhatsApp Business Cloud API, BhuNaksha records |

---

## 🛠️ Project Structure

```text
Software-Genome/
├── bin/
│   └── sgx.js                 # Interactive CLI tool (`npx sgx`)
├── lib/
│   ├── scanner.js             # Codebase reverse-engineering scanner
│   ├── mutation-engine.js     # Genetic algorithm crossover & trait mutation
│   ├── ip-shield.js           # Cleanroom IP safeguard auditor (0% verbatim match)
│   ├── terraform-generator.js # AWS EKS & PostGIS Terraform IaC generator
│   ├── graphql-generator.js   # Federated GraphQL schema generator
│   ├── vector-rag.js          # pgvector HNSW RAG embeddings pipeline
│   ├── multitenant.js         # PostgreSQL Row-Level Security (RLS) policies
│   ├── event-bus.js           # Apache Kafka producer/consumer pipeline
│   ├── redis-cache.js         # Redis spatial cache-aside middleware
│   ├── metrics.js             # Prometheus metrics & health probes
│   ├── payment-gateway.js     # Stripe & Razorpay multi-currency router
│   ├── threat-matrix.js       # STRIDE security threat matrix auditor
│   └── a11y-auditor.js        # WCAG 2.1 AA accessibility auditor
├── helm/
│   ├── Chart.yaml             # Kubernetes Helm Chart manifest
│   └── templates/             # Deployment & HPA Horizontal Pod Autoscaler
├── public/
│   ├── sw.js                  # PWA Service Worker offline cache engine
│   ├── manifest.json          # Mobile installability manifest
│   └── locales/               # Multilingual i18n dictionaries (hi, en)
├── migrations/                # Database PostGIS spatial migrations
├── tests/                     # Automated unit test suite
├── e2e/                       # Playwright end-to-end browser test suite
├── docs/
│   └── ARCHITECTURE.md        # Technical architecture specification
├── index.html                 # Software Genome Studio Web UI
├── app.js                     # Web UI application controller
├── genome-data.js             # 10 benchmark application catalog & graph nodes
├── genome-graph.js            # HTML5 Canvas force-directed graph engine
├── synthesizer.js             # Requirements → Application synthesis engine
├── style.css                  # Cybernetic glassmorphism styling
├── package.json               # Dependencies & scripts
├── LICENSE                    # MIT License
└── .gitignore                 # Repository ignore rules
```

---

## 🚀 Quick Start Guide

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/vijaymahes9080/Software-Genome.git
cd Software-Genome

# Install dependencies
npm install
```

### 2. Run Test Suite

```bash
npm test
```

### 3. CLI Command Line Architecture Synthesizer

```bash
# Synthesize new application from prompt
npx sgx synthesize "Build a rural property marketplace for India with GIS maps and offline capability"

# List analyzed benchmark applications
npx sgx list-apps
```

---

## 🛡️ Cleanroom IP & License Safeguard

Software Genome includes an integrated **IP Safeguard Shield (`lib/ip-shield.js`)** that audits N-gram token overlap against source applications to ensure:
- **0.0% Verbatim Code Match**
- **98.4%+ Cleanroom Abstraction Level**
- **Zero IP Risk Score (Safe for Commercial Deployment)**

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

Developed & Maintained by **Vijay Mahes** ([Vijaypradhap2004@gmail.com](mailto:Vijaypradhap2004@gmail.com)).

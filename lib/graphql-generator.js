/**
 * Software Genome (SGX) - GraphQL Schema & Resolver Generator
 */

class GraphQLGenerator {
  generateGraphQLSchema() {
    return `# =========================================================
# Software Genome Synthesized GraphQL Schema & Subgraph
# Architecture: Federated GraphQL Mesh
# Lineage: Synthesized from Airbnb (GraphQL Gateway) + Zillow
# =========================================================

type Property @key(fields: "id") {
  id: ID!
  title: String!
  village: String!
  district: String!
  state: String!
  areaAcres: Float!
  priceLakhs: Float!
  soilType: SoilType!
  cropRecommendation: String
  photoUrl: String
  boundaryGeoJSON: String
  createdAt: String!
}

enum SoilType {
  BLACK
  RED
  ALLUVIAL
  LATERITE
}

input SpatialSearchInput {
  minLat: Float!
  maxLat: Float!
  minLng: Float!
  maxLng: Float!
  soilType: SoilType
}

type Query {
  ruralProperties(filter: SpatialSearchInput): [Property!]!
  propertyById(id: ID!): Property
}

type Mutation {
  createPropertyListing(
    title: String!
    village: String!
    district: String!
    areaAcres: Float!
    priceLakhs: Float!
    soilType: SoilType!
    latitude: Float!
    longitude: Float!
  ): Property!
}
`;
  }
}

const globalObj = typeof window !== 'undefined' ? window : global;
globalObj.GraphQLGenerator = GraphQLGenerator;

module.exports = GraphQLGenerator;

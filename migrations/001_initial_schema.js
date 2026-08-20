/**
 * Software Genome Migration 001: Initial PostGIS Spatial Schema
 */

exports.up = async function(db) {
  await db.query(`
    CREATE EXTENSION IF NOT EXISTS postgis;

    CREATE TABLE IF NOT EXISTS rural_land_listings (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title VARCHAR(255) NOT NULL,
        village VARCHAR(100) NOT NULL,
        district VARCHAR(100) NOT NULL,
        area_acres NUMERIC(8,2) NOT NULL,
        price_lakhs NUMERIC(10,2) NOT NULL,
        geom GEOMETRY(Point, 4326)
    );

    CREATE INDEX IF NOT EXISTS idx_land_geom ON rural_land_listings USING GIST(geom);
  `);
};

exports.down = async function(db) {
  await db.query(`DROP TABLE IF EXISTS rural_land_listings;`);
};

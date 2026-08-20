/**
 * Software Genome (SGX) - Multi-Tenant Security & Schema Generator
 * Generates Row-Level Security (RLS) PostgreSQL policies for multi-tenant isolation.
 */

class MultiTenantGenerator {
  generateRLSPolicies(tableName = 'rural_land_listings') {
    return `-- =========================================================
-- Multi-Tenant Row-Level Security (RLS) Isolation Blueprint
-- Lineage: Synthesized from Security Genome (Enterprise Multi-Tenant Isolation)
-- =========================================================

-- 1. Enable RLS on Table
ALTER TABLE ${tableName} ENABLE ROW LEVEL SECURITY;

-- 2. Create Tenant Context Policy Function
CREATE OR REPLACE FUNCTION current_tenant_id() RETURNS UUID AS $$
    SELECT NULLIF(current_setting('app.current_tenant_id', true), '')::UUID;
$$ LANGUAGE sql STABLE;

-- 3. Restrict Select Access to Tenant's Own Records
CREATE POLICY tenant_isolation_select_policy ON ${tableName}
    FOR SELECT
    USING (tenant_id = current_tenant_id() OR current_setting('app.is_super_admin', true) = 'true');

-- 4. Restrict Insert/Update Access
CREATE POLICY tenant_isolation_mod_policy ON ${tableName}
    FOR ALL
    WITH CHECK (tenant_id = current_tenant_id());
`;
  }
}

const globalObj = typeof window !== 'undefined' ? window : global;
globalObj.MultiTenantGenerator = MultiTenantGenerator;

module.exports = MultiTenantGenerator;

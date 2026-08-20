/**
 * Software Genome (SGX) - Role-Based Access Control (RBAC) Matrix
 */

class RBACMatrixGenerator {
  generateRBACPermissions() {
    return {
      roles: {
        ADMIN: ['*'],
        PANCHAYAT_OFFICIAL: ['read:all_listings', 'verify:land_title', 'approve:panchayat_certificate'],
        VILLAGE_AGENT: ['create:listing_draft', 'upload:land_photos', 'read:assigned_listings'],
        BUYER: ['read:public_listings', 'create:inquiry', 'save:wishlist'],
        GUEST: ['read:public_listings']
      }
    };
  }
}

const globalObj = typeof window !== 'undefined' ? window : global;
globalObj.RBACMatrixGenerator = RBACMatrixGenerator;

module.exports = RBACMatrixGenerator;

/**
 * Jersey Jems Configuration File
 * 
 * This file contains all the key URLs and settings for your dual-channel sales model.
 * Update the SHOPIFY_STORE_URL when you're ready to connect your actual Shopify store.
 * 
 * EASY UPDATE INSTRUCTIONS:
 * 1. Replace 'https://shop.jerseyjems.com' with your actual Shopify URL
 * 2. Save this file
 * 3. All pages will automatically use the new URL!
 */

const JERSEY_JEMS_CONFIG = {
    // ============================================
    // SHOPIFY STORE URL
    // ============================================
    // UPDATE THIS URL when your Shopify store is ready
    // Examples:
    //   - https://shop.jerseyjems.com
    //   - https://jerseyjems.myshopify.com
    //   - https://store.jerseyjems.com
    
    SHOPIFY_STORE_URL: 'https://shop.jerseyjems.com',
    
    // ============================================
    // CONTACT INFORMATION
    // ============================================
    PHONE: '843-548-7730',
    EMAIL: 'hello@jerseyjemsmb.com',
    FACEBOOK_URL: 'https://www.facebook.com/share/14H35yfvq22/?mibextid=wwXIfr',
    INSTAGRAM_URL: 'https://www.instagram.com/jerseyjemsmb',
    
    // ============================================
    // BUSINESS SETTINGS
    // ============================================
    BUSINESS_NAME: 'Jersey Jems',
    LOCATION: 'Myrtle Beach, SC',
    
    // Local pickup location
    HUDSONS_MARKET: {
        name: "Hudson's Market",
        address: '7000 N. Kings Highway, Myrtle Beach, SC 29572',
        schedule: 'Every Thursday'
    },
    
    // Shipping settings
    SHIPPING: {
        method: '2-Day Express',
        carriers: ['FedEx', 'UPS'],
        states: 'All 50 States',
        typical_cost_range: '$25-45'
    }
};

/**
 * Initialize Shopify links when page loads
 * This automatically updates all Shopify links to use the configured URL
 */
document.addEventListener('DOMContentLoaded', function() {
    // Update all links pointing to the Shopify store
    const shopifyLinks = document.querySelectorAll('a[href*="shop.jerseyjems.com"], #shop-now-btn, #main-shop-link');
    
    shopifyLinks.forEach(link => {
        link.href = JERSEY_JEMS_CONFIG.SHOPIFY_STORE_URL;
    });
    
    console.log('Jersey Jems Config: Shopify links updated to:', JERSEY_JEMS_CONFIG.SHOPIFY_STORE_URL);
});

/**
 * Helper function to get Shopify URL
 * Use this in your code: getShopifyURL()
 */
function getShopifyURL() {
    return JERSEY_JEMS_CONFIG.SHOPIFY_STORE_URL;
}

/**
 * Helper function to open Shopify store in new tab
 * Use this for buttons: onclick="openShopifyStore()"
 */
function openShopifyStore() {
    window.open(JERSEY_JEMS_CONFIG.SHOPIFY_STORE_URL, '_blank', 'noopener,noreferrer');
}

// Export config for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = JERSEY_JEMS_CONFIG;
}

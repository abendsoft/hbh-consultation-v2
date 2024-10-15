import { BillingInterval } from '@shopify/shopify-api'

export const billingConfig = {
    'My Shopify One-Time Charge': {
        amount: 5.0,
        currencyCode: 'USD',
        interval: BillingInterval.OneTime,
    },
}

import { LATEST_API_VERSION } from '@shopify/shopify-api'
import { ShopifyApp as ShopifyAppInterface, shopifyApp } from '@shopify/shopify-app-express'
import { Env } from '#configs/env'
import { shopifyDevConfig, shopifyProdConfig } from '#server/configs/shopify'

const shopify: ShopifyAppInterface = Env.NODE_ENV === 'production' ? shopifyApp(shopifyProdConfig) : shopifyApp(shopifyDevConfig)

export { shopify }
export const apiVersion = LATEST_API_VERSION

import { Router } from 'express'
import GDPRWebhookHandlers from '#shopify/gdpr'
import { shopify } from '#shopify/index'
import { validateSignature } from '#middlewares/validateShopifySignature'
import { Routes } from '#interfaces/routes.interface'

export class ShopifyRoute implements Routes {
    public router = Router()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(shopify.config.auth.path, shopify.auth.begin())
        this.router.get(shopify.config.auth.callbackPath, shopify.auth.callback(), shopify.redirectToShopifyOrAppRoot())
        this.router.post(shopify.config.webhooks.path, shopify.processWebhooks({ webhookHandlers: GDPRWebhookHandlers }))
        this.router.use(
            shopify.config.webhooks.path,
            validateSignature(),
            shopify.processWebhooks({ webhookHandlers: GDPRWebhookHandlers }),
        )
        this.router.use('/api/*', shopify.validateAuthenticatedSession())
    }
}

import { Router } from 'express'
import { Routes } from '#interfaces/routes.interface'
import { logger } from '#utils/logger'

export class WebhooksRoute implements Routes {
    public path = '/api/webhooks'
    public router = Router()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.post(`${this.path}`, async (_req, res) => {
            const shopUrl = _req.get('X-Shopify-Shop-Domain')
            const topic = _req.get('X-Shopify-Topic')
            logger.info(`============================================`)
            logger.info(`============================================`)
            logger.info(`====== 🚀 Webhook Topic= ${topic} 🚀 ======`)

            if (topic == 'app/uninstalled') {
                logger.info(`🚀 Shop Url ${shopUrl} 🚀`)
                logger.info(`============================================`)
                logger.info(`============================================`)
            }
        })
    }
}

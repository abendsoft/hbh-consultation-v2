import { Router } from 'express'
import serveStatic from 'serve-static'
import { shopify } from '#shopify/index'
import { Routes } from '#interfaces/routes.interface'
import { getStatickPath } from '#utils/shared/functions'

export class HeaderRoute implements Routes {
    public router = Router()

    constructor() {
        this.initializeRoutes()
    }

    private async initializeRoutes() {
        this.router.use(shopify.cspHeaders())
        this.router.use(serveStatic(await getStatickPath(), { index: false }))
    }
}

import { Router } from 'express'
import { readFileSync } from 'fs'
import { join } from 'path'
import { shopify } from '#shopify/index'
import { Routes } from '#interfaces/routes.interface'
import { getStatickPath } from '#utils/shared/functions'

export class InstalledRoute implements Routes {
    public router = Router()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.use('/*', shopify.ensureInstalledOnShop(), async (_req, res, _next) => {
            return res
                .status(200)
                .set('Content-Type', 'text/html')
                .send(
                    readFileSync(join(await getStatickPath(), 'index.html'))
                        .toString()
                        .replace('%VITE_SHOPIFY_API_KEY%', process.env.SHOPIFY_API_KEY || ''),
                )
        })
    }
}

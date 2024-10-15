import 'reflect-metadata'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { Env } from '#configs/env'
import { dbConnection } from '#database/index'
import { appRoutes, postRoutes, preRoutes } from '#routes/router'
import { ErrorMiddleware } from '#middlewares/error.middleware'
import { Routes } from '#interfaces/routes.interface'
import { logger } from '#utils/logger'
import { getUniquePort } from '#utils/shared/functions'

import apiDocs from '#docs/swagger.json' with { type: 'json' };

const app = express()

;(async () => {
    /***     If you are adding routes outside of the /api path, remember to also add a proxy rule for them in web/frontend/vite.config.js ***/
    app.use(express.json())

    if (Env.NODE_ENV === 'development') {
        app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiDocs))
    }

    const initializeErrorHandling = async () => {
        app.use(ErrorMiddleware)
    }

    const initializeRoutes = async ({ path, routes }: { path?: string; routes: Routes[] }) => {
        if (!path) {
            routes.forEach((route) => {
                app.use('/', route.router)
            })
        } else {
            routes.forEach((route) => {
                app.use(path, route.router)
            })
        }
    }

    /******** ROUTES-START ********/

    /******** TESTING-ROUTES-FOR-SWAGGER ********/
    await initializeRoutes({ routes: appRoutes })
    /******** SHOPIFY-INITIALIZER ********/
    await initializeRoutes({ routes: preRoutes })
    /******** APP-ROUTES ********/
    await initializeRoutes({ path: '/api', routes: appRoutes })
    /******** APP-HEADERS ********/
    await initializeRoutes({ routes: postRoutes })

    /******** ROUTES-END ********/

    /******** APP-INITIALIZING ********/
    await dbConnection().then(() => {
        logger.info(`============================================`)
        logger.info(`============================================`)
        logger.info(`🚀 ==== Database has been initialize ==== 🚀`)
        logger.info(`============================================`)
        logger.info(`============================================`)
    })
    if (Env.NODE_ENV === 'production') {
        app.listen(Env.APP_URL_PORT, async () => {
            logger.info(`============================================`)
            logger.info(`============================================`)
            logger.info(`🚀 ======= APP IS UP AND RUNNING ======== 🚀`)
            logger.info(`============================================`)
            logger.info(`============ ENV PORT IS  ${Env.APP_URL_PORT} ============`)
            logger.info(`============================================`)
            logger.info(`🚀 APP == http://${Env.APP_URL}:${Env.APP_URL_PORT}/docs 🚀`)
            logger.info(`============================================`)
            logger.info(`============================================`)
        })
    } else {
        app.listen(await getUniquePort(), async () => {
            logger.info(`============================================`)
            logger.info(`============================================`)
            logger.info(`🚀 ======= APP IS UP AND RUNNING ======== 🚀`)
            logger.info(`============================================`)
            logger.info(`============ ENV PORT IS  ${Env.APP_POTR} ============`)
            logger.info(`============================================`)
            logger.info(`🚀 SWAGGER == http://localhost:${Env.APP_POTR}/docs 🚀`)
            logger.info(`============================================`)
            logger.info(`============================================`)
        })
    }

    await initializeErrorHandling()
})()

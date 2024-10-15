import { NextFunction, Request, Response } from 'express'
import { GraphqlQueryError } from '@shopify/shopify-api'
import { shopify } from '#shopify/index'
import HttpCodes from '#enum/httpStatusCods'
import { createProduct, productCount } from '#mutations/product'
import { getRandomTitle } from '#utils/shared/functions'

export const TestControlle = {
    async getAll(_req: Request, res: Response, next: NextFunction) {
        const client = new shopify.api.clients.Graphql({
            session: res.locals.shopify.session,
        })

        try {
            const data = await client.request(productCount)

            return res.status(HttpCodes.SUCCESS).json({
                code: HttpCodes.SUCCESS,
                message: 'User created successfully',
                count: data.data.productsCount.count,
            })
        } catch (error) {
            return res.status(HttpCodes.SERVER_ERROR).json({
                code: HttpCodes.SERVER_ERROR,
                message: error.toString(),
            })
        }
    },
    async create(_req: Request, res: Response, next: NextFunction) {
        const client = new shopify.api.clients.Graphql({
            session: res.locals.shopify.session,
        })

        try {
            for (let i = 0; i < 5; i++) {
                await client.request(createProduct, {
                    variables: {
                        input: {
                            title: `${getRandomTitle()}`,
                        },
                    },
                })
            }
            return res.status(HttpCodes.SUCCESS).json({
                code: HttpCodes.SUCCESS,
                message: 'User created successfully',
            })
        } catch (error) {
            if (error instanceof GraphqlQueryError) {
                return res.status(HttpCodes.SERVER_ERROR).json({
                    code: HttpCodes.SERVER_ERROR,
                    message: `${error.message}\n${JSON.stringify(error.response, null, 2)}`,
                })
            } else {
                throw error
            }
        }
    },
}

import crypto from 'crypto'
import { NextFunction, Request, Response } from 'express'
import { Env } from '#configs/env'
import { logger } from '#utils/logger'

const SHOPIFY_SIGNATURE_SECRET = Env.SHOPIFY_API_SECRET

if (!SHOPIFY_SIGNATURE_SECRET) {
    logger.error('Please provide process.env.SHOPIFY_SIGNATURE_SECRET')
    throw new Error('Please provide process.env.SHOPIFY_SIGNATURE_SECRET')
}

export const validateSignature = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const rawBody: string | undefined = (req as any).rawBody
            if (typeof rawBody === 'undefined') {
                throw new Error(
                    'validateShopifySignature: req.rawBody is undefined. Please make sure the raw request body is available as req.rawBody.',
                )
            }

            const hmac = req.headers['x-shopify-hmac-sha256'] as string | undefined
            if (!hmac) {
                res.status(403).send('Unauthorized: Missing HMAC header')
                return
            }

            const hash = crypto.createHmac('sha256', SHOPIFY_SIGNATURE_SECRET).update(rawBody).digest('base64')

            const signatureOk = crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(hmac))

            if (!signatureOk) {
                res.status(403).send('Unauthorized: Invalid signature')
                return
            }

            next()
        } catch (err) {
            next(err)
        }
    }
}

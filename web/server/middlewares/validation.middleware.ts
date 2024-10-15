import { NextFunction, Request, Response } from 'express'
import { Schema } from 'joi'
import { HttpException } from '#exceptions/HttpException'

export const ValidationMiddleware = (schema: Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, { abortEarly: false })
        if (error) {
            const message = error.details.map((detail) => detail.message).join(', ')
            next(new HttpException(400, message))
        } else {
            next()
        }
    }
}

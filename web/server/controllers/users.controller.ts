import { NextFunction, Request, Response } from 'express'
import { HttpException } from '#exceptions/HttpException'
import UserModel from '#models/users.model'
import { User } from '#interfaces/users.interface'
import HttpCodes from '#server/enum/httpStatusCods'
import ResponseMessages from '#server/enum/responseMessage'

export const UserController = {
    /*** Get All Records ***/

    async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const users: User[] = await UserModel.query().select().from('users')
            res.status(HttpCodes.SUCCESS).json({
                code: HttpCodes.SUCCESS,
                message: 'Get all users',
                data: users,
            })
        } catch (error) {
            res.status(HttpCodes.SERVER_ERROR).json({
                code: HttpCodes.SERVER_ERROR,
                message: error.toString(),
            })
        }
    },

    /*** Get Single Record ***/

    async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const userId = Number(req.params.id)
            const find: User = await UserModel.query().findById(userId)
            if (!find) throw new HttpException(409, "User doesn't exist")

            res.status(HttpCodes.SUCCESS).json({
                code: HttpCodes.SUCCESS,
                message: 'Get all users',
                data: find,
            })
        } catch (error) {
            res.status(HttpCodes.SERVER_ERROR).json({
                code: HttpCodes.SERVER_ERROR,
                message: error.toString(),
            })
        }
    },

    /*** Create Record ***/

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const newUser: User = req.body
            const { id, email, password } = newUser
            const existingUser = await UserModel.query().where('email', email).first()
            if (existingUser) {
                return res.status(HttpCodes.CONFLICTS).json({
                    code: HttpCodes.CONFLICTS,
                    message: `User with email ${email} ${ResponseMessages.CONFLICTS}`,
                })
            }

            const createdUser = await UserModel.query().insert(newUser)

            res.status(HttpCodes.SUCCESS).json({
                code: HttpCodes.SUCCESS,
                message: 'User created successfully',
                data: createdUser,
            })
        } catch (error) {
            res.status(HttpCodes.SERVER_ERROR).json({
                code: HttpCodes.SERVER_ERROR,
                message: error.toString(),
            })
        }
    },

    /*** Update Record ***/

    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = Number(req.params.id)
            const data: User = req.body
            const { email, password } = data
            const find: User[] = await UserModel.query().select().from('users').where('id', '=', id)
            if (!find) throw new HttpException(409, "User doesn't exist")

            await UserModel.query().update({ email, password }).where('id', '=', id).into('users')

            const updateData: User = await UserModel.query().select().from('users').where('id', '=', id).first()

            res.status(HttpCodes.SUCCESS).json({
                code: HttpCodes.SUCCESS,
                message: 'Record Update',
                data: updateData,
            })
        } catch (error) {
            res.status(HttpCodes.SERVER_ERROR).json({
                code: HttpCodes.SERVER_ERROR,
                message: error.toString(),
            })
        }
    },

    /*** Delete Record ***/

    async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = Number(req.params.id)
            const find: User = await UserModel.query().select().from('users').where('id', '=', id).first()
            if (!find) throw new HttpException(409, "User doesn't exist")

            await UserModel.query().delete().where('id', '=', id).into('users')

            res.status(HttpCodes.SUCCESS).json({
                code: HttpCodes.SUCCESS,
                message: 'Record Deleted',
                data: find,
            })
        } catch (error) {
            res.status(HttpCodes.SERVER_ERROR).json({
                code: HttpCodes.SERVER_ERROR,
                message: error.toString(),
            })
        }
    },
}

import { Router } from 'express'
import { ValidationMiddleware } from '#middlewares/validation.middleware'
import { UserController } from '#controllers/users.controller'
import { createUserSchema, updateUserSchema } from '#schema/users.schema'
import { Routes } from '#interfaces/routes.interface'

export class UserRoute implements Routes {
    public router = Router()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`/users`, UserController.getAll)
        this.router.get(`/users/:id`, UserController.getById)
        this.router.post(`/users`, ValidationMiddleware(createUserSchema), UserController.create)
        this.router.put(`/users/:id`, ValidationMiddleware(updateUserSchema), UserController.update)
        this.router.delete(`/users/:id`, UserController.delete)
    }
}

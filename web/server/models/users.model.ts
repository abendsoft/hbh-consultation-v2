import { Model, ModelObject } from 'objection'
import { User } from '#interfaces/users.interface'

export default class UserModel extends Model implements User {
    static tableName = 'users'
    static idColumn = 'id'

    id!: number
    email!: string
    password!: string
}

export type UserShape = ModelObject<UserModel>

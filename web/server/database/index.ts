import Knex from 'knex'
import { Model } from 'objection'
import { devConfig } from '#configs/dbConfig'

export const dbConnection = async () => {
    await Model.knex(Knex(devConfig))
}

import type { Knex } from 'knex'
import { Env } from '#configs/env'

export const devConfig: Knex.Config = {
    client: 'mysql2',
    connection: {
        charset: 'utf8',
        user: Env.DB_USERNAME,
        password: Env.DB_PASSWORD,
        host: Env.DB_HOST,
        port: Number(Env.DB_PORT),
        database: Env.DB_NAME,
    },
    migrations: {
        directory: 'server/database/migrations',
        tableName: 'migrations',
    },
    seeds: {
        directory: 'server/database/seeds',
    },
    pool: {
        min: 2,
        max: 10,
    },
}
export const stgConfig: Knex.Config = {
    client: 'mysql2',
    connection: {
        charset: 'utf8',
        user: Env.DB_USERNAME,
        password: Env.DB_PASSWORD,
        host: Env.DB_HOST,
        port: Number(Env.DB_PORT),
        database: Env.DB_NAME,
    },
    migrations: {
        directory: 'server/database/migrations',
        tableName: 'migrations',
    },
    seeds: {
        directory: 'server/database/seeds',
    },
    pool: {
        min: 2,
        max: 10,
    },
}
export const prodConfig: Knex.Config = {
    client: 'mysql2',
    connection: {
        charset: 'utf8',
        user: Env.DB_USERNAME,
        password: Env.DB_PASSWORD,
        host: Env.DB_HOST,
        port: Number(Env.DB_PORT),
        database: Env.DB_NAME,
    },
    migrations: {
        directory: 'server/database/migrations',
        tableName: 'migrations',
    },
    seeds: {
        directory: 'server/database/seeds',
    },
    pool: {
        min: 2,
        max: 10,
    },
}

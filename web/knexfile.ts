import type { Knex } from 'knex'
import { devConfig, prodConfig, stgConfig } from '#configs/dbConfig'

const config: { [key: string]: Knex.Config } = {
    development: devConfig,
    staging: stgConfig,
    production: prodConfig,
}

export default config

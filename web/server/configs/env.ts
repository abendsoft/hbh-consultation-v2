import { config } from 'dotenv'

config()

export const Env = Object.freeze({
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    LOG_DIR: process.env.LOG_DIR,
    APP_POTR: process.env.APP_POTR,
    APP_URL: process.env.APP_URL,
    APP_URL_PORT: process.env.APP_URL_PORT,
    LOG_FORMAT: process.env.LOG_FORMAT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DATABASE_URL: process.env.DATABASE_URL,
    SCOPES: process.env.SCOPES?.split(','),
    SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY,
    SHOPIFY_API_SECRET: process.env.SHOPIFY_API_SECRET,
})

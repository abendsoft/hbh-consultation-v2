import swaggerAutogen from 'swagger-autogen'
import { apiInfo, apiOptions } from '#configs/apiInfo'
import { Env } from '#configs/env'
import { pagination } from '#configs/pagination'
import { modules, outputFile } from '#utils/dir'

const doc = {
    info: apiInfo,

    host: `http://localhost:${Number(Env.APP_POTR)}`,

    components: pagination,
}

swaggerAutogen(apiOptions)(outputFile, modules, doc)

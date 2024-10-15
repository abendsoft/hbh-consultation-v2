import dotenv from 'dotenv'
import fs from 'fs'
import { ADJECTIVES } from '#utils/shared/adjectives'
import { NOUNS } from '#utils/shared/nouns'

dotenv.config()

const updateEnvFile = (key: string, value: any): void => {
    const envFilePath = './.env'

    const envContent = fs.readFileSync(envFilePath, 'utf-8')

    const updatedContent = envContent
        .split('\n')
        .map((line) => {
            if (line.startsWith(key)) {
                return `${key}${value}`
            }
            return line
        })
        .join('\n')

    fs.writeFileSync(envFilePath, updatedContent)
}

export const getUniquePort = async (): Promise<number> => {
    const port = parseInt(process.env.BACKEND_PORT || process.env.PORT || '3000', 10)
    if (!isNaN(port)) {
        updateEnvFile('APP_POTR=', port)
        return port
    }
}

export const getStatickPath = async (): Promise<string> => {
    const path = process.env.NODE_ENV === 'production' ? `${process.cwd()}/frontend/dist` : `${process.cwd()}/frontend/`

    if (path) {
        return path
    }
}

export const getRandomTitle = () => {
    const adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)]
    const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)]
    return `${adjective} ${noun}`
}

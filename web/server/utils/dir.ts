import path from 'node:path'
import url from 'node:url'

export const outputFile = path.join(path.dirname(url.fileURLToPath(import.meta.url)), '../docs/swagger.json')

export const modules = [
    path.join(path.dirname(url.fileURLToPath(import.meta.url)), '../routes/app/*.ts'),
    path.join(path.dirname(url.fileURLToPath(import.meta.url)), '../models/*.ts'),
    path.join(path.dirname(url.fileURLToPath(import.meta.url)), '../controllers/*.ts'),
    path.join(path.dirname(url.fileURLToPath(import.meta.url)), '../dtos/*.ts'),
]

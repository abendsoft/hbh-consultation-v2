export const pagination = {
    parameters: {
        page: {
            in: 'query',
            name: 'page',
            schema: { type: 'integer', example: 1 },
        },
        perPage: {
            in: 'query',
            name: 'perPage',
            schema: { type: 'integer', example: 10 },
        },
    },
}

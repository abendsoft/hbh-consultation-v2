module.exports = {
    apps: [
        {
            name: 'hbh-shopify-app',
            script: 'server/server.js',
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
}

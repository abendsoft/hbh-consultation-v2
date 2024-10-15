/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

const config = {
    tabWidth: 4,
    semi: false,
    printWidth: 130,
    singleQuote: true,
    trailingComma: 'all',
    bracketSpacing: true,
    jsxSingleQuote: true,
    arrowParens: 'always',
    quoteProps: 'as-needed',
    experimentalTernaries: true,
    embeddedLanguageFormatting: 'auto',
    plugins: ['@trivago/prettier-plugin-sort-imports'],
    importOrderMergeDuplicateImports: true,
    importOrderSortSpecifiers: true,
    importOrder: [
        '^reflect-metadata',
        '^typedi',
        '^crypto',
        '^dotenv',
        '^(express/(.*)$)|^(express$)',
        '^(knex/(.*)$)|^(knex$)',
        '^(objection/(.*)$)|^(objection$)',
        '^(@shopify/(.*)$)|^(@shopify$)',
        '<THIRD_PARTY_MODULES>',
        '^types$',
        '^#configs/(.*)$',
        '^#database/(.*)$',
        '^#shopify/(.*)$',
        '^#routes/(.*)$',
        '^#exceptions/(.*)$',
        '^#enum/(.*)$',
        '^#hooks/(.*)$',
        '^#middlewares/(.*)$',
        '^#controllers/(.*)$',
        '^#mutations/(.*)$',
        '^#models/(.*)$',
        '^#schema/(.*)$',
        '^#interfaces/(.*)$',
        '^#utils/(.*)$',
        '^#utils/shared/(.*)$',
        '^#server/(.*)$',
        '^[./]',
    ],
}

export default config

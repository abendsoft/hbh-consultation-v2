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
    proseWrap: 'preserve',
    arrowParens: 'always',
    quoteProps: 'as-needed',
    experimentalTernaries: true,
    htmlWhitespaceSensitivity: 'strict',
    embeddedLanguageFormatting: 'auto',
    plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
    tailwindFunctions: ['clsx', 'tw', 'cn'],
    tailwindConfig: './tailwind.config.ts',
    tailwindAttributes: ['className', 'classNames', '*'],
    importOrderMergeDuplicateImports: true,
    importOrderSortSpecifiers: true,
    importOrder: [
        '^(react/(.*)$)|^(react$)',
        '<THIRD_PARTY_MODULES>',
        '^types$',
        '^@src/config/(.*)$',
        '^@src/theme/(.*)$',
        '^@src/constants/(.*)$',
        '^@src/contexts/(.*)$',
        '^@src/hooks',
        '^@src/hooks/(.*)$',
        '^@src/routes/(.*)$',
        '^@src/layouts/(.*)$',
        '^@src/pages/(.*)$',
        '^@src/components/(.*)$',
        '^@src/components/ui/(.*)$',
        '^@src/components/pages/(.*)$',
        '^@src/utils/(.*)$',
        '^@src/types/(.*)$',
        '^@src/assets/images/(.*)$',
        '^@src/assets/styles/(.*)$',
        '^[./]',
    ],
}

export default config

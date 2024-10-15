export const normalizePath = (path: string): string => {
    const normalizedPath = path
        .replace(/^\.\/pages/, '') // Remove the base folder
        .replace(/\.(t|j)sx?$/, '') // Remove the file extension
        .replace(/\/page$/, '') // Remove /page for routes
        // .replace(/\/layout$/, "") // Remove /layout for routes
        .replace(/\[(?:[.]{3})?(\w+?)\]/g, (_match, param) => `:${param}`) // Dynamic route
        .replace(/\[\[([.\w]+?)\]\]/g, (_match, param) => `:${param}*`) // Catch-all route
        .replace(/\/$/, '') // Remove trailing slash

    if (normalizedPath === '') {
        return '/'
    }

    return normalizedPath
}

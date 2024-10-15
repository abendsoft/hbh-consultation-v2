import { normalizePath } from '@src/utils/router'

export const groupRoutes = (pages: Pages): Route[] => {
    const routes: Route[] = []

    Object.keys(pages).forEach((key) => {
        const path = normalizePath(key)
        const segments = path.split('/')
        let currentPath = ''

        segments.forEach((segment) => {
            if (segment.startsWith('(') && segment.endsWith(')')) {
                return
            }
            currentPath += `/${segment}`
        })
        if (!key.endsWith('layout.tsx') && pages[key].default) {
            routes.push({
                path: currentPath,
                element: pages[key].default,
                layout: segments[1],
            })
        }
    })

    return routes
}

import { normalizePath } from '@src/utils/router'

export const nestedRoutes = (routes: Route[], pages: Pages): GroupLayoutRoute => {
    const nestedRoutes: GroupLayoutRoute = { children: [], element: null }

    const addLayouts: GroupRoute[] = []

    Object.keys(pages).forEach((key) => {
        const path = normalizePath(key)
        const segments = path.split('/')[1]
        if (key === `./pages/${segments}/layout.tsx`) {
            addLayouts.push({
                element: pages[`./pages/${segments}/layout.tsx`]?.default,
                children: routes.filter((route) => {
                    return route.layout === segments
                }),
            })
        }
        if (segments === 'layout') {
            nestedRoutes.element = pages[key].default
            nestedRoutes.children = addLayouts.length > 0 ? addLayouts : routes
        }
    })

    if (!nestedRoutes.children.length) {
        nestedRoutes.children = routes
    }

    return nestedRoutes
}

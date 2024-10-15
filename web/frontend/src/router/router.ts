import React from 'react'
import { RouteObject, createBrowserRouter } from 'react-router-dom'
import NotFound from '@src/components/NotFound'

export const router = (routes: GroupLayoutRoute) => {
    const buildRoutes = (routes: GroupRoute[]): RouteObject[] => {
        if (!routes) return []

        return routes.map((route: GroupRoute) => {
            const { path, element, children } = route

            return {
                path,
                element: React.createElement(element),
                children: children ? buildRoutes(children) : undefined,
            }
        })
    }

    const routesArray = routes ? buildRoutes(routes.children) : []

    const baseLayout: RouteObject[] = [
        {
            element: React.createElement(routes.element),
            children: [...routesArray, { path: '*', element: React.createElement(NotFound) }],
        },
    ]

    return createBrowserRouter(baseLayout)
}

import { groupRoutes, nestedRoutes } from '@src/utils/router'

export const useRouter = (pages: Pages): GroupLayoutRoute => {
    const routes = groupRoutes(pages)
    const nestedRoute = nestedRoutes(routes, pages)

    return nestedRoute
}

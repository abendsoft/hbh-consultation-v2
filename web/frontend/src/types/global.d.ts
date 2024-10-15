declare type PageModule = {
    default: React.ComponentType
}

declare type Pages = {
    [key: string]: PageModule
}

declare interface Route {
    element: ComponentType
    layout?: string
    path: string
    children?: Route[]
}

declare interface GroupRoute {
    path?: string
    children?: Route[]
    element: ComponentType
}

declare interface GroupLayoutRoute {
    children: GroupRoute[]
    element: ComponentType | null
}

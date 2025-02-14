import { NavMenu } from '@shopify/app-bridge-react'
import { router } from '@src/router/router'
// import { useTranslation } from 'react-i18next'
import { RouterProvider } from 'react-router-dom'
import { useRouter } from '@src/hooks'
import { PolarisClientProvider, QueryClientProvider } from '@src/utils/providers'
import '@src/assets/styles/index.css'

export const App = () => {
    const pagesRaw = import.meta.glob('./pages/**/!(*.test.[jt]sx)*.([jt]sx)', {
        eager: true,
    })
    const pages: Pages = Object.fromEntries(Object.entries(pagesRaw).map(([key, module]) => [key, module as PageModule]))
    const routes = useRouter(pages)
    const routerInstance = router(routes)

    // const { t } = useTranslation()

    return (
        <PolarisClientProvider>
            <QueryClientProvider>
                <NavMenu>
                    <a href='/' rel='home' />
                    {/* <a href='/pagename'>{t('NavigationMenu.pageName')}</a> */}
                </NavMenu>
                <RouterProvider router={routerInstance} />
            </QueryClientProvider>
        </PolarisClientProvider>
    )
}

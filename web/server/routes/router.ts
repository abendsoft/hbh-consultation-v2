import { TestRoute, UserRoute } from '#routes/app/index'
import { HeaderRoute, InstalledRoute } from '#routes/post/index'
import { ShopifyRoute, WebhooksRoute } from '#routes/pre/index'

export const preRoutes = [new WebhooksRoute(), new ShopifyRoute()]
export const appRoutes = [new TestRoute(), new UserRoute()]
export const postRoutes = [new HeaderRoute(), new InstalledRoute()]

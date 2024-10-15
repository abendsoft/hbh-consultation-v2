import { TitleBar } from '@shopify/app-bridge-react'
import { Card, Image, Layout, Link, Page, Text } from '@shopify/polaris'
import { trophyImage } from '@src/assets'
import { ProductsCard } from '@src/components'
import { Trans, useTranslation } from 'react-i18next'

export default function HomePage() {
    const { t } = useTranslation()
    return (
        <Page narrowWidth>
            <TitleBar title={t('HomePage.title')} />
            <Layout>
                <Layout.Section>
                    <Card>
                        <div>
                            <Text as='h2' variant='headingMd'>
                                {t('HomePage.heading')}
                            </Text>
                            <p>
                                <Trans
                                    i18nKey='HomePage.yourAppIsReadyToExplore'
                                    components={{
                                        PolarisLink: <Link url='https://polaris.shopify.com/' external />,
                                        AdminApiLink: <Link url='https://shopify.dev/api/admin-graphql' external />,
                                        AppBridgeLink: <Link url='https://shopify.dev/apps/tools/app-bridge' external />,
                                    }}
                                />
                            </p>
                            <p>{t('HomePage.startPopulatingYourApp')}</p>
                            <p>
                                <Trans
                                    i18nKey='HomePage.learnMore'
                                    components={{
                                        ShopifyTutorialLink: (
                                            <Link url='https://shopify.dev/apps/getting-started/add-functionality' external />
                                        ),
                                    }}
                                />
                            </p>
                        </div>
                        <div style={{ padding: '0 20px' }}>
                            <Image source={trophyImage} alt={t('HomePage.trophyAltText')} width={120} />
                        </div>
                    </Card>
                </Layout.Section>
                <Layout.Section>
                    <ProductsCard />
                </Layout.Section>
            </Layout>
        </Page>
    )
}

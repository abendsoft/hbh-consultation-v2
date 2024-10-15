import { TitleBar } from '@shopify/app-bridge-react'
import { Card, Layout, Page, Text } from '@shopify/polaris'
import { useTranslation } from 'react-i18next'

export default function PageName() {
    const { t } = useTranslation()
    return (
        <Page>
            <TitleBar title={t('PageName.title')}>
                <button variant='primary' onClick={() => console.log('Primary action')}>
                    {t('PageName.primaryAction')}
                </button>
                <button onClick={() => console.log('Secondary action')}>{t('PageName.secondaryAction')}</button>
            </TitleBar>
            <Layout>
                <Layout.Section>
                    <Card>
                        <Text variant='headingMd' as='h2'>
                            {t('PageName.heading')}
                        </Text>
                        <div>
                            <p>{t('PageName.body')}</p>
                        </div>
                    </Card>
                    <Card>
                        <Text variant='headingMd' as='h2'>
                            {t('PageName.heading')}
                        </Text>
                        <div>
                            <p>{t('PageName.body')}</p>
                        </div>
                    </Card>
                </Layout.Section>
                <Layout.Section>
                    <Card>
                        <Text variant='headingMd' as='h2'>
                            {t('PageName.heading')}
                        </Text>
                        <div>
                            <p>{t('PageName.body')}</p>
                        </div>
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    )
}

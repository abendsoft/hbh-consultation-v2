import { Card, EmptyState, Page } from '@shopify/polaris'
import { notFoundImage } from '@src/assets'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
    const { t } = useTranslation()

    return (
        <Page>
            <Card>
                <Card>
                    <EmptyState heading={t('NotFound.heading')} image={notFoundImage}>
                        <p>{t('NotFound.description')}</p>
                    </EmptyState>
                </Card>
            </Card>
        </Page>
    )
}

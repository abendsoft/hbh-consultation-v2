import { useState } from 'react'
import { useAppBridge } from '@shopify/app-bridge-react'
import { Card, Text } from '@shopify/polaris'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'

export function ProductsCard() {
    const shopify = useAppBridge()
    const { t } = useTranslation()
    const [isPopulating, setIsPopulating] = useState(false)
    const productsCount = 5

    console.log('isPopulating==>', isPopulating)
    const {
        data,
        refetch: refetchProductCount,
        isLoading: isLoadingCount,
    } = useQuery({
        queryKey: ['productCount'],
        queryFn: async () => {
            const response = await fetch('/api/test/count')
            return await response.json()
        },
        refetchOnWindowFocus: false,
    })

    const setPopulating = (flag: boolean) => {
        shopify.loading(flag)
        setIsPopulating(flag)
    }

    const handlePopulate = async () => {
        setPopulating(true)
        const response = await fetch('/api/test', { method: 'POST' })

        if (response.ok) {
            await refetchProductCount()

            shopify.toast.show(t('ProductsCard.productsCreatedToast', { count: productsCount }))
        } else {
            shopify.toast.show(t('ProductsCard.errorCreatingProductsToast'), {
                isError: true,
            })
        }

        setPopulating(false)
    }

    return (
        <Card>
            <button onClick={handlePopulate}>Populate</button>
            <div>
                <p>{t('ProductsCard.description')}</p>
                <Text as='h4' variant='headingMd'>
                    {t('ProductsCard.totalProductsHeading')}
                    <Text variant='bodyMd' as='p' fontWeight='semibold'>
                        {isLoadingCount ? '-' : data?.count}
                    </Text>
                </Text>
            </div>
        </Card>
    )
}

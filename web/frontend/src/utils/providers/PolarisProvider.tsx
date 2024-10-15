import { useCallback } from 'react'
import { AppProvider } from '@shopify/polaris'
import '@shopify/polaris/build/esm/styles.css'
import { LinkLikeComponentProps } from '@shopify/polaris/build/ts/src/utilities/link'
import { getPolarisTranslations } from '@src/utils/i18nUtils'

type Props = {
    children: React.ReactElement | React.ReactElement[]
}

function AppBridgeLink({ url, children, external, ...rest }: LinkLikeComponentProps) {
    const handleClick = useCallback(() => window.open(url), [url])

    const IS_EXTERNAL_LINK_REGEX = /^(?:[a-z][a-z\d+.-]*:|\/\/)/

    if (external || IS_EXTERNAL_LINK_REGEX.test(url)) {
        return (
            <a {...rest} href={url} target='_blank' rel='noopener noreferrer'>
                {children}
            </a>
        )
    }

    return (
        <a {...rest} onClick={handleClick}>
            {children}
        </a>
    )
}

export function PolarisProvider({ children }: Props) {
    const translations = getPolarisTranslations()

    return (
        <AppProvider i18n={translations} linkComponent={AppBridgeLink}>
            {children}
        </AppProvider>
    )
}

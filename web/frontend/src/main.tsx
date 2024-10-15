import { StrictMode } from 'react'
import { App } from '@src/App'
import { createRoot } from 'react-dom/client'
import { initI18n } from '@src/utils/i18nUtils'

// Ensure that locales are loaded before rendering the app
initI18n().then(() => {
    createRoot(document.getElementById('app')!).render(
        <StrictMode>
            <App />
        </StrictMode>,
    )
})

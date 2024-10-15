import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type Props = {
    children: React.ReactElement | React.ReactElement[]
}

export function QueryProvider({ children }: Props) {
    const client = new QueryClient({
        queryCache: new QueryCache(),
        mutationCache: new MutationCache(),
    })

    return (
        <QueryClientProvider client={client}>
            <ReactQueryDevtools initialIsOpen={false} />
            {children}
        </QueryClientProvider>
    )
}

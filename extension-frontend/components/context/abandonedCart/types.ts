import { ReactNode } from 'react'
export interface slotsDataType {
    date: string
    meeting_duration: string
    price: string
    time: string
}
export interface sessionType {
    meeting_duration?: string
    date?: string
    time?: string
    price?: string
}
export interface userType {
    firstName?: string
    lastName?: string
    phone?: number | null
    email?: string
    message?: string
    terms_and_condition?: boolean
    [key: string]: any
}
export interface paymentType {
    billing_token?: string | null | undefined
    facilitator_access_token?: string | undefined
    order_id?: string
    payer_id?: string
    payment_id?: string
    payment_source?: string
}
interface orderType {
    client_id?: number
    consultant_id?: number
    id?: number
    meeting_link?: string
}
export interface Cart {
    consultation: sessionType
    client: userType
    payment: paymentType
    order?: orderType
}
export interface SessionContextType {
    cart: Cart
    slotsData: any
    setCart: React.Dispatch<React.SetStateAction<Cart>>
    getRecord: (endpoint: string) => void
    createRecord: (endpoint: string) => void
}
export type AbandonedCartProviderProps = {
    children: ReactNode
}

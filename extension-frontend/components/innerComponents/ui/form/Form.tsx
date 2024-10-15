import { FormEvent, ReactNode } from 'react'

interface FormProps {
    title?: string
    children: ReactNode
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export const Form: React.FC<FormProps> = ({ children, title, handleSubmit }) => {
    return (
        <div className='mx-auto w-full space-y-4 pt-20 text-center'>
            {title && <h1 className='text-4xl'>{title}</h1>}
            <form className='mx-auto max-w-sm' onSubmit={handleSubmit}>
                {children}
            </form>
        </div>
    )
}

import { useEffect, useState } from 'react'

interface SelectProps {
    setValue: React.Dispatch<React.SetStateAction<any>>
    options: { label: string; value: string }[]
    title: string
}

export const Select: React.FC<SelectProps> = ({ title, options, setValue }) => {
    const [toggle, setToggle] = useState<boolean>(false)

    const [selected, setSelected] = useState<{ label: string; value: string }>(options?.[0])
    useEffect(() => {
        setValue((prevValue: any) => ({
            ...prevValue,
            country: { ...prevValue.country, value: selected.value },
        }))
    }, [selected, setValue])

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className='relative flex w-full flex-col gap-1.5'>
            <h2 className='flex items-center justify-start text-sm tracking-wide text-secondry'>{title}</h2>
            <button
                type='button'
                onClick={handleToggle}
                className='border-foreground-light text-foreground-light flex w-full items-center justify-between border p-3 focus:outline-none'
            >
                <span className='block text-sm leading-none'>{selected.label}</span>
                <svg className='ml-2 mt-px h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
                    <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                    />
                </svg>
            </button>
            <div
                className={`absolute left-0 right-0 top-full mt-1 flex w-full flex-col bg-background shadow-lg transition-all ease-in ${
                    !toggle ?
                        'scale-y-70 pointer-events-none invisible -z-50'
                    :   'shadow-cs pointer-events-auto visible z-50 scale-y-100'
                }`}
            >
                {options?.map((option: any, i: number) => (
                    <span
                        key={i}
                        onClick={() => {
                            setSelected(option)
                            handleToggle()
                        }}
                        className='hover:bg-background-light border-foreground-light/10 flex cursor-pointer items-center border p-4 text-sm'
                    >
                        {option.label}
                    </span>
                ))}
            </div>
        </div>
    )
}

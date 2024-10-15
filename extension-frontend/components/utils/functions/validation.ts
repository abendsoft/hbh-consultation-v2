export const handleValidations = (
    type: string,
    value: string,
    setError: React.Dispatch<React.SetStateAction<Record<string, { name: string; state: boolean; message: string }>>>,
) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phonePattern = /^\+\d{1,4}\s\(\d{1,4}\)\s\d{1,12}-\d{1,12}$/;

    if (type === 'email') {
        setError((prevError) => ({
            ...prevError,
            email: {
                name: 'email',
                state: value === '' || emailPattern.test(value) ? false : true,
                message: value === '' || emailPattern.test(value) ? '' : 'Please enter a valid email address.',
            },
        }))
    } else if (type === 'phone') {
        setError((prevError) => ({
            ...prevError,
            phone: {
                name: 'phone',
                state: value === '' || phonePattern.test(value) ? false : true,
                message: value === '' || phonePattern.test(value) ? '' : 'Please enter a valid 10-digit phone number.',
            },
        }))
    }
}
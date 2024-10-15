export const emailValidator = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
}

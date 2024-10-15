export const tomorrow = new Date()

tomorrow.setDate(tomorrow.getDate() + 1)
if (tomorrow.getDay() === 0) {
    tomorrow.setDate(tomorrow.getDate() + 1)
}

export const initialData = {
    consultation: {
        date: tomorrow.toLocaleDateString('en-CA'),
        meeting_duration: 'Consultation for 60 minutes',
        price: '100.00',
    },
    payment: {},
    client: {},
}

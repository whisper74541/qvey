export interface SignupFormFields {
    userId: string
    email: string
    name: string
    password: string
    confirmPassword: string
    birthDate: string // YYYY-MM-DD
    gender: 'male' | 'female' | 'other'
    address?: string
    addressDetail?: string
    agreeTerms?: boolean
}

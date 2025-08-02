import { validateEmail, validatePassword } from '@/shared/lib/validators'
import type { LoginValues } from '../types'

export const validateLogin = (values: LoginValues): boolean => {
    try {
        validateEmail(values.email)
        validatePassword(values.password)
        return true
    } catch {
        return false
    }
}

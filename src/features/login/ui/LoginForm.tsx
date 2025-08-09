import { useState } from 'react'
import type { LoginErrors, LoginValues } from '../types'
import { validateLogin } from '../model'
import { useLogin } from '../hook'
import styles from './LoginForm.module.css'
import { VisibilityOffRounded, VisibilityRounded } from '@mui/icons-material'
import { validateEmail, validatePassword } from '@/shared/lib/validators'

const LoginForm = () => {
    const { login, loading } = useLogin()

    // TODO: 폼 초기값(model/initialVlaues.ts)로 분리
    const initialValue: LoginValues = {
        email: '',
        password: '',
    }

    // TODO: useLoginForm():useForm()+useLogin() && useForm():범용 -> 로직 분리 예정
    const [values, setValues] = useState(initialValue)
    const [touched, setTouched] = useState({ email: false, password: false })
    const [errors, setErrors] = useState<LoginErrors>({})

    // onFocus -> onChange -> onBlur
    //기존 에러 제거
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name } = e.target

        if (errors[name as keyof LoginErrors]) {
            setErrors((prev) => ({ ...prev, [name]: '' }))
        }
    }

    //입력값 반영 후 업데이트
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValues((prev) => ({ ...prev, [name]: value }))
    }

    //해당 필드 유효성 검사, 에러 상태 업데이트
    // TODO: SRP, 확장성, 의미 분산 등 문제 발생 -> 함수 수정필요
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name } = e.target
        setTouched((prev) => ({ ...prev, [name]: true }))

        try {
            if (name === 'email') validateEmail(values.email)
            if (name === 'password') validatePassword(values.password)
        } catch (err: unknown) {
            if (err instanceof Error) {
                setErrors((prev) => ({ ...prev, [name]: err.message }))
            }
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const isValid = validateLogin(values)
        if (!isValid) return

        await login(values)
        console.log('로그인 성공👍 :', values)
    }

    const [showPassword, setShowPassword] = useState(false)

    const togglePassword = () => {
        setShowPassword((prev) => !prev)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.formField}>
                <label htmlFor="email">이메일</label>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="test@example.com"
                    autoComplete="email"
                />
                {touched.email && errors.email && <p className={styles.message}>{errors.email}</p>}
            </div>
            <div className={styles.formField}>
                <label htmlFor="password">비밀번호</label>
                <div className={styles.passwordWrapper}>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder="••••••••"
                        autoComplete="password"
                    />
                    <button
                        type="button"
                        className={styles.iconButton}
                        onClick={togglePassword}
                        aria-label="Toggle password visibility"
                    >
                        {showPassword ? <VisibilityRounded /> : <VisibilityOffRounded />}
                    </button>
                </div>
                {touched.password && errors.password && <p className={styles.message}>{errors.password}</p>}
            </div>
            <div className={styles.row}>
                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    <span>Remember me</span>
                </label>
                <a href="#" className={styles.link}>
                    Forgot Password?
                </a>
            </div>
            {/* TODO: 에러 타입에 따라 처리(ex: ErrorMessage 컴포넌트, 토스트 알림...) */}
            {/* {loginError && <p className="error">{loginError}</p>} */}
            <button type="submit" className={styles.loginBtn}>
                {loading ? '로그인 중' : 'Login'}
            </button>
        </form>
    )
    // TODO: <div><label><input/> 컴포넌트 분리
    // TODO: 로그인 정보 기억하기 체크박스
    // TODO: 비밀번호 찾기, 회원가입 버튼 추가
}

export default LoginForm

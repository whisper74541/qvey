import React, { useState, useEffect } from 'react'
import styles from './RegisterPage.module.css'

function RegisterPage() {
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [passwordError, setPasswordError] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    const [year, setYear] = useState("")
    const [month, setMonth] = useState("")
    const [day, setDay] = useState("")

    const years = Array.from({ length: 2012 - 1900 + 1 }, (_, i) => 2012 - i)
    const months = Array.from({ length: 12 }, (_, i) => i + 1)
    const days = Array.from({ length: 31 }, (_, i) => i + 1)

    useEffect(() => {
    if (passwordConfirm.length > 0) {
        setPasswordError(password !== passwordConfirm)
    } else {
        setPasswordError(false)
    }
    }, [password, passwordConfirm])

    return (
    <div className={styles.page}>
        <div className={styles.container}>
        <h1 className={styles.title}>회원가입</h1>

        <form className={styles.form}>
            <div className={styles.field}>
            <label htmlFor="username">아이디</label>
            <input id="username" type="text" className={styles.input} />
            </div>

            <div className={styles.field}>
            <label htmlFor="password">비밀번호</label>
            <div className={styles.inputWrapper}>
                <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button
                type="button"
                className={styles.eyeButton}
                onClick={() => setShowPassword((prev) => !prev)}
                >
                {showPassword ? '🙈' : '👁️'}
                </button>
            </div>
            </div>

            <div className={styles.field}>
            <label htmlFor="passwordConfirm">비밀번호 확인</label>
            <div className={styles.inputWrapper}>
                <input
                id="passwordConfirm"
                name="passwordConfirm"
                type={showPasswordConfirm ? 'text' : 'password'}
                className={`${styles.input} ${passwordError ? styles.errorInput : ''}`}
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                />
                <button
                type="button"
                className={styles.eyeButton}
                onClick={() => setShowPasswordConfirm((prev) => !prev)}
                >
                {showPasswordConfirm ? '🙈' : '👁️'}
                </button>
            </div>
            {passwordError && <p className={styles.errorText}>비밀번호가 일치하지 않습니다.</p>}
            </div>

            <div className={styles.field}>
            <label>이메일</label>
            <div className={styles.inline}>
                <input type="text" className={styles.input} />
                <select className={styles.select}>
                <option>@naver.com</option>
                <option>@gmail.com</option>
                <option>@kakao.com</option>
                </select>
            </div>
            </div>

            <div className={styles.field}>
            <label htmlFor="name">이름</label>
            <input id="name" type="text" className={styles.input} />
            </div>

            <div className={styles.field}>
            <label>생년월일</label>
            <div className={styles.inline}>
                <select value={year} onChange={(e) => setYear(e.target.value)} className={styles.select}>
                    <option value="">년</option>
                    {years.map((y) => (
                        <option key={y} value={y}>{y}</option>
                    ))}
                </select>

                <select value={month} onChange={(e) => setMonth(e.target.value)} className={styles.select}>
                    <option value="">월</option>
                    {months.map((m) => (
                        <option key={m} value={m}>{m}</option>
                    ))}
                    </select>

                <select value={day} onChange={(e) => setDay(e.target.value)} className={styles.select}>
                    <option value="">일</option>
                    {days.map((d) => (
                        <option key={d} value={d}>{d}</option>
                    ))}
                </select>
            </div>
            </div>

            <div className={styles.field}>
            <label>성별</label>
            <div className={styles.inline}>
                <label><input type="radio" name="gender" /> 남자</label>
                <label><input type="radio" name="gender" /> 여자</label>
                <label><input type="radio" name="gender" /> 기타</label>
            </div>
            </div>

            <div className={styles.termsBox}>
            <input type="checkbox" />
            <span>인증 약관 전체동의</span>
            <select className={styles.selectSmall}>
                <option></option>
            </select>
            </div>

            <button className={styles.registerButton}>
                <label>가입하기</label>
            </button>
        </form>
        </div>
    </div>
    )
}
export default RegisterPage
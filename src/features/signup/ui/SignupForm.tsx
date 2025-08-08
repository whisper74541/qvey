import React, { useState } from 'react'
import styles from './SignupForm.module.css'
import type { SignupFormFields } from '../types'

export const SignupForm: React.FC = () => {
    const [form, setForm] = useState<SignupFormFields>({
        userId: '',
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
        birthDate: '',
        gender: 'male',
        address: '',
        addressDetail: '',
        agreeTerms: false,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement
        setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // 퍼블리싱 단계: API 없음. 콘솔로만 확인
        console.log('[SIGNUP SUBMIT]', form)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <p className={styles.notice}>* 표시는 필수 입력 항목입니다.</p>

            {/* 기본 정보 */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>기본 정보</h2>
                <div className={styles.grid}>
                    <label htmlFor="userId" className={styles.label}>
                        아이디 *
                    </label>
                    <div className={styles.field}>
                        <input
                            id="userId"
                            name="userId"
                            type="text"
                            className={styles.input}
                            placeholder="영문/숫자 조합"
                            value={form.userId}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <label htmlFor="email" className={styles.label}>
                        이메일 *
                    </label>
                    <div className={styles.field}>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className={styles.input}
                            placeholder="example@domain.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <label htmlFor="name" className={styles.label}>
                        이름 *
                    </label>
                    <div className={styles.field}>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className={styles.input}
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <label htmlFor="password" className={styles.label}>
                        비밀번호 *
                    </label>
                    <div className={styles.field}>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className={styles.input}
                            placeholder="영문/숫자/특수문자 조합"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <label htmlFor="confirmPassword" className={styles.label}>
                        비밀번호 확인 *
                    </label>
                    <div className={styles.field}>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            className={styles.input}
                            value={form.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
            </section>

            {/* 개인 정보 */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>개인 정보</h2>
                <div className={styles.grid}>
                    <label htmlFor="birthDate" className={styles.label}>
                        생년월일 *
                    </label>
                    <div className={styles.field}>
                        <input
                            id="birthDate"
                            name="birthDate"
                            type="date"
                            className={styles.input}
                            value={form.birthDate}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <span className={styles.label}>성별 *</span>
                    <div className={styles.field}>
                        <div className={styles.radioGroup}>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={form.gender === 'male'}
                                    onChange={handleChange}
                                />{' '}
                                남성
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={form.gender === 'female'}
                                    onChange={handleChange}
                                />{' '}
                                여성
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="other"
                                    checked={form.gender === 'other'}
                                    onChange={handleChange}
                                />{' '}
                                기타
                            </label>
                        </div>
                    </div>

                    <label htmlFor="address" className={styles.label}>
                        주소
                    </label>
                    <div className={styles.field}>
                        <div className={styles.addressRow}>
                            <input
                                id="address"
                                name="address"
                                type="text"
                                className={styles.input}
                                placeholder="기본 주소"
                                value={form.address}
                                onChange={handleChange}
                            />
                            <input
                                id="addressDetail"
                                name="addressDetail"
                                type="text"
                                className={styles.input}
                                placeholder="상세 주소"
                                value={form.addressDetail}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 약관 동의 */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>약관 동의</h2>
                <div className={styles.grid}>
                    <span className={styles.label}>개인정보 처리방침</span>
                    <div>
                        <div className={styles.termsBox}>
                            (샘플) 개인정보 처리방침 내용이 들어갑니다. 실제 문서로 교체하세요. 수집 항목, 보유 기간,
                            목적 등을 고지합니다.
                        </div>
                        <label className={styles.help}>
                            <input
                                type="checkbox"
                                name="agreeTerms"
                                checked={!!form.agreeTerms}
                                onChange={handleChange}
                                required
                            />
                            위 내용을 확인하고 동의합니다.
                        </label>
                    </div>
                </div>
            </section>

            <div className={styles.actions}>
                <button type="submit" className={styles.submit}>
                    회원가입
                </button>
            </div>
        </form>
    )
}

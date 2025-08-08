import React from 'react'
import { SignupForm } from '@/features/signup/ui'
import styles from './SignupPage.module.css'

export const SignupPage: React.FC = () => (
    <main className={styles.container}>
        <h1 className={styles.title}>회원가입</h1>
        <SignupForm />
    </main>
)

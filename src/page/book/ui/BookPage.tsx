import React from 'react'
import { BookForm, BookList } from '@/features/book/ui'

export const BookPage: React.FC = () => (
    <main>
        <h1>문제집 관리</h1>
        <section>
            <h2>새 문제집 등록</h2>
            <BookForm />
        </section>
        <section>
            <h2>문제집 목록</h2>
            <BookList />
        </section>
    </main>
)

import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createBook } from '@/features/book/api'
import type { CreateBookPayload } from '@/features/book/types'

export const BookForm: React.FC = () => {
    const qc = useQueryClient()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const mutation = useMutation({
        mutationFn: (payload: CreateBookPayload) => createBook(payload),
        onSuccess: () => {
            // 객체 형태로 invalidateQueries 호출
            qc.invalidateQueries({ queryKey: ['books'] })
            setTitle('')
            setDescription('')
        },
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        mutation.mutate({ title, description })
    }

    // React Query v5: 'pending' 이 로딩 상태입니다
    const isLoading = mutation.status === 'pending'
    const isError = mutation.status === 'error'

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>제목</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>설명</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} required />
            </div>
            <button type="submit" disabled={isLoading}>
                {isLoading ? '등록 중…' : '문제집 등록'}
            </button>
            {isError && <p>등록 실패: {mutation.error?.message}</p>}
        </form>
    )
}

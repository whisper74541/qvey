import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createBoard } from '@/features/board/api/boardApi'

export const BoardForm: React.FC = () => {
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: createBoard,
        onSuccess: () => {
            alert('게시글이 등록되었습니다!')
            setSubject('')
            setContent('')
            queryClient.invalidateQueries({ queryKey: ['boardPosts'] })
        },
        onError: (error: any) => {
            alert('등록 중 오류 발생: ' + error.message)
        },
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!subject || !content) {
            alert('제목과 내용을 입력해주세요.')
            return
        }

        mutation.mutate({ subject, content })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="제목" value={subject} onChange={(e) => setSubject(e.target.value)} />
            <textarea placeholder="내용" value={content} onChange={(e) => setContent(e.target.value)} />
            <button type="submit">게시글 등록</button>
        </form>
    )
}

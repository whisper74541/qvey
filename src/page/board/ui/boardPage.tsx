import React from 'react'
import { BoardList, BoardForm } from '@/features/board/ui'

export const BoardPage: React.FC = () => (
    <main>
        <h1>자유게시판</h1>
        <BoardForm />
        <BoardList />
    </main>
)

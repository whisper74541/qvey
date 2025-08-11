import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchBoards } from '@/features/board/api/boardApi'
import type { Board } from '@/features/board/types'

export const BoardList: React.FC = () => {
    const { data, isLoading, error } = useQuery<Board[], Error>({
        queryKey: ['boardPosts'],
        queryFn: fetchBoards,
    })

    if (isLoading) return <p>불러오는 중...</p>
    if (error) return <p>오류 발생: {error.message}</p>

    return (
        <div>
            {data!.map((post: Board) => (
                <div key={post.id}>
                    <h2>{post.subject}</h2>
                    <p>{post.content}</p>
                    <p>
                        {post.userId} · {new Date(post.generatedTime).toLocaleString()}
                    </p>
                </div>
            ))}
        </div>
    )
}

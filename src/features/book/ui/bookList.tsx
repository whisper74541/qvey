import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchBooks } from '@/features/book/api/bookApi'
import type { Book } from '@/features/book/types'

export const BookList: React.FC = () => {
    const { data, isLoading, error } = useQuery<Book[], Error>({
        queryKey: ['books'],
        queryFn: fetchBooks,
    })

    if (isLoading) return <p>불러오는 중...</p>
    if (error) return <p>오류 발생: {error.message}</p>

    return (
        <div>
            {data!.map((book: Book) => (
                <div key={book.id}>
                    <h2>{book.title}</h2>
                    <p>{book.description}</p>
                </div>
            ))}
        </div>
    )
}

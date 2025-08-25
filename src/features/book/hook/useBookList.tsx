import { useEffect, useState } from 'react'
import { fetchBooks } from '../api'
import type { Book } from '../types'

export function useBookList() {
    const [books, setBooks] = useState<Book[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        fetchBooks()
            .then(setBooks)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [])

    return { books, loading, error }
}

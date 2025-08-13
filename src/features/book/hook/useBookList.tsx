import { useQuery } from '@tanstack/react-query'
import { fetchBooks } from '../api'
import type { Book } from '../types'

interface BookListResult {
    list: Book[] | undefined
    loading: boolean
    error: Error | null
}
export const useBookList = (): BookListResult => {
    const { data, isLoading, error } = useQuery<Book[], Error>({
        queryKey: ['books'],
        queryFn: fetchBooks,
    })

    return {
        list: data,
        loading: isLoading,
        error,
    }
}

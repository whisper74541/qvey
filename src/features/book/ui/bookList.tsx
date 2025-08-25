import { useMemo, useState } from 'react'
import { useBookList } from '../hook/useBookList'
import type { Book } from '../types'
import BookCard from './BookCard'
import style from './BookList.module.css'
import BookFilter from '@/features/book/ui/BookFilter'

// const DEV_BOOK: Book = {
//     description: '퍼블리싱용 Book 입니다.',
//     title: '퍼블리싱용 문제집 1 입니다.',
//     id: 1,
// }

function BookList() {
    const { books, loading, error } = useBookList()
    const [keywords, setKeywords] = useState<string[]>([])

    const filteredBooks = useMemo(() => {
        if (keywords.length === 0) return books
        return books.filter((book) => keywords.some((kw) => book.title.toLowerCase().includes(kw.toLowerCase())))
    }, [books, keywords])

    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러 발생: {error.message}</div>

    return (
        <div className={style.container}>
            <div className={style.top}>
                <BookFilter onChange={setKeywords} />
            </div>
            <ul>
                {filteredBooks.map((book: Book) => (
                    <li key={book.id}>
                        <BookCard {...book} />
                    </li>
                ))}
            </ul>
            {/* <ul>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
                <li>
                    <BookCard {...DEV_BOOK} />
                </li>
            </ul> */}
        </div>
    )
}

export default BookList

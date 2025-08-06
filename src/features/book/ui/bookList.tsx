import { useBookList } from '../hook/useBookList'
import type { Book } from '../types'
import BookCard from './BookCard'
import style from './BookList.module.css'
const DEV_BOOK: Book = {
    description: '퍼블리싱용 Book 입니다.',
    title: '퍼블리싱용 문제집 1 입니다.',
    id: 1,
}
function BookList() {
    const { list } = useBookList()

    return (
        <div className={style.container}>
            <div className={style.top}>
                <p>뭔가 들어 갈것 같은데 아이디어 없음</p>
            </div>
            <ul>
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
            </ul>
        </div>
    )
}

export default BookList

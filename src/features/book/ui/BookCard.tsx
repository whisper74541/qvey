import type { Book } from '../types'
import style from './BookCard.module.css'
function BookCard(book: Book) {
    return (
        <div className={style.card}>
            <div className={style.subject}>
                <i>👍</i>
                <span>
                    <p>{book.title}</p>
                </span>
            </div>
            <div className={style.description}>
                <p>{book.description}</p>
            </div>
        </div>
    )
}

export default BookCard

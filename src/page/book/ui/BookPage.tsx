import BookCard from '@/features/book/ui/BookCard'
import style from './BookPage.module.css'
import { BookList } from '@/features/book/ui'

function BookPage() {
    return (
        <div className={style.container}>
            <BookList />
            <div
                style={{
                    backgroundColor: '#fff',
                    flex: 1,
                    padding: '1em',
                    margin: '0em 1.5em 2em 1.5em',
                    overflowY: 'auto',
                }}
            >
                <h1 style={{ fontSize: '1.5em' }}>선택한 문제집</h1>
                <BookCard description="문제 설명" id={1} title="문제 1" key={2} />
                <BookCard description="문제 설명" id={1} title="문제 1" key={2} />
                <BookCard description="문제 설명" id={1} title="문제 1" key={2} />
                <BookCard description="문제 설명" id={1} title="문제 1" key={2} />
                <BookCard description="문제 설명" id={1} title="문제 1" key={2} />
                <BookCard description="문제 설명" id={1} title="문제 1" key={2} />
                <BookCard description="문제 설명" id={1} title="문제 1" key={2} />
                <BookCard description="문제 설명" id={1} title="문제 1" key={2} />
            </div>
        </div>
    )
}
export default BookPage

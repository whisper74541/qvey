import { Link } from 'react-router'
import style from './HomePage.module.css'
function HomePage() {
    return (
        <div className={style.container}>
            <h2>Home Page..</h2>
            <h3>바로가기</h3>
            <Link to={'/book'}>
                <b>문제집</b>
            </Link>
            <Link to={'/board'}>
                <b>자유게시판</b>
            </Link>
        </div>
    )
}
export default HomePage

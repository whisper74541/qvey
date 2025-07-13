import style from './Header.module.css'
function Header() {
    return (
        <header className={style.header}>
            <div className={style.left}>
                <h2>Header Text... Highway Star</h2>
            </div>
            <div className={style.right}>
                <button>Button 1</button>
            </div>
            <div className={style.right}>
                <button>Button 2</button>
            </div>
            <div className={style.right}>
                <button className="outline">회원가입</button>
            </div>
        </header>
    )
}
export default Header

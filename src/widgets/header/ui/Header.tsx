import { useCallback } from 'react'
import style from './Header.module.css'
import { useNavigator } from '@/shared/hook'

function Header() {
    /* Hooke 으로 변경 가능 */
    const { navigate } = useNavigator()
    const handleRegister = useCallback(() => {
        navigate('register')
    }, [])
    const handleLogin = useCallback(() => {
        /* TODO : Login Modal 이건 Page 이든 Login UI로 전환 해야함 */
        alert('[개발중] 로그인 UI로 이동')
    }, [])
    /* Hook 으로 변경 가능 */
    return (
        <header className={style.header}>
            <div className={style.left}>
                <h2>Header Text... Highway Star</h2>
            </div>
            {/* <div className={style.right}>
                <button>Button 1</button>
            </div> */}
            <div className={style.right}>
                <button onClick={handleLogin}>로그인</button>
            </div>
            <div className={style.right}>
                <button className="outline" onClick={handleRegister}>
                    회원가입
                </button>
            </div>
        </header>
    )
}

export default Header

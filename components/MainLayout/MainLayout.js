
import style from './MainLayout.module.scss'
import Link from "next/link";


export const MainLayout = ({children}) => {

    return (
        <div className={style.container}>
            <nav className={style.nav}>
                <Link href={'/'}>Home</Link>
                <Link href={'/profile'}> Profile</Link>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}
import styles from "./page.module.css";
import Link from 'next/link'

/**
 * TODO: 
 * - at a specific screen size, make a dropdown bar from the top
 * - create parameters to set navbar buttons
 */

type CurrentPage = 'Home' | 'About' | 'Projects' | 'Resume'

interface NavProps {
    curPage: CurrentPage
}

function getPageList(curPage : CurrentPage) {
    switch(curPage) {
        case 'Home':
            return ['About', 'Projects', 'Resume']
        case 'About':
            return ['Home', 'Projects', 'Resume']
        case 'Projects':
            return ['Home', 'About', 'Resume']
        case 'Resume':
            return ['Home', 'About', 'Projects']
        default:
            return []
    }
}

export default function Nav({ curPage } : NavProps) {
    const pageList = getPageList(curPage)
    const firstPage = pageList[0]
    const secondPage = pageList[1]
    const thirdPage = pageList[2]

    return (
        <nav className={styles['nav-bar']}>
            <Link href={firstPage === 'Home' ? '/' : `/${firstPage}`} className={styles.page}>{`${firstPage}`}</Link>
            <Link href={`/${secondPage}`} className={styles.page}>{`${secondPage}`}</Link>
            <Link href={`/${thirdPage}`} className={styles.page}>{`${thirdPage}`}</Link>
        </nav>
    );
}
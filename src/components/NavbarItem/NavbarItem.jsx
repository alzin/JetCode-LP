import Link from 'next/link'

// styles
import Styles from './NavbarItem.module.css'

const NavbarItem = ({ to, handleMenu, content }) => {
    return (
        <li className={`${Styles.hvrUnderlineFromLeft} ${Styles.navItem}`}>
            <Link href={to} onClick={handleMenu}>{content}</Link>
        </li>
    )
}

export default NavbarItem
import Link from 'next/link'

// style
import Styles from './Footer.module.css'


const Footer = () => {
    return (
        <div className={Styles.footer}>
            <div className={Styles.copyWrite}>
                <p>© {new Date().getFullYear()} JetCode. All rights reserved.</p>
            </div>

            <div className={Styles.terms}>
                <Link href='/'>Terms of Service </Link>
                <Link href='/'>  Privacy Policy</Link>
            </div>
        </div>
    )
}

export default Footer

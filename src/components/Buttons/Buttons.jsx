import Link from 'next/link'

//Syles
import Styles from './Buttons.module.css'

const Buttons = ({ to, content }) => {

    return (
        <Link href={to} className={Styles.TryFreeButton}>
            {content}
        </Link>
    )
}

export default Buttons

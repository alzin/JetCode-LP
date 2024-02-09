
import { Link } from 'react-router-dom'

//assets files
import './Buttons.css'

const TryFreeButton = () => {
    return (
        <Link to='/' className="TryFreeButton">
            Try For Free
        </Link>
    )
}

export { TryFreeButton }
import { Link } from 'react-router-dom'

//css files
import './Buttons.css'

const Buttons = (props) => {
    return (
        <Link to={props.to} className={props.className}>
            {props.content}
        </Link>
    )
}

export default Buttons
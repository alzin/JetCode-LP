import { Link } from 'react-router-dom'


// css files
import './DropDown.css'


const SolutionDropDown = (props) => {
    return (
        <li>
            <Link to={props.to}>
                <span className='nav-icon'>{props.icon}</span>
                <span>{props.name}</span>
            </Link>
        </li>
    )
}

export { SolutionDropDown }
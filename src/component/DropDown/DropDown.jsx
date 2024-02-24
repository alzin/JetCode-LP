import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// css files
import './DropDown.css'



// Solution  Drop Down//
const SolutionDropDown = (props) => {
    return (
        <li>
            <Link to={props.to}>
                <span className='nav-icon'>{props.icon}</span>
                <span className='nav-title'>{props.name}</span>
            </Link>
        </li>
    )
}


// faqs accordion//
const FaqsDropDown = (props) => {

    const [showResp, setShowResp] = useState(false)

    useEffect(() => {
        setShowResp(false)
    }, [])


    //show accordion-body in accordion
    const handleShowAccordion = () => {
        setShowResp(pre => !pre);
    }


    return (
        <div className="accordion-item ">
            <h3 className="accordion-header">
                <div className="accordion-button" onClick={handleShowAccordion}>
                    <span className={showResp ? "active" : ""}>&#10225;</span>
                    <p>{props.ques}</p>
                </div>
            </h3>
            <div className={showResp ? "accordion-collapse active" : "accordion-collapse"}>
                <div className="accordion-body" >
                    <p>{props.resp}</p>
                </div>
            </div>
        </div>
    )
}

export { SolutionDropDown, FaqsDropDown }

// css files
import './FeatureMobileNav.css'

// icons
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'

const FeatureMobileNav = (props) => {

    return (
        <div className="mobile-nav-section">
            <a className="back-btn" onClick={() => { props.setActiveIndex((props.activeIndex - 1) % props.data.length) }}>
                <IoArrowBack />
            </a>
            <ul className="mobile-pills">
                {props.data.map((item, index) =>
                    <li key={index}>
                        <a className={item.isActive ? "circle active" : "circle"}></a>
                    </li>
                )}
            </ul>
            <a className="next-btn" onClick={() => { props.setActiveIndex((props.activeIndex + 1) % props.data.length) }}>
                <IoArrowForward />
            </a>
        </div>
    )
}

export default FeatureMobileNav
import './FeatureNavIndicator.css'

const FeatureNavIndicator = (props) => {

    return (
        <ul className="nav-pills">
            {
                props.data && props.data.map((item, index) =>
                    <li key={index} onClick={() => { props.handelActive(index) }}>
                        <a className={item.isActive ? "active" : ""} type="button">
                            {item.icon}
                            {item.navItem}
                        </a>
                    </li>
                )
            }

            <div className="panel-background active" style={{ "left": props.activeIndex * 202 }}></div>
        </ul>
    )
}

export default FeatureNavIndicator
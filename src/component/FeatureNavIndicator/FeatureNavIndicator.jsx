// css files
import './FeatureNavIndicator.css'

const FeatureNavIndicator = (props) => {

    return (
        <ul className="nav-pills">
            {
                props.data && props.data.map((item, index) =>
                    <li key={index} style={{ width: props.indicatorWidth }} onClick={() => { props.handelActive(index) }}>
                        <a className={item.isActive ? "active" : ""} type="button">
                            {item.icon}
                            {item.navItem}
                        </a>
                    </li>
                )
            }

            <div className="panel-background active" style={{ width: props.indicatorWidth, "left": props.activeIndex * (props.indicatorWidth + 2) }}></div>
        </ul >
    )
}

export default FeatureNavIndicator
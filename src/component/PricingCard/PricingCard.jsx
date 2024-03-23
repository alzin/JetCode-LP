import { Link } from 'react-router-dom'
import './PricingCard.css'


const PricingCard = (props) => {
    return (
        <div className={props.data.isPopular ? "price-card glowed" : "price-card"}>
            {props.data.isPopular && <span className="tag">MOST POPULAR</span>}
            <h4>{props.data.price} <span>{props.data.pricePer}</span></h4>
            <p>{props.data.size}</p>
            <h5>{props.data.kind}</h5>
            <p>{props.data.pricePerEmp}</p>
            <ul>{props.data.feature.map((item, index) => <li key={index}>{item}</li>)}</ul>
            <Link to="/callback" className="btn-choose">Talk to sales</Link>
        </div>
    )
}

export default PricingCard
import { useState } from 'react'

// css files
import './Pricing.css'
// data
import PricingData from '../../data/PricingData'

// component
import PricingCard from '../../component/PricingCard/PricingCard'

const Pricing = () => {

  const [period, setPeriod] = useState("monthly")

  return (

    <section className="pricing">

      <div className="container">

        <h1>Plans &amp; Pricing</h1>
        <h3>Make every feature count</h3>

        <div className="pricing-section">
          <div className="btn-section">
            <button className={period === "monthly" ? "btn-pricing active" : "btn-pricing"} onClick={() => { setPeriod("monthly") }}>Pay monthly</button>
            <button className={period === "yearly" ? "btn-pricing active" : "btn-pricing"} onClick={() => { setPeriod("yearly") }}>Pay yearly <span>Save 15%</span></button>
          </div>

          <div className="card-section">
            {PricingData
              .filter(item => item.period === period)
              .map((item, index) => <PricingCard key={index} data={item} />)
            }
          </div>

        </div>
      </div>

    </section>
  )
}

export default Pricing
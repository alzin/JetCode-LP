import './FeatureTriibe.css'

import FeatureCard from '../../component/FeatureCard/FeatureCard'

import FeatureTriibeData from '../../data/FeatureTriibeData'

const FeatureTriibe = () => {
    return (
        <section className="feature-triibe">
            {FeatureTriibeData.map((item, index) =>
                <FeatureCard key={index} data={item} />
            )}
        </section>
    )
}

export default FeatureTriibe
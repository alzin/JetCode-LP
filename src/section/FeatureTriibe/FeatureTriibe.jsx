// css files
import './FeatureTriibe.css'

// component
import FeatureCard from '../../component/FeatureCard/FeatureCard'

// Feature Triibe Data
import FeatureTriibeData from '../../data/FeatureTriibeData'

const FeatureTriibe = () => {
    return (
        <section className="feature-triibe">
            {FeatureTriibeData.map((item, index) =>
                <FeatureCard key={index} id={item.id} data={item} />
            )}
        </section>

    )
}

export default FeatureTriibe
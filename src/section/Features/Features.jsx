// css files
import './Features.css'

// component
import FeatureCard from '../../component/FeatureCard/FeatureCard'

// Feature Triibe Data
import FeaturesData from '../../data/FeatureData'

const Features = () => {
    return (
        <section className="features">
            <span id="features"></span>
            {FeaturesData.map((item, index) =>
                <FeatureCard key={index} id={item.id} data={item} />
            )}
        </section>

    )
}

export default Features
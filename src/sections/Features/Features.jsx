
// Styles
import Styles from './Features.module.css'

// components
import FeatureCard from '@/components/FeatureCard/FeatureCard'

// data
import { FeaturesData } from './data'

const Features = () => {

    return (
        <section className={Styles.features}>
            <span id="features" className={Styles.featuresHash}></span>
            {FeaturesData.map(item =>
                <FeatureCard key={item.id} id={item.id} data={item} />
            )}
        </section>
    )
}

export default Features
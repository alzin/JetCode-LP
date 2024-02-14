import { useEffect, useState } from 'react'

// css file
import './FeatureCard.css'

// components
import FeatureMobileNav from '../../component/FeatureMobileNav/FeatureMobileNav'
import FeatureNavContent from '../../component/FeatureNavContent/FeatureNavContent'
import FeatureNavIndicator from '../../component/FeatureNavIndicator/FeatureNavIndicator'
import { useParallax } from 'react-scroll-parallax'


const FeatureCard = (props) => {

    const parallax = useParallax({
        translateX: [-50, 55],
        translateY: [-10, 10]
    })

    const [activeIndex, setActiveIndex] = useState(0)
    const [featureNavbar, setFeatureNavbar] = useState(props.data.FeatureNavbar)


    //active one of featureNav item
    const handelActive = (index) => {

        setActiveIndex(index)

        setFeatureNavbar(
            featureNavbar.map(opj =>
                (opj.id === index ? { ...opj, isActive: true } : { ...opj, isActive: false }))
        )
    }


    // active circle in mobile featureNav (mobile version)
    const activateIndex = (i) => {
        if (i < 0) handelActive(props.data.FeatureNavbar.length + i)
        else handelActive(i)
    }


    useEffect(() => {
        handelActive(activeIndex)
    }, [])


    return (
        <div className="feed-card" ref={parallax.ref}>
            <section className="feed-section">
                <div className="container">
                    <div className="feed-head">
                        <div className="head-section">
                            <h2>{props.data.FeatureTitle}</h2>
                            <p>{props.data.FeatureContent}</p>
                        </div>
                        <div className="img-section">
                            <img src={props.data.FeatureImg} alt={props.data.FeatureTitle} />
                        </div>
                    </div>
                    {/* --------------------------- */}
                    <div className="feed-content">
                        <FeatureNavIndicator data={featureNavbar} handelActive={handelActive} activeIndex={activeIndex} />
                        <div className="tab-content">
                            {featureNavbar.map((item, index) =>
                                <FeatureNavContent key={index} data={item} />
                            )}
                        </div>
                        <FeatureMobileNav data={featureNavbar} activeIndex={activeIndex} setActiveIndex={activateIndex} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeatureCard
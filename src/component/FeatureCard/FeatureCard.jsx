import { useEffect, useRef, useState, useCallback } from 'react'

// css files
import './FeatureCard.css'

// components
import FeatureNavContent from '../../component/FeatureNavContent/FeatureNavContent'
// import FeatureMobileNav from '../../component/FeatureMobileNav/FeatureMobileNav'
// import FeatureNavIndicator from '../../component/FeatureNavIndicator/FeatureNavIndicator'


const FeatureCard = (props) => {

    // const [activeIndex, setActiveIndex] = useState(0)
    const [featureNavbar] = useState(props.data.FeatureNavbar)

    //active one of featureNav item

    // const handelActive = useCallback((index) => {
    //     setActiveIndex(index)
    //     setFeatureNavbar(
    //         featureNavbar.map(opj =>
    //             (opj.id === index ? { ...opj, isActive: true } : { ...opj, isActive: false }))
    //     )
    // }, [featureNavbar]);
    // const handelActive = (index) => {
    //     setActiveIndex(index)
    //     setFeatureNavbar(
    //         featureNavbar.map(opj =>
    //             (opj.id === index ? { ...opj, isActive: true } : { ...opj, isActive: false }))
    //     )
    // }

    // active circle in mobile featureNav (mobile version)
    // const activateIndex = (i) => {
    //     if (i < 0) handelActive(props.data.FeatureNavbar.length + i)
    //     else handelActive(i)
    // }


    //scall feature card when scrolling down 
    const card = useRef("")
    const [scale, setScale] = useState(1)

    const handleScroll = useCallback(() => {
        // const cardHeight = card.current.offsetHeight
        let cardOffsetTop = card.current.offsetTop - 150
        const scrollY = window.scrollY

        // parallax scrolling only if width more than 992 px
        if (props.id < 2 && window.innerWidth > 992) {
            if (scrollY >= cardOffsetTop) {
                setScale(.74)
            }
            else {
                setScale(.85)
            }
        }
    }, [props.id]);



    useEffect(() => {
        // setActiveIndex(0)
        // handelActive(activeIndex);
        // console.log(card.current.offsetTop);
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [handleScroll])



    return (
        <div className="feed-card" ref={card} style={{ "transform": `scale(${scale})` }}>
            <div className="feed-section">
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

                    <div className="feed-content">
                        {/* <FeatureNavIndicator data={featureNavbar} indicatorWidth={props.data.indicatorWidth} handelActive={handelActive} activeIndex={activeIndex} /> */}
                        <div className="tab-content">
                            {featureNavbar.map((item, index) =>
                                <FeatureNavContent key={index} data={item} />
                            )}
                        </div>
                        {/* <FeatureMobileNav data={featureNavbar} activeIndex={activeIndex} setActiveIndex={activateIndex} /> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FeatureCard
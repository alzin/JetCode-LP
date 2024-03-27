import { useEffect, useRef, useState, useCallback } from 'react'

// css files
import './FeatureCard.css'


const FeatureCard = (props) => {

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
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [handleScroll])



    return (
        <div className="feature-card" ref={card} style={{ "transform": `scale(${scale})` }}>
            <div className="feed-section">
                <div className="container">
                    <div className="feature-head">
                        <h2>{props.data.FeatureTitle}</h2>
                        <img src={props.data.FeatureImg} alt={props.data.FeatureTitle} />
                    </div>
                    <div className="feature-paragraph">
                        <p>{props.data.FeatureContent1}</p>
                        <p>{props.data.FeatureContent2}</p>
                    </div>


                </div>
            </div>
        </div >
    )
}

export default FeatureCard

// < div className = "feed-head" >
//                     <div className="head-section">
//                         <h2>{props.data.FeatureTitle}</h2>
//                         <p>{props.data.FeatureContent}</p>
//                         <p>{props.data.FeatureContent}</p>
//                     </div>
//                     <div className="img-section">
//                         <img src={props.data.FeatureImg} alt={props.data.FeatureTitle} />
//                     </div>
//                 </ >
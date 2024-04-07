"use client"

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'

// Styles
import Styles from './FeatureCard.module.css'


const FeatureCard = ({id,data}) => {
    
    //scall feature card when scrolling down 
    const card = useRef("")
    const [scale, setScale] = useState(1)

    const handleScroll = useCallback(() => {
        // const cardHeight = card.current.offsetHeight
        let cardOffsetTop = card.current.offsetTop - 150
        const scrollY = window.scrollY

        // parallax scrolling only if width more than 992 px
        if (id < 2 && window.innerWidth > 992) {
            if (scrollY >= cardOffsetTop) {
                setScale(.74)
            }
            else {
                setScale(.85)
            }
        }
    }, [id]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [handleScroll])


    return (
        <div className={Styles.featureCard} ref={card} style={{ "transform": `scale(${scale})` }}>
            <div className={Styles.feedSection}>
                <div className={`container ${Styles.container}`}>
                    <div className={Styles.featureHead}>
                        <h2>{data.FeatureTitle}</h2>
                        <div className={Styles.imageContainer}>
                            <Image src={data.FeatureImg} alt={data.FeatureTitle} fill={true} />
                        </div>
                    </div>
                    <div className={Styles.featureParagraph}>
                        <p>{data.FeatureContent1}</p>
                        <p>{data.FeatureContent2}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FeatureCard
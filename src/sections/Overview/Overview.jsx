"use client"

import { useEffect, useRef, useState } from 'react'

// Styles
import Styles from './Overview.module.css'

// components
import YouTubeVideo from '@/components/YouTubeVideo/YouTubeVideo'

// data
import { OverviewData } from './data'


const Overview = () => {
    const [rotateX, setRotateX] = useState(30)
    const video = useRef(0)

    useEffect(() => {

        const videoHeight = video.current.offsetHeight
        const videoOffsetTop = video.current.offsetTop
        const handleScroll = () => {
            if (window.innerWidth >= 992) {
                const scrollY = window.scrollY

                // if scrollY between (videoOffsetTop) and  (videoOffsetTop + videoHeight) active parallax in video  
                if (scrollY >= videoOffsetTop && scrollY <= videoOffsetTop + videoHeight) {

                    // (scrollY - videoOffsetTop) / videoHeight)  between 0 and 1
                    setRotateX(30 - (30 * (scrollY - videoOffsetTop) / videoHeight))
                }

            }
            else setRotateX(0)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <section className={Styles.overview}>
            <div className={`container ${Styles.container}`} ref={video}>
               
                <h2 className='gradiantText'>{OverviewData.title}</h2>
               
                <div className={Styles.videoContainer} style={{ "transform": `perspective(1000px) rotateX(${rotateX}deg)` }}>
                    <YouTubeVideo videoId={OverviewData.overviewVideoId} autoplay={false} />
                </div>
           
            </div>
           
            <span className={Styles.overviewHash} id="overview"></span>
       
        </section>
    )
}

export default Overview
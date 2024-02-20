import './HowAppWork.css'


import Tribe_product_video from '../../assets/videos/Tribe_product Hunt_2024-vp9-chrome.mp4'

import { useEffect, useRef, useState } from 'react'



const HowAppWork = () => {

    // const parallax = useParallax({
    //     rotateY: [-50, 71],
    //     rotateX:[0,50]
    // })
    const [rotateX, setRotateX] = useState(0)
    const video = useRef(0)

    useEffect(() => {
        const handleScroll = () => {

            const videoHeight = video.current.offsetHeight
            const videoOffsetTop = video.current.offsetTop - videoHeight + 100
            const scrollY = window.scrollY

            if (scrollY >= videoOffsetTop && scrollY <= videoOffsetTop + videoHeight) {
                setRotateX(30 - (300 * (scrollY - videoOffsetTop) / videoOffsetTop))
            }

        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])




    return (

        <section className="how-app-work">
            <div className="container">
                <h2>Explore how app works</h2>
                <div className="video-container">
                    <video ref={video} controls="" id="main-video" style={{ "transform": `perspective(1000px) rotateX(${rotateX}deg)` }}>
                        <source src={Tribe_product_video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    )
}

export default HowAppWork
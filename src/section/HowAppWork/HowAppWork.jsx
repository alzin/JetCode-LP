import { useEffect, useRef, useState } from 'react'

// css files
import './HowAppWork.css'

// assets
import Tribe_product_video from '../../assets/videos/Tribe_product Hunt_2024-vp9-chrome.mp4'


const HowAppWork = () => {
    const [rotateX, setRotateX] = useState(30)
    const video = useRef(0)


    useEffect(() => {
        const videoHeight = video.current.offsetHeight
        const videoOffsetTop = video.current.offsetTop

        const handleScroll = () => {
            const scrollY = window.scrollY

            // console.log(scrollY, " ", videoOffsetTop, " ", videoHeight)

            // if scrollY between (videoOffsetTop) and  (videoOffsetTop + videoHeight) active parallax in video  
            if (scrollY >= videoOffsetTop && scrollY <= videoOffsetTop + videoHeight) {
                // console.log(1);
                // (scrollY - videoOffsetTop) / videoHeight)  between 0 and 1
                setRotateX(30 - (30 * (scrollY - videoOffsetTop) / videoHeight))
            }

        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])




    return (

        <section className="how-app-work"  >
            <div className="container" ref={video}>
                <h2 >Explore how app works</h2>
                <div className="video-container" >
                    <video controls="" style={{ "transform": `perspective(1000px) rotateX(${rotateX}deg)` }}>
                        <source src={Tribe_product_video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    )
}

export default HowAppWork
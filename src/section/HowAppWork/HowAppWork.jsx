import { useEffect, useRef, useState } from 'react'

// css files
import './HowAppWork.css'

// assets
import Tribe_product_video from '../../assets/videos/Tribe_product Hunt_2024-vp9-chrome.mp4'
import YouTubeVideo from '../../component/YouTubeVideo/YouTubeVideo'


const HowAppWork = () => {
    const [rotateX, setRotateX] = useState(30)
    const video = useRef(0)




    useEffect(() => {

        const videoHeight = video.current.offsetHeight
        const videoOffsetTop = video.current.offsetTop

        const handleScroll = () => {
            if (window.innerWidth >= 992) {
                const scrollY = window.scrollY

                // console.log(scrollY, " ", videoOffsetTop, " ", videoHeight)

                // if scrollY between (videoOffsetTop) and  (videoOffsetTop + videoHeight) active parallax in video  
                if (scrollY >= videoOffsetTop && scrollY <= videoOffsetTop + videoHeight) {
                    // console.log(1);
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
        // https://youtu.be/G1-ZuhjnvsM?si=2AnRohLedxt3Yyfx
        <section className="how-app-work" name="demo" >
            <div className="container" ref={video}>
                <h2 >Explore how app works</h2>
                <div className="video-container" style={{ "transform": `perspective(1000px) rotateX(${rotateX}deg)` }}>
                    {/* <video controls="" muted style={{ "transform": `perspective(1000px) rotateX(${rotateX}deg)` }}>
                        <source src={Tribe_product_video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> */}
                    <YouTubeVideo videoId="G1-ZuhjnvsM"/>
                    {/* <iframe  src="https://www.youtube.com/embed/G1-ZuhjnvsM" title="Jetcode" frameborder="5" ></iframe> */}
                </div>
            </div>
        </section>
    )
}

export default HowAppWork
import './HowAppWork.css'


import Tribe_product_video from '../../assets/videos/Tribe_product Hunt_2024-vp9-chrome.mp4'



const HowAppWork = () => {
    return (
        <section className="how-app-work">
            <div className="container">
                <h2>Explore how app works</h2>
                <div className="video-container">
                    <video controls="true" id="main-video">
                        <source src={Tribe_product_video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    )
}

export default HowAppWork
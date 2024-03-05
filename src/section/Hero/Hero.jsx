import './Hero.css'


// assets file
import HeroImg from '../../assets/images/Ai-2.png'



//component
import Buttons from '../../component/Buttons/Buttons'
// import Particle from '../../component/Particles/Particle'



const Hero = () => {
    return (
        <div className="hero container">
            {/* <Particle /> */}
            <div className="blur"></div>
            <div className="hero-l">
                {/* <div className="top-post">
                    <a href="https://www.producthunt.com/products/triibe-3?utm_source=badge-top-post-badge&utm_medium=badge#triibe-550d1379-c712-4f7a-8e39-eca27797766a">
                        <img src={Badge} alt="Badge" />
                    </a>
                    <a href="https://www.producthunt.com/products/triibe-3?utm_source=badge-top-post-badge&utm_medium=badge#triibe-550d1379-c712-4f7a-8e39-eca27797766a">
                        <img src={TopicBadge} alt="TopicBadge" />
                    </a>
                </div> */}

                <h1>
                    Accelerate Your Development with JetCode: <span className="gradiant-text">The Future of Efficient Programming</span>
                    {/* <div className="slideWord">
                        <span> Innovative </span>
                        <span>Comprehensive</span>
                        <span>User-friendly</span>
                    </div> */}
                </h1>
                <p>
                    In the fast-paced world of technology, every second counts. Especially for engineering managers and programmers juggling multiple projects and tight deadlines. That's why we created JetCode, the tool that turns your system requirements into ready-to-use code with the click of a button.
                </p>
                <div className="hero-button">
                    <Buttons content='Try for free' to='https://dahab-production.up.railway.app/' className="TryFreeButton" />
                </div>
                <p>*No credit card required</p>
            </div>

            <div className="hero-r">
                <img src={HeroImg} alt="HeroImg" loading='lazy' />
            </div>
        </div>
    )
}

export default Hero





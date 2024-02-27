import './Hero.css'


// assets file
import HeroImg from '../../assets/images/Ai-2.png'



//component
import Buttons from '../../component/Buttons/Buttons'
import Particle from '../../component/Particles/Particle'



const Hero = () => {
    return (
        <div className="hero container">
            <Particle />
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
                    Revolutionize Programming with Slash code IA :
                    <div className="slideWord">
                        <span> Innovative </span>
                        <span>Comprehensive</span>
                        <span>User-friendly</span>
                    </div>
                </h1>
                <p>
                    Slash Code is a cutting-edge website that harnesses the power
                    of GPT technology to provide a unique chat experience
                    with AI.Tailored specifically for programmers,
                    Slash Code offers a comprehensive platform that delivers
                    results akin to detailed documentation on any
                    programming-related topic you're searching for.With its user-friendly interface and advanced AI capabilities,
                    Slash Code is your go-to destination for expert guidance and information in the programming world.
                </p>
                <div className="hero-button">
                    <Buttons content='Try for free' to='/' className="TryFreeButton" />
                    <Buttons content='Book a demo' to='/' className="BookADemo" />
                </div>
                {/* <p>*No credit card required</p> */}
            </div>

            <div className="hero-r">
                <img src={HeroImg} alt="HeroImg" loading='lazy' />
            </div>
        </div>
    )
}

export default Hero





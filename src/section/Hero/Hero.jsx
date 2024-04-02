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
                <div className="top-post">
                    {/* <a href="http://producthant" target="_blank" rel="noopener noreferrer">product hunt</a> */}
                    <a href="https://www.producthunt.com/products/jetcode/reviews?utm_source=badge-product_review&utm_medium=badge&utm_souce=badge-jetcode" target="_blank" rel="noopener noreferrer">
                        <img src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=577633&theme=light" alt="JetCode - Accelerate&#0032;Your&#0032;Development&#0032;with&#0032;a&#0032;powerful&#0032;code&#0032;guide&#0032;&#0040;AI&#0041; | Product Hunt" />
                    </a>
                </div>

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





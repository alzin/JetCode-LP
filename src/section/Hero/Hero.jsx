import './Hero.css'


// assets file
import HeroImg from '../../assets/images/hero_img.png'
import Badge from '../../assets/images/top-post-badge.svg'
import TopicBadge from '../../assets/images/top-post-topic-badge.svg'


//component
import { TryFreeButton } from '../../component/Buttons/Buttons'



const Hero = () => {
    return (
        <div className="hero container">
            <div className="hero-l">
                <div className="top-post">
                    <a href="https://www.producthunt.com/products/triibe-3?utm_source=badge-top-post-badge&utm_medium=badge#triibe-550d1379-c712-4f7a-8e39-eca27797766a">
                        <img src={Badge} alt="Badge" />
                    </a>
                    <a href="https://www.producthunt.com/products/triibe-3?utm_source=badge-top-post-badge&utm_medium=badge#triibe-550d1379-c712-4f7a-8e39-eca27797766a">
                        <img src={TopicBadge} alt="TopicBadge" />
                    </a>
                </div>
                <h1>
                    Build happier workplaces with a culture of
                    <div className="slideWord">
                        <span>wellness</span>
                        <span>recognition</span>
                        <span>engagement</span>
                    </div>
                </h1>
                <p>Empower your team with Triibe, where connections grow and every member truly shines. </p>
                <div className="hero-button">
                    <TryFreeButton />
                    <TryFreeButton />
                </div>

                <p>*No credit card required</p>
            </div>

            <div className="hero-r">
                <img src={HeroImg} alt="HeroImg" />
            </div>
        </div>
    )
}

export default Hero
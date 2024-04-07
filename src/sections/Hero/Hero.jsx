import Link from 'next/link'
import Image from 'next/image'

// Styles
import Styles from './Hero.module.css'

// components
import Buttons from '@/components/Buttons/Buttons'

//data
import { HeroData } from './data'

const Hero = () => {
    return (
        <div className={`container ${Styles.hero}`}>
            <div className={`blur ${Styles.blur}`}></div>
            <div className={Styles.heroLeft}>
                <div className={Styles.topPost}>
                    <Link href={HeroData.producthuntLink} target="_blank" rel="noopener noreferrer">
                        <Image src={HeroData.producthuntImageSrc} alt={HeroData.producthuntImageAlt} fill={true} type="image/svg+xml"/>
                    </Link>
                </div>
                <h1>
                    {HeroData.mainContent}
                    <span className="gradiantText">
                        {HeroData.gradiantContent}
                    </span>
                </h1>
                <p>{HeroData.paragraph}</p>
                <div className={Styles.heroButton}>
                    <Buttons content='Try for free' to='https://dahab-production.up.railway.app/' />
                </div>
                <p>{HeroData.credit}</p>
            </div>

            {/* <div className={Styles.heroRight}>
                <Image src={HeroImg} alt="HeroImg" fill={true}/>
            </div> */}
        </div>
    )
}

export default Hero
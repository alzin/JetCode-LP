// css files
import './Supercharge.css'

// assets

import Platform from '../../assets/images/platform.svg'
import Time from '../../assets/images/time.svg'
import Step from '../../assets/images/step.svg'


import SuperChargeBox from '../../component/SuperChargeBox/SuperChargeBox'


const Supercharge = () => {
    return (
        <section className="super-charge container">
            <h2 className='gradiant-text'>Supercharge your development with AI</h2>
            <h5>
                Input your project requirements and let our AI work its magic, generating clean, efficient, and ready-to-use code
            </h5>
            <div className="box-container">
                <SuperChargeBox SrcImg={Step} AltImage="Ai_1" BoxTitle="Step-by-Step Implementation Guides" BoxContent="Get more than just code. Our platform provides detailed implementation guides to ensure seamless integration and deployment." />
                <SuperChargeBox SrcImg={Platform} AltImage="Needle" BoxTitle="Cross-Platform Support" BoxContent="Whether you're developing a cutting-edge web application, a mobile app, or software for any platform, JetCode has you covered." />
                <SuperChargeBox SrcImg={Time} AltImage="Ai_2" BoxTitle="Save Time and Resources" BoxContent="Eliminate the need to sift through countless resources or debug patchwork code. JetCode streamlines your development process, freeing up your time to focus on innovation and refinement." />
            </div>
        </section>
    )
}

export default Supercharge
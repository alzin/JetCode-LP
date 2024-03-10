// css files
import './Supercharge.css'

// assets
import Ai_1 from '../../assets/images/ai_1.svg'
import Needle from '../../assets/images/needle.svg'
import Ai_2 from '../../assets/images/ai_2.svg'
import SuperChargeBox from '../../component/SuperChargeBox/SuperChargeBox'


const Supercharge = () => {
    return (
        <section className="super-charge">
            <h2>Supercharge your development with AI</h2>
            <h5>

                Input your project requirements and let our AI work its magic, generating clean, efficient, and ready-to-use code
            </h5>
            <div className="box-container">
                <SuperChargeBox SrcImg={Ai_1} AltImage="Ai_1" BoxTitle="Step-by-Step Implementation Guides" BoxContent="Get more than just code. Our platform provides detailed implementation guides to ensure seamless integration and deployment." />
                <SuperChargeBox SrcImg={Needle} AltImage="Needle" BoxTitle="Cross-Platform Support" BoxContent="Whether you're developing a cutting-edge web application, a mobile app, or software for any platform, JetCode has you covered." />
                <SuperChargeBox SrcImg={Ai_2} AltImage="Ai_2" BoxTitle="Save Time and Resources" BoxContent="Eliminate the need to sift through countless resources or debug patchwork code. JetCode streamlines your development process, freeing up your time to focus on innovation and refinement." />
            </div>
        </section>
    )
}

export default Supercharge
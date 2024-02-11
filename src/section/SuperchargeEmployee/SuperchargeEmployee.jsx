import './SuperchargeEmployee.css'


import Ai_1 from '../../assets/images/ai_1.svg'
import Needle from '../../assets/images/needle.svg'
import Ai_2 from '../../assets/images/ai_2.svg'
import SuperChargeBox from '../../component/SuperChargeBox/SuperChargeBox'


const SuperchargeEmployee = () => {
    return (
        <section className="super-charge-employee">
            <h2>Supercharge employee engagement with AI</h2>
            <h5>
                Our platform skillfully blends AI with employee engagement, ensuring a
                smarter, responsive, and secure workplace experience that enriches
                interaction and culture
            </h5>
            <div className="box-container">
                <SuperChargeBox SrcImg={Ai_1} AltImage="Ai_1" BoxTitle="AI Chatbot" BoxContent="Swiftly resolves HR queries with accurate, 24/7 AI support, ensuring reliable information anytime " />
                <SuperChargeBox SrcImg={Needle} AltImage="Needle" BoxTitle="AI in Analytics" BoxContent="Provides real-time sentiment analysis in pulse surveys for deeper insight and informed decisions. " />
                <SuperChargeBox SrcImg={Ai_2} AltImage="Ai_2" BoxTitle="Smart Celebrations" BoxContent="Effortlessly recognizes employee milestones, enhancing workplace community and culture. " />
            </div>
        </section>
    )
}

export default SuperchargeEmployee
// css files
import './FreqQuestion.css'

// faqs data
import FaqsData from '../../data/FaqsDropDown'

// componenet
import { FaqsDropDown } from '../../component/DropDown/DropDown'


const FreqQuestion = () => {
    return (
        <section className="freq-question">
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <div className="accordion">
                    {FaqsData.map((faq, index) =>
                        <FaqsDropDown key={index} ques={faq.ques} resp={faq.resp} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default FreqQuestion
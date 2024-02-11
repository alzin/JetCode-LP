import './FreqQuestion.css'


import FaqsData from '../../data/FaqsDropDown'

import { FaqsDropDown } from '../../component/DropDown/DropDown'

const FreqQuestion = () => {
    return (
        <section class="freq-question">
            <div class="container">
                <h2>Frequently Asked Questions</h2>
                <div class="accordion">
                    {FaqsData.map((faq) =>
                        <FaqsDropDown ques={faq.ques} resp={faq.resp} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default FreqQuestion
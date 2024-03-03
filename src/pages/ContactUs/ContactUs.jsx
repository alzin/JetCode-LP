import './ContactUs.css'
import ContactImg from '../../assets/images/ai_1.svg'
import { useState } from 'react'
import { useEffect } from 'react'

const ContactUs = () => {
    const [info, setInfo] = useState({
        name: "",
        companyName: "",
        email: "",
        message: ""
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setInfo({ ...info, [name]: value })
    }

    useEffect(() => {
        console.log(info);
    }, [info])


    return (
        <div className='contact-us'>
            <div className="container">
                <div className='contact-l'>
                    <img src={ContactImg} alt="contact img" />
                </div>

                <div className='contact-r'>
                    <form>
                        <h2>Contact Us</h2>

                        <div className="inputBox">
                            <input type="text" name='name' value={info.name} onChange={handleInput} required="required" />
                            <span>Name *</span>
                            <i></i>
                        </div>

                        <div className="inputBox">
                            <input type="text" name='companyName' value={info.companyName} onChange={handleInput} />
                            <span>Company Name</span>
                            <i></i>
                        </div>

                        <div className="inputBox">
                            <input type="email" name='email' value={info.email} onChange={handleInput} required="required" />
                            <span>Email *</span>
                            <i></i>
                        </div>

                        <div className="inputBox">
                            <textarea type="text" name='message' rows="5" value={info.message} onChange={handleInput} required="required" />
                            <span>Message *</span>
                            <i></i>
                        </div>

                        <input type="submit" value="Contact Us" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
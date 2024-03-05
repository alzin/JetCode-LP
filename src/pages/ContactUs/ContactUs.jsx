import './ContactUs.css'
import ContactImg from '../../assets/images/ai_1.svg'
import { useState, useEffect, useRef } from 'react'
import emailjs from "@emailjs/browser";

const ContactUs = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_0orlrkc",
                "template_fabncd4",
                form.current,
                "mqYufy-Epq6lV-Wdk",
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Email sent successfully!");
                },
                (error) => {
                    console.log(error.text);
                    alert("An error occurred while sending the email.");
                },
            );
        e.target.reset();
    };

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
        console.log(info)
    }, [info])


    return (
        <div className='contact-us'>
            <div className="container">
                <div className='contact-l'>
                    <img src={ContactImg} alt="contact img" />
                </div>

                <div className='contact-r'>
                    <form ref={form} onSubmit={sendEmail}>
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
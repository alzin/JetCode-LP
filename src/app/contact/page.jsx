"use client"

import { useState, useRef, useEffect } from 'react'
import emailjs from "@emailjs/browser";

import Styles from './contact.module.css'

const Contact = () => {
  const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_qxw4o28', 'template_ka2xym3', form.current, {
                publicKey: 'AvfEc8p2EEsvpIGTh',
            })
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

    return (
        <div className={Styles.contactUs}>
            <div className={`container ${Styles.container}`}>
                <div className={Styles.contactRight}>
                    <form className={Styles.form} ref={form} onSubmit={sendEmail}>
                        <h2>Contact Us</h2>

                        <div className={Styles.inputBox}>
                            <input className={Styles.input} type="text" autoComplete='off' name='name' value={info.name} onChange={handleInput} required="required" />
                            <span>Name *</span>
                            <i></i>
                        </div>

                        <div className={Styles.inputBox}>
                            <input className={Styles.input} type="text" autoComplete='off' name='companyName' value={info.companyName} onChange={handleInput} />
                            <span>Company Name</span>
                            <i></i>
                        </div>

                        <div className={Styles.inputBox}>
                            <input className={Styles.input} type="email" autoComplete='off' name='email' value={info.email} onChange={handleInput} required="required" />
                            <span>Email *</span>
                            <i></i>
                        </div>

                        <div className={Styles.inputBox}>
                            <textarea type="text" autoComplete='off' name='message' rows="5" value={info.message} onChange={handleInput} required="required" />
                            <span>Message *</span>
                            <i></i>
                        </div>

                        <input  className={Styles.input} type="submit" value="Contact Us" />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact

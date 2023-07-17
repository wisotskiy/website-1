import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import { useTranslation } from "react-i18next"
import "./_ContactForm.module.scss"


const ContactForm = () => {
    
    const { t } = useTranslation()

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm('service_yec507h', 'template_6eyr7za', form.current, 'pZd-Cxk2RpFWt1TYw')
            .then((result) => {
                console.log(result.text)
                console.log(form)
                form.current.reset() // <<<
        }, (error) => {
                console.log(error.text)
        })
    }

    return (
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" id="user_name" name="user_name" placeholder={t("your_name")} required />
            <input type="tel" id="user_phone" name="user_phone" placeholder={t("your_phone")} />
            <input type="email" id="user_email" name="user_email" placeholder={t("your_email")} required />
            <textarea id="message" name="message" placeholder={t("your_message")} required />
            <input type="submit" value={t("send")} />
        </form>
    )
}

export default ContactForm
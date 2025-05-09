import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { useTranslation } from "react-i18next"
import * as style from "./_ContactForm.module.scss"


const ContactForm = () => {
    
    const { t } = useTranslation()

    const form = useRef()
    const [isAgreed, setIsAgreed] = useState(false)
console.log(isAgreed)
    const date = new Date()
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    const datePart = date.toLocaleDateString('en-US', options).replace(',', '');
    const timePart = date.toTimeString().slice(0, 5); 
    const formatted = `${datePart} ${timePart}`

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm('service_1whjcvg', 'template_ifdvs0b', form.current, '5lX6XQTQUPXX91nx8')
            .then((result) => {
                console.log(result.text)
                console.log(form)
                form.current.reset()
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
            <div className={style.agreement}>
                <input 
                    type="checkbox" 
                    id="gdpr_agreement" 
                    name="gdpr_agreement"
                    checked={isAgreed}
                    onChange={(e) => setIsAgreed(e.target.checked)} 
                    />
                <label htmlFor="gdpr_agreement"><span style={{color: "red"}}>*</span>{t("gdpr_agreement_checkbox")}</label>
            </div>
            <input type="time" id="time" name="time" defaultValue={formatted} style={{display: "none"}} />
            <input type="text" id="gdpr_agreement_message" name="gdpr_agreement_message" defaultValue={t("gdpr_agreement_message")} style={{display: "none"}} />
            <input type="submit" value={t("send")} disabled={!isAgreed} />
        </form>
    )
}

export default ContactForm
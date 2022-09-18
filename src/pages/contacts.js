import * as React from "react"
import { useTranslation } from "react-i18next"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Layout from "../components/layout"

import * as style from "../style/_style.module.scss"

const Contacts = () => {
  
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo title={t("contacts")} />
      <StaticImage 
        src="../images/header_pr.jpg" 
        alt="slider"
        layout="fullWidth"
        placeholder="blurred"
    />
      <div className={style.gap}></div>
      <div className={style.container}>
        <h1 className={style.title}>{t("contacts")}</h1>

        <form action="https://submit-form.com/m6LCQqtH">
          <textarea id={style.message} name="message" placeholder={t("your_message")}></textarea>
          <input id={style.phone} type="tel" name="phone" placeholder={t("your_phone")} />
          <input id={style.email} type="email" name="email" placeholder={t("your_email")} />
          <button id={style.submit} type="submit">{t("send")}</button>
        </form>

        <div className={style.contacts}>
          <div className={style.contactsColumn}>
            <h4>{t("email")}</h4>
            <p>wisotskiy@gmail.com</p>
          </div>
          <div className={style.contactsColumn}>
            <h4>{t("phone")}</h4>
            <p>+(420) 792-744-190</p>
          </div>
          <div className={style.contactsColumn}>
            <h4>{t("social")}</h4>
            <p><a href="https://www.facebook.com/wisotskiy" target="_blank" rel="noopener noreferrer">Facebook</a></p>
            <p><a href="https://www.instagram.com/yaroslaw.wisotskiy/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
            <p><a href="https://www.youtube.com/channel/UCARc7cdl8tt5e2Dr1OVokig" target="_blank" rel="noopener noreferrer">YouTube</a></p>
          </div>
        </div>

      </div>     
    </Layout>
  )
}

export default Contacts


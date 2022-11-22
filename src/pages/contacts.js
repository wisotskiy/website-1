import * as React from "react"
import { useTranslation } from "react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import { LocalizedLink } from "gatsby-theme-i18n"

import Seo from "../components/seo"
import Layout from "../components/layout"

import * as style from "../style/_style.module.scss"

const Contacts = () => {
  
  const { t } = useTranslation()
  const a = <LocalizedLink to={"/contacts"}></LocalizedLink>
console.log(a)
  const b = `https://stirring-mermaid-d8fa23.netlify.app${a?._owner?.key}`
  console.log(b)
  return (
    <Layout>
      <Seo title={t("seo_title_contacts")} description={t("seo_description_contacts")} />
      <div className={style.container}>
        <h1 className={style.title}>{t("about")}</h1>

        <div className={style.infoBlock}>
          <ul className={style.links}>
            <li>
              <a className={style.resource} href="https://weva.pro/" target="_blank" rel="noopener noreferrer">
                Weva
              </a> — Asociația Videografilor de evenimente din toată  lumea.
            </li>
            <li>
              <a className={style.resource} href="https://www.fearlessphotographers.com/" target="_blank" rel="noopener noreferrer">
                Fearless Photographers
              </a> — Asociația internațională de fotografi.
            </li>
            <li>
              <a className={style.resource} href="https://www.fearlessphotographers.com/" target="_blank" rel="noopener noreferrer">
                Mywed
              </a> — Asociаția fotografilor din toată lumea.
            </li>
            <li>
              <a className={style.resource} href="https://yourockphotographers.com/" target="_blank" rel="noopener noreferrer">
                You Rock Photographers
              </a> — Comunitate de fotografi.
            </li>
            <li>
              <a className={style.resource} href="https://www.ighawards.com/" target="_blank" rel="noopener noreferrer">
                Ighawards
              </a> — Organizația internațională de fotografi și videografi.
            </li>

            
          </ul>
          
        </div>
        
        <div className={style.awardsContacts}>
          <StaticImage src="../images/awards.jpg" alt="The award icons"/>
        </div>
        

        <div className={style.contacts}>
          <StaticImage 
            className={style.aboutPhoto}
            src="../images/me.jpg" 
            alt="my foto"
          />
          <form action="https://submit-form.com/m6LCQqtH">
            <input
              type="hidden"
              name="_redirect"
              value={b}
            />
            <input id={style.name} type="text" name="name" placeholder={t("your_name")} />
            <input id={style.phone} type="tel" name="phone" placeholder={t("your_phone")} />
            <input id={style.email} type="email" name="email" placeholder={t("your_email")} />
            <textarea id={style.message} name="message" placeholder={t("your_message")}></textarea>
            <button id={style.submit} type="submit">{t("send")}</button>
          </form>

        </div>

      </div>     
    </Layout>
  )
}

export default Contacts


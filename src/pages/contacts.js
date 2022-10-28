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
      
      <div className={style.container}>
        <h1 className={style.title}>{t("about")}</h1>

        <div className={style.infoBlock}>
          <ul className={style.links}>
            <li>
              <a className={style.resource} href="https://weva.pro/" target="_blank" rel="noopener noreferrer">
                Weva
              </a> — Asociația Videografilor de evenimente din toată lumea.
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
            <input id={style.name} type="text" name="name" placeholder={t("your_name")} />
            <input id={style.phone} type="tel" name="phone" placeholder={t("your_phone")} />
            <input id={style.email} type="email" name="email" placeholder={t("your_email")} />
            <textarea id={style.message} name="message" placeholder={t("your_message")}></textarea>
            <button id={style.submit} type="submit">{t("send")}</button>
          </form>



        
{/*           <div className={style.contactsColumn}>
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
          </div> */}
        </div>

      </div>     
    </Layout>
  )
}

export default Contacts


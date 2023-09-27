import * as React from "react"
import { useTranslation } from "react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import { useLocalization } from "gatsby-theme-i18n"
import ContactForm from "../components/ContactForm/ContactForm"

import Seo from "../components/seo"
import Layout from "../components/layout"

import * as style from "../style/_style.module.scss"

const Contacts = () => {
  
  const { t } = useTranslation()
  const { locale } = useLocalization()

  
  return (
    <Layout>
      <Seo title={t("seo_title_contacts")} description={t("seo_description_contacts")} />
      <div className={style.container}>
        <h1 className={style.title}>{t("about")}</h1>

        <div className={style.infoBlock}>
          <ul className={style.links}>
            <li>
              <a className={style.resource} href="https://wevsy.com/uk/videographer/wisotskiy/" target="_blank" rel="nofollow noreferrer">
                Wevsy
              </a> — {t("wevsy")}
            </li>
{/*             <li>
              <a className={style.resource} href="https://weva.pro/" target="_blank" rel="nofollow noreferrer">
                Weva
              </a> — {t("weva")}
            </li> */}
{/*             <li>
              <a className={style.resource} href="https://www.fearlessphotographers.com/" target="_blank" rel="nofollow noreferrer">
                Fearless Photographers
              </a> — {t("fearless_photographers")}
            </li> */}
{/*             <li>
              <a className={style.resource} href="https://www.fearlessphotographers.com/" target="_blank" rel="nofollow noreferrer">
                Mywed
              </a> — {t("mywed")}
            </li> */}
{/*             <li>
              <a className={style.resource} href="https://yourockphotographers.com/" target="_blank" rel="nofollow noreferrer">
                You Rock Photographers
              </a> — {t("you-rock_photographers")}
            </li> */}
{/*             <li>
              <a className={style.resource} href="https://www.ighawards.com/" target="_blank" rel="nofollow noreferrer">
                Ighawards
              </a> — {t("ighawards")}
            </li> */}
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

        <ContactForm />
        </div>

      </div>     
    </Layout>
  )
}

export default Contacts


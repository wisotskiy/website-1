import React, { useState, useEffect } from "react"
import { Trans } from "react-i18next"
import { useTranslation } from "react-i18next"
import { LocalizedLink } from "gatsby-theme-i18n"
import * as style from "../style/_style.module.scss"
import yt from "../images/yt_mc.svg"
import fb from "../images/fb_monochrome.svg"
import insta from "../images/insta_monochrome.svg"

import top from "../images/to_top.svg"

const isBrowser = typeof window !== "undefined"

function Footer() {

  const { t } = useTranslation()

  const year = new Date().getFullYear()

  let locale = "/"
  if (isBrowser) {
    locale = window.location.pathname
  }

  const [isVisible, setIsVisible] = useState(false)

  const styleVisible = {
    display: "block"
  }

  const styleInisible = {
    display: "none"
  }

  useEffect(() => {
    
    const showTopButton = () => {
      window.scrollY > 300 && setIsVisible(true)
      window.scrollY <= 300 && setIsVisible(false)
    }
    
    window.addEventListener('scroll', showTopButton)

    return () => {
      window.removeEventListener('scroll', showTopButton)
    }
  }, [])

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        
        <div className={style.socials}>
          <a href="https://www.facebook.com/wisotskiy" target="_blank" rel="nofollow noreferrer">
            <img src={fb} alt="facebook logo"></img>
          </a>
          <a href="https://www.youtube.com/channel/UCARc7cdl8tt5e2Dr1OVokig" target="_blank" rel="nofollow noreferrer">
            <img src={yt} alt="youtube logo"></img>
          </a>
          <a href="https://www.instagram.com/yaroslaw.wisotskiy/" target="_blank" rel="nofollow noreferrer">
            <img src={insta} alt="instagram logo"></img>
          </a>
        </div>
        <p style={{marginBottom: "10px"}}><Trans i18nKey="footer">{{ year }}</Trans></p>
        <p style={{marginBottom: "10px"}}>{t("photo_studio_address")}</p>
        <LocalizedLink style={{margin: "0 auto 10px"}} to="/terms-and-conditions"><span style={{fontSize: "16px", color: "#0108eb"}}>{t("terms_and_conditions")}</span></LocalizedLink>
        <LocalizedLink style={{margin: "0 auto 10px"}} to="/privacy-policy"><span style={{fontSize: "16px", color: "#0108eb"}}>{t("privacy_policy")}</span></LocalizedLink>
        {locale === '/' ?
          <p style={{fontSize: "12px", color: "#8f8f8f", marginBottom: "10px"}}>Developed by
          <a href="https://websolutionsforyou.com/" target="_blank"> websolutionsforyou.com</a></p>
          :
          <p style={{fontSize: "12px", color: "#8f8f8f", marginBottom: "10px"}}>Developed by <span style={{fontSize: "14px", color: "#2a2a2a"}}>websolutionsforyou.com</span></p>
        }

        <LocalizedLink style={isVisible ? styleVisible : styleInisible} className={style.buttonTop} to={locale}><img src={top} alt="to top button"></img></LocalizedLink>
      </div>
    </footer>
  )
}

export default Footer

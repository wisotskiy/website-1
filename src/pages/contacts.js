import * as React from "react"
//import { graphql } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"

import Seo from "../components/seo"
import Layout from "../components/layout"

import * as style from "../style/_style.module.scss"

const Contacts = () => {
  
  const { t } = useTranslation()
  //const categoriesRightOrder = data.file.childMdx.exports.categories

  return (
    <Layout>
      <Seo title={t("contacts")} />
      <div className={style.container}>
        <h1 className={style.title}>{t("contacts")}</h1>

        <form className={style.contactsForm} action="https://submit-form.com/m6LCQqtH">
          <input type="text" name="message" placeholder={t("your_message")} />
          <input type="email" name="email" placeholder={t("your_email")} />
          <button type="submit">{t("send")}</button>
        </form>

      </div>

      
    </Layout>
  )
}

export default Contacts


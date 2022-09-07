import * as React from "react"
import { useTranslation } from "react-i18next"

import Seo from "../components/seo"
import Layout from "../components/layout"

import * as style from "../style/_style.module.scss"

const Contacts = () => {
  
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo title={t("contacts")} />
      <div className={style.container}>
        <h1 className={style.title}>{t("contacts")}</h1>

        <form action="https://submit-form.com/m6LCQqtH">
          <textarea id={style.message} name="message" placeholder={t("your_message")}></textarea>
          {/* <input id={style.message} type="text" name="message" placeholder={t("your_message")} /> */}
          <input id={style.phone} type="tel" name="phone" placeholder={t("your_phone")} />
          <input id={style.email} type="email" name="email" placeholder={t("your_email")} />
          <button id={style.submit} type="submit">{t("send")}</button>
        </form>

      </div>     
    </Layout>
  )
}

export default Contacts


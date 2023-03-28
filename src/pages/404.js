import * as React from "react"
import { useTranslation } from "react-i18next"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as style from "../style/_style.module.scss"

const NotFoundPage = () => {
  
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo title="404: Not found" />
      <div className={style.container}>
        <h1>404: {t("four_o_four_title")}</h1>
        <p style={{margin: 'auto'}}>{t("four_o_four_text")}</p>
      </div>

    </Layout>
  )
}

export default NotFoundPage

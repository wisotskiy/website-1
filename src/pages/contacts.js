import * as React from "react"
//import { graphql } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"

import Seo from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"

import * as style from "../style/_style.module.scss"

const IndexPage = () => {
  
  const { t } = useTranslation()
  //const categoriesRightOrder = data.file.childMdx.exports.categories

  return (
    <Layout>
      <Seo title={t("contacts")} />
      <div className={style.container}>
        <h1 className={style.title}>{t("contacts")}</h1>

      </div>

      
    </Layout>
  )
}

export default IndexPage


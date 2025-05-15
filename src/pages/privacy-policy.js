//import * as React from "react"
import React, { useState } from 'react'
import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import { useLocalization } from "gatsby-theme-i18n"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "../components/seo"
import Layout from "../components/layout"

import * as style from "../style/_style.module.scss"

const PrivacyPolicy = ({ data }) => {

  const { t } = useTranslation()
  const { locale } = useLocalization()

  const policy = data.allFile.nodes

  return (
    <Layout>
      <Seo title={t("privacy_policy")} description={t("privacy_policy")} />

      <div className={style.container}>
        <h1 className={style.title}>{t("privacy_policy")}</h1>
        <div className={style.termsAndConditions}>

          {policy.map(el => {
            let a = ''
            const l = el.childMdx.fields.locale
            if (l === locale) {
              a = <MDXRenderer>{el.childMdx.body}</MDXRenderer>
            }

            return (
              <div key={el.id} className={style.termsAndConditions}>
                {a}
              </div>
            )
          })}
              
          </div>
      </div>     
    </Layout>
  )
}

export default PrivacyPolicy

export const query = graphql`
query PrivacyPolicy {
  allFile(filter: {sourceInstanceName: {eq: "terms_and_conditions"}}) {
    nodes {
      childMdx {
        frontmatter {
          title
          seo_title
          seo_description
        }
        body
        fields {
          locale
        }
      }
      id
    }
  }
}
`


//import * as React from "react"
import React, { useState, useEffect } from 'react'
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
  const [article, setArticle] = useState('')

  const policy = data.allFile.nodes
/*   policy.map(node => {
    console.log(node.childMdx)
    return node.locale === locale && setArticle(node.childMdx.body)

  }) */
/*   policy.forEach(node => {
    node.childMdx.fields.locale === locale && setArticle(node.childMdx.body)
  }) */
/*   
  
  

 */

/*   

console.log(article) */
/*   useEffect(() => {
    if (policy) {

    }
  }) */

console.log(policy)
  return (
    <Layout>
      <Seo title={t("privacy_policy")} description={t("privacy_policy")} />

      <div className={style.container}>
        <h1 className={style.title}>{t("privacy_policy")}</h1>
        <div className={style.termsAndConditions}>

          {policy.map(el => {
            //console.log(el.childMdx.fields.locale)
            let a = ''
            const l = el.childMdx.fields.locale
            if (l === locale) {
              a = <MDXRenderer>{el.childMdx.body}</MDXRenderer>
            }
            console.log(l)
            console.log(locale)
            console.log(a)
            return (
              <div key={el.id} className={style.termsAndConditions}>
                {a}
              </div>
            )
          })}

        {/* <MDXRenderer>{article.body}</MDXRenderer> */}
        {/* <MDXRenderer>{article}</MDXRenderer> */}
          
          
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


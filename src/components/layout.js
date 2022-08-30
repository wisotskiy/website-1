/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useTranslation } from "react-i18next"
import "./layout.css"
//import Aside from "./aside"
import Footer from "./footer"
import Menu from "./Menu/Menu"
 
const Layout = ({ children }) => {
  const { t } = useTranslation()

  return (
    <>
      <Menu siteTitle={t("app_name") || `Title`} />
      {/* <Aside siteTitle={t("app_name") || `Title`} /> */}
      <div className="content">
        <main>{children}</main>

        <Footer />
      </div>
    </>
  )
}

export default Layout
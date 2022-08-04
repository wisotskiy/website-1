/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import { useTranslation } from "react-i18next"
 import "./layout.css"
 import Aside from "./aside"
 import Footer from "./footer"
 
 const Layout = ({ children, titles }) => {
   const { t } = useTranslation()

   return (
     <>
       <Aside titles={titles} siteTitle={t("app_name") || `Title`} />
       <div className="content">
         <main>{children}</main>
 
         <Footer />
       </div>
     </>
   )
 }
 
 export default Layout
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import { useTranslation } from "react-i18next"
 import "./layout.css"
 import Header from "./header"
 import Footer from "./footer"
 
 const Layout = ({ children }) => {
   const { t } = useTranslation()
 
   return (
     <>
       <Header siteTitle={t("app_name") || `Title`} />
       <div>
         <main>{children}</main>
 
         <Footer />
       </div>
     </>
   )
 }
 
 export default Layout
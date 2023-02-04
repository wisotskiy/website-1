import * as React from "react"
import "./layout.css"
import Footer from "./footer"
import Menu from "./Menu/Menu"
 
const Layout = ({ children }) => {

  return (
    <>
      <Menu />
      <div className="content">
        <main>{children}</main>

        <Footer />
      </div>
    </>
  )
}

export default Layout
import * as React from "react"
import { useTranslation } from "react-i18next"

import Seo from "../components/seo"
import Layout from "../components/layout"

import * as style from "../style/_style.module.scss"
import video from "../video/nevesta_toci.mp4"

const Contacts = () => {
  
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo title={t("contacts")} />
      <video autoPlay loop width="100%" style={{margin: "auto"}}>
        <source src={video} type="video/mp4" />
      </video>
      <div className={style.gap}></div>
      <div className={style.container}>
        <h1 className={style.title}>{t("bundles")}</h1>

        <div className={style.bundlesList}>
          <div className={style.bundle}>
            <h3 className={style.bundleTitle}>{t("bundle1")}</h3>
            <ul>
              <li className={style.bundleItem}>{t("bundle11")}</li>
              <li className={style.bundleItem}>{t("bundle12")}</li>
              <li className={style.bundleItem}>{t("bundle13")}</li>
              <li className={style.bundleItem}>{t("bundle14")}</li>
              <li className={style.bundleItem}>{t("bundle15")}</li>
              <li className={style.bundleItem}>{t("bundle16")}</li>
            </ul>
            <div className={style.price}>{t("bundle1price")}</div>
          </div>
          <div className={style.bundle}>
            <h3 className={style.bundleTitle}>{t("bundle2")}</h3>
            <ul>
              <li className={style.bundleItem}>{t("bundle21")}</li>
              <li className={style.bundleItem}>{t("bundle22")}</li>
              <li className={style.bundleItem}>{t("bundle23")}</li>
              <li className={style.bundleItem}>{t("bundle24")}</li>
              <li className={style.bundleItem}>{t("bundle25")}</li>
              <li className={style.bundleItem}>{t("bundle26")}</li>
              <li className={style.bundleItem}>{t("bundle27")}</li>
              <li className={style.bundleItem}>{t("bundle28")}</li>
            </ul>
            <div className={style.price}>{t("bundle2price")}</div>
          </div>
          <div className={style.bundle}>
            <h3 className={style.bundleTitle}>{t("bundle3")}</h3>
            <ul>
              <li className={style.bundleItem}>{t("bundle11")}</li>
              <li className={style.bundleItem}>{t("bundle12")}</li>
              <li className={style.bundleItem}>{t("bundle13")}</li>
              <li className={style.bundleItem}>{t("bundle14")}</li>
              <li className={style.bundleItem}>{t("bundle15")}</li>
              <li className={style.bundleItem}>{t("bundle16")}</li>
            </ul>
            <div className={style.price}>{t("bundle3price")}</div>
          </div>
        </div>

        

      </div>     
    </Layout>
  )
}

export default Contacts


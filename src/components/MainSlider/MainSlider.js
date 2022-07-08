import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import { LocalizedLink } from "gatsby-theme-i18n"
import * as style from "./_MainSlider.module.scss"

const MainSlider = () => {

    const { t } = useTranslation()

    return (
        <div className={style.mainSlider}>
            <StaticImage 
                src="../../images/mainSlider/slider_1.jpg" 
                alt="slider"
                layout="fullWidth"
                placeholder="blurred"
            />
            <div className={style.heroTitle}>
                <h2>
                    <LocalizedLink to="/">
                        {t("slider_titles_1")}
                    </LocalizedLink>
                </h2>
            </div>

        </div>
    )
}

export default MainSlider

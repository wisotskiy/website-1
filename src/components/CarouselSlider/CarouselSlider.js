import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import { LocalizedLink } from "gatsby-theme-i18n"
import Carousel from 'better-react-carousel'
import * as style from "./_CarouselSlider.module.scss"

const CarouselSlider = () => {

    const { t } = useTranslation()
    const MyDot = ({ isActive }) => (
        <span
            style={{
                display: 'inline-block',
                height: isActive ? '8px' : '5px',
                width: isActive ? '8px' : '5px',
                background: isActive ? 'white' : 'rgb(141 141 141)',
                borderRadius: '50%',
                border: '1px solid grey'
            }}
        ></span>
    )
    
    return (
        <Carousel cols={1} rows={1} dot={MyDot} showDots loop>
            <Carousel.Item>
                <div className={style.mainSlider}>
                    <StaticImage 
                        src="../../images/mainSlider/slider_1.jpg" 
                        alt="slider"
                        layout="fullWidth"
                        placeholder="blurred"
                        style={{display: "contents"}}
                    />
                    <div className={style.heroTitle}>
                        <h2>
                            <LocalizedLink to="/">
                                {t("slider_titles_1")}
                            </LocalizedLink>
                        </h2>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className={style.mainSlider}>
                    <StaticImage 
                        src="../../images/mainSlider/slider_2.jpg" 
                        alt="slider"
                        layout="fullWidth"
                        placeholder="blurred"
                    />
                    <div className={style.heroTitle}>
                        <h2>
                            <LocalizedLink to="/">
                                {t("slider_titles_2")}
                            </LocalizedLink>
                        </h2>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselSlider
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./_MainSlider.module.scss"

const MainSlider = () => {

    return (
        <div className={styles.mainSlider}>
            <StaticImage 
                src="../../images/slider_1.jpg" 
                alt="slider"
                layout="fullWidth"
                placeholder="blurred"
                 />
        </div>
    )
}

export default MainSlider

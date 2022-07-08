import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as ownStyle from "./_ThumbsHorisontal.module.scss"
import * as style from "../../style/_style.module.scss"

const ThumbsHorisontal = ({images}) => {

    return (
        <div className={ownStyle.thumbsCarousel}>
            <div className={style.container}>
                <div className={ownStyle.thumbs}>
                    {images.map(image => {
                        return (
                            <div className={ownStyle.thumbItem}>
                                <GatsbyImage
                                key={image.id}
                                
                                alt="aaa"
                                image={getImage(image)}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>      
        </div>
    )
}

export default ThumbsHorisontal
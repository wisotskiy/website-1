import React, { useState, useEffect } from 'react'
import Carousel from 'better-react-carousel'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as style from "./_Carousel.module.scss"

//import FullSizeImage from "../FullSizeImage/FullSizeImage"

const Gallery = ({images}) => {

  const[isFull, setIsfull] = useState(false)
  const[currentImage, setСurrentImage] = useState(null)

  const styleRegular = {
    aspectRatio: "1/1"
  }

  const a = {
        position: "absolute",
        top: 0,
        bottom: 0,
        aspectRatio: "auto"
      }

  const styleFullSize = {
/*     position: "absolute",
    top: "5vw",
    bottom: "5vw",
    width: "100%",
    height: "100%" */
    aspectRatio: "auto"
  }

  const showFullImage = (image) => {
    console.log('e')
    setIsfull(!isFull)
    setСurrentImage(image)
  }

  return (
  <>
    {!isFull ? <Carousel cols={4} rows={1} gap={10} loop>
        {images.map(image => {
                        return (                       
                          <Carousel.Item key={image.id}>
                              <div onClick={() => showFullImage(image)}>
                                <GatsbyImage                                  
                                  style={styleRegular}
                                  alt="aaa"
                                  image={getImage(image)}
                                />
                            </div>
                          </Carousel.Item>
                          
                        )
                    })}
    </Carousel> :
    <div onClick={() => showFullImage(currentImage)} className={style.fullScreenShadow}>
      <GatsbyImage                                  
        /* style={styleFullSize} */
        className={style.fullScreenImage}
        alt="aaa"
        image={getImage(currentImage)}
      />
    </div>}
  </>)
}

export default Gallery
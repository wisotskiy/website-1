import React, { useState, useEffect } from 'react'
import Carousel from 'better-react-carousel'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

//import FullSizeImage from "../FullSizeImage/FullSizeImage"

const GalleryFull = ({images}) => {

  const[isFull, setIsfull] = useState(false)

  const showFullImage = (e) => {
    console.log(e)
    setIsfull(true)
  }

  return (
    <Carousel cols={1} rows={1} gap={0} loop>
        {images.map(image => {
                        return (                       
                          <Carousel.Item key={image.id}>
                              <div onClick={showFullImage}>
                                <GatsbyImage                                  
                                  style={{"width": "100%"}}
                                  alt="aaa"
                                  image={getImage(image)}
                                />
                            </div>
                          </Carousel.Item>
                          
                        )
                    })}
    </Carousel>
  )
}

export default GalleryFull
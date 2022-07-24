import React from 'react'
import Carousel from '../../../better-react-carousel/src/app'

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Gallery = ({images}) => {
  return (
    <Carousel cols={4} rows={1} gap={10} loop>
        {images.map(image => {
                        return (
                            <Carousel.Item key={image.id}>
                            <GatsbyImage
                                
                                style={{"aspectRatio": "1/1"}}
                                alt="aaa"
                                image={getImage(image)}
                                />
                          </Carousel.Item>
                        )
                    })}
    </Carousel>
  )
}

export default Gallery
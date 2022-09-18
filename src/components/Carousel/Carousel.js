import React, { useState, useEffect } from 'react'
import Carousel from 'better-react-carousel'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as style from "./_Carousel.module.scss"
//import * as style2 from "../../_style.module.scss"
import left from "../../images/left.svg"
import right from "../../images/right.svg"

const Gallery = ({images}) => {

  const[isFull, setIsfull] = useState(false)
  const[currentImage, setСurrentImage] = useState(null)
  const[currentImageId, setСurrentImageId] = useState(null)

  const styleRegular = {
    aspectRatio: "1/1"
  }

  const responsiveLayout = [
    {
      breakpoint: 800,
      cols: 3,
      rows: 1,
      gap: 10,
      loop: true
    },
    {
      breakpoint: 600,
      cols: 2,
      rows: 1,
      gap: 10,
      loop: true
    },
    {
      breakpoint: 400,
      cols: 2,
      rows: 1,
      gap: 10,
      loop: true
    },

  ]

  const showFullImage = (image) => {
    setIsfull(!isFull)
    setСurrentImage(image)
    setСurrentImageId(image.id)
  }

  const swipeLeft = () => {
    let curIdx
    images.forEach((image, i) => {
      if(image.id === currentImage.id) curIdx = i
    })
    setСurrentImage(images[curIdx - 1])

    curIdx === 0 && setIsfull(false)
  }

  const swipeRight = () => {
    let curIdx
    images.forEach((image, i) => {
      if(image.id === currentImage.id) curIdx = i
    })
    console.log(curIdx)
    setСurrentImage(images[curIdx + 1])
    curIdx >= images.length - 1 && setIsfull(false)
  }

/*   useEffect((image) => {
    setСurrentImage(image)
  }, [currentImage]) */

  return (
  <>
    <Carousel 
      cols={4} rows={1} gap={10} loop responsiveLayout={responsiveLayout} mobileBreakpoint={320}>
      {images.map(image => {
          return (                       
            <Carousel.Item key={image.id}>
              <div className={style.carouselItemWrapper} onClick={() => showFullImage(image)}>
                <GatsbyImage                                  
                  style={styleRegular}
                  alt="aaa"
                  image={getImage(image)}
                />
              </div>
            </Carousel.Item>                   
          )
      })}
    </Carousel>

   
    
{/*     <div onClick={() => showFullImage(currentImage)} 
      className={style.fullScreenShadow} 
      style={isFull ? {display: "flex"} : {display: "none"}}>
        <Carousel cols={1} rows={1} gap={0} loop>
        <Carousel.Item>
        <GatsbyImage
          className={style.fullScreenImage}
          alt="aaa"
          image={getImage(currentImage)}
        /></Carousel.Item>
        </Carousel>
    </div> */}
    

    <div
      className={style.fullScreenShadow} 
      style={isFull ? {display: "flex"} : {display: "none"}}>
        <div className={style.wrapper}>
          
          <img className={style.left} src={left} onClick={swipeLeft}></img>
            <div className={style.fullScreenImage}>
              <GatsbyImage
                
                id={currentImageId}
                alt="aaa"
                image={getImage(currentImage)}             
              />
              <div className={style.fullSizeClose} onClick={() => showFullImage(currentImage)}>&#10005;</div>
            </div>
          <img className={style.right} src={right} onClick={swipeRight}></img>
        </div>
    </div>
  </>)
}

export default Gallery
import React, { useState, useEffect } from 'react'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import Seo from "../components/seo"
import Layout from "../components/layout"

import * as style from "../style/_style.module.scss"
import GalleryItem from '../components/GalleryItem/GalleryItem'


const IndexPage = ({ data }) => {
  
  const { t } = useTranslation()
  const images = data.allFile.nodes

    let counter = 0, width = ""
  
    const [isFull, setIsfull] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [currentImage, setCurrentImage] = useState({})
    const [index, setIndex] = useState(0)
    const [deviceWidth, setDeviceWidth] = useState('')
  
    const styleShow = {
      display: "block"
    }
  
    const styleHidden = {
      display: "none"
    }
  
    const showFullImage = (image, index) => {
      setIsfull(true)
      setCurrentImage(image)
      setIndex(index)
    }
  
    const toggleIsFullImage = (bool) => {
      setIsfull(bool)
    }
  
    useEffect(() => {
      
      const showReturnButton = () => {
        window.scrollY > 200 && setIsShow(true)
        window.scrollY <= 200 && setIsShow(false)
      };
  
      window.addEventListener('scroll', showReturnButton);
  
      return () => {
        window.removeEventListener('scroll', showReturnButton);
      };
    }, []);
  
    useEffect(() => {
  
      setDeviceWidth(window.innerWidth)
      window.addEventListener('resize', () => setDeviceWidth(window.innerWidth))
      window.removeEventListener('resize', () => setDeviceWidth(window.innerWidth))
      return () => { 
        setDeviceWidth('')}
    }, [])

  return (
    <Layout>
      <Seo title={t("seo_title_photo_studio")} description={t("seo_description_photo_studio")} />
      <div className={style.container}>
        <h1 className={style.title}>{t("photo_studio")}</h1>
        <p className={style.aboutText}>{t("photo_studio_text")}</p>
      </div>

      <div className={style.container}>
        <div className={`${style.container} ${style.photosGallery}`}>
          {images.map((image, i) => {

            if (counter === 0) {

              if (image.childImageSharp.gatsbyImageData.width >= image.childImageSharp.gatsbyImageData.height &&
                images[i + 1]?.childImageSharp.gatsbyImageData.width >= images[i + 1]?.childImageSharp.gatsbyImageData.height) {
                width = `100%`
                counter = 0
              } else if (image.childImageSharp.gatsbyImageData.width >= image.childImageSharp.gatsbyImageData.height &&
                images[i + 1]?.childImageSharp.gatsbyImageData.width < images[i + 1]?.childImageSharp.gatsbyImageData.height) {
                width = `100%`
                counter = 1
              } else if (image.childImageSharp.gatsbyImageData.width < image.childImageSharp.gatsbyImageData.height &&
                images[i + 1]?.childImageSharp.gatsbyImageData.width < images[i + 1]?.childImageSharp.gatsbyImageData.height) {
                width = `calc(50% - 10px)`
                counter = 2
              } else if (image.childImageSharp.gatsbyImageData.width < image.childImageSharp.gatsbyImageData.height &&
                images[i + 1]?.childImageSharp.gatsbyImageData.width >= images[i + 1]?.childImageSharp.gatsbyImageData.height) {
                width = `calc(33.333333% - 10px)`
                counter = 2
              } else if (image.childImageSharp.gatsbyImageData.width >= image.childImageSharp.gatsbyImageData.height &&
                !images[i + 1]) {
                width = `100%`
                counter = 0
              }

            } else if (counter === 1) {

              if (image.childImageSharp.gatsbyImageData.width < image.childImageSharp.gatsbyImageData.height &&
                images[i + 1]?.childImageSharp.gatsbyImageData.width < images[i + 1]?.childImageSharp.gatsbyImageData.height) {
                width = `calc(50% - 10px)`
                counter = 2
              } else if (image.childImageSharp.gatsbyImageData.width < image.childImageSharp.gatsbyImageData.height &&
                images[i + 1]?.childImageSharp.gatsbyImageData.width >= images[i + 1]?.childImageSharp.gatsbyImageData.height) {
                width = `calc(33.333333% - 10px)`
                counter = 2
              } else if (image.childImageSharp.gatsbyImageData.width < image.childImageSharp.gatsbyImageData.height &&
                !images[i + 1]) {
                width = `100%`
                counter = 0
              }
            } else if (counter === 2) {

              if (images[i - 1]?.childImageSharp.gatsbyImageData.width < images[i - 1]?.childImageSharp.gatsbyImageData.height &&
                image.childImageSharp.gatsbyImageData.width < image.childImageSharp.gatsbyImageData.height &&
                images[i + 1]?.childImageSharp.gatsbyImageData.width < images[i + 1]?.childImageSharp.gatsbyImageData.height) {
                width = `calc(50% - 10px)`
                counter = 1
              } else if (images[i - 1]?.childImageSharp.gatsbyImageData.width < images[i - 1]?.childImageSharp.gatsbyImageData.height &&
                image.childImageSharp.gatsbyImageData.width < image.childImageSharp.gatsbyImageData.height &&
                images[i + 1]?.childImageSharp.gatsbyImageData.width >= images[i + 1]?.childImageSharp.gatsbyImageData.height) {
                width = `calc(50% - 10px)`
                counter = 0
              } else if (images[i - 1]?.childImageSharp.gatsbyImageData.width < images[i - 1]?.childImageSharp.gatsbyImageData.height &&
                image.childImageSharp.gatsbyImageData.width >= image.childImageSharp.gatsbyImageData.height &&
                images[i + 1]?.childImageSharp.gatsbyImageData.width >= images[i + 1]?.childImageSharp.gatsbyImageData.height) {
                width = `calc(66.666667% - 10px)`
                counter = 0
              } else if (images[i - 1]?.childImageSharp.gatsbyImageData.width < images[i - 1]?.childImageSharp.gatsbyImageData.height &&
                image.childImageSharp.gatsbyImageData.width >= image.childImageSharp.gatsbyImageData.height &&
                images[i + 1]?.childImageSharp.gatsbyImageData.width < images[i + 1]?.childImageSharp.gatsbyImageData.height) {
                width = `calc(66.666667% - 10px)`
                counter = 1
              } else if (images[i - 1]?.childImageSharp.gatsbyImageData.width < images[i - 1]?.childImageSharp.gatsbyImageData.height &&
                image.childImageSharp.gatsbyImageData.width < image.childImageSharp.gatsbyImageData.height &&
                !images[i + 1]) {
                width = `calc(50% - 10px)`
                counter = 0
              } else if (images[i - 1]?.childImageSharp.gatsbyImageData.width < images[i - 1]?.childImageSharp.gatsbyImageData.height &&
                image.childImageSharp.gatsbyImageData.width >= image.childImageSharp.gatsbyImageData.height &&
                !images[i + 1]) {
                width = `calc(66.666667% - 10px)`
                counter = 0
              }
            }

            return (
              <>
                {deviceWidth > 1024 ?
                  <div className={style.photo} style={{ width: width }} aria-hidden onClick={() => showFullImage(image, i)}>
                    <GatsbyImage
                      key={image.id}
                      alt="photo studio"
                      image={getImage(image)}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div> :
                  <div className={style.photo} style={{ width: width }}>
                    <GatsbyImage
                      key={image.id}
                      alt="photo studio"
                      image={getImage(image)}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>}
              </>
            )
          })

          }
        </div>
      </div>

      <div className={`${style.container} ${style.photosGallery}`}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.968633663189!2d13.834376175795498!3d50.646273673245766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47098ef50f34beb9%3A0xe4474aa719a4ec3!2sJankovcova%201456%2F41%2C%20415%2001%20Teplice%201!5e0!3m2!1sen!2scz!4v1746638438918!5m2!1sen!2scz" title="myFrame" style={{ border: 0, height: "600px", width: "100%", margin: "5px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      {isFull && <GalleryItem 
                  image={currentImage} 
                  images={images} 
                  index={index} 
                  toggleIsFullImage={toggleIsFullImage} />}

    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query StudioPhoto {
  allFile(filter: {sourceInstanceName: {eq: "studio"}}) {
    nodes {
      childImageSharp {
        gatsbyImageData
        id
      }
      relativeDirectory
    }
  }
}
`
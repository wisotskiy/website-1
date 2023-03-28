import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <iframe
      src={videoSrcURL}
      referrerPolicy="no-referrer-when-downgrade"
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      width="100%"
      style={{"aspectRatio": "16/9", "padding": "0 20px"}}
    />
  </div>
)

export default Video

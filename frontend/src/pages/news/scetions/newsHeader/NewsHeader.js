import React from 'react'
import "./newsHeader.scss"

function NewsHeader() {
  return (
    <section className="news-header">
       <section className="Aboutus-section">
      <div className="background-slider">
        <video autoPlay loop muted>
          <source
            src="https://cdn.pixabay.com/vimeo/816637349/clouds-158384.mp4?width=1280&hash=5f65ba8e3a2accc7bb919fd6662b92ae6169003e"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="section-content">
        <h1>news</h1>
      </div>
    </section>
    </section>
  )
}

export default NewsHeader

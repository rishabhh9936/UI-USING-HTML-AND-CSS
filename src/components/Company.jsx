import React from 'react'
import companyIMG from "../images/usgs-hoS3dzgpHzw-unsplash.jpg";

const Company = () => {
  return (
    <div className="content">
      <section className="main_section">
        <div className="content_left">
          <p className="section_label">Very proud to introduce</p>
          <h1 className="section_tittle">Seamless Learning For Brighter Futures</h1>
          <p className="section_description">
            our innovative platform offer an effortless and seamless approach to
            learning,empowering student of all ages to acheive brighter
            futures.join on us a transformative journey to simplyfy education
            and unlock full potential
          </p>
          <div className="button_group">
            <a href="#start" className="start_button">Start now</a>
            <a href="#tour" className="tour_button">Take tour</a>
          </div>
        </div>
        <div className="content_right">
          <div className="image_containor">
            <img
              src={companyIMG}
              alt="section_image"
              className="section_image"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Company
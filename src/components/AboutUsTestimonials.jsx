import React from 'react'
import Img1 from '../assets/images/about-test/testimonial-1.png'
import Img2 from '../assets/images/about-test/testimonial-2.png'
import Slider from "react-slick";

const AboutUsTestimonials = () => {
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };

  return (
    <section className="about-us__test test">
      <div className="test__container _container">
         <div className="row">
            <div className="col-md-12 col-md-offset-1">
            <Slider {...settings}>
            <div className="test__item">
                  <img src={Img1} alt="" />
                  <h3>Etibar</h3>
                  <span>Direktor</span>
                  <p>Software Engineer. 10 il iş təcrübəsi vardır.</p>
               </div>
               <div className="test__item">
                  <img src={Img2} alt="" />
                  <h3>Məlahət</h3>
                  <span>Müəllim</span>
                  <p>Web Deisgner.6 ildir ki bu sahədədir.</p>
               </div>
            </Slider>
               
            </div>
         </div>
      </div>
    </section>
  )
}

export default AboutUsTestimonials
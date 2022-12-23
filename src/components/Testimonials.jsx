import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import Line from '../line-dec.png'
import Teacher1 from '../assets/images/testimonials/teacher-1.jpg'
import Teacher2 from '../assets/images/testimonials/teacher-2.jpeg'
import News1 from '../assets/images/testimonials/news-1.jpg'
import News2 from '../assets/images/testimonials/news-2.jpg'

const Testimonials = () => {
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    };
  return (
    <section className="page__testimonials">
      <div className="testimonials__container _container">
         <div className="row">
            <div className="col-md-6">
               <div className="testimonials__students">
                  <h2>Tələbərimiz nə deyirlər</h2>
                  <img src={Line} alt="" />
               </div>
               <div className="col-md-12">
                  <Slider {...settings}>
                  <div className="testimonials__wrapper">
                     <div className="testimonials__item">
                     <FontAwesomeIcon icon={faQuoteRight} size="xl" className='testimonials__icon'/>
                     <p>IT Brains Academy</p>
                     <img src={Teacher1} alt="" />
                     <h3>Cəlal Babayev</h3>
                     <span>Web Designer</span>
                     </div>
                  </div>
                  <div className="testimonials__wrapper">
                     <div className="testimonials__item">
                     <FontAwesomeIcon icon={faQuoteRight} size="xl" className='testimonials__icon'/>
                     <p>IT Brains Academy.</p>
                     <img src={Teacher2} alt="" />
                     <h3>Xəyalə Babayeva</h3>
                     <span>Uİ_UX Designer</span>
                     </div>
                  </div>
                  </Slider>
                  <div className="testimonials__controls">
                        <div className="testimonials__btn">
                        <div className="prev__btn">
                        <FontAwesomeIcon icon={faArrowLeft} size="xs"/>
                        </div>
                        <div className="next__btn">
                        <FontAwesomeIcon icon={faArrowRight} size="xs"/>
                        </div>
                        </div>
                     </div>
               </div>
            </div>
            <div className="col-md-6">
               <div className="testimonials__news news">
                  <h2>Kurs xəbərləri</h2>
                  <img src={Line} alt="" />
               </div>
               <div className="row">
                  <div className="col-md-12">
                     <div className="news__item">
                        <a href="#">
                           <img src={News1} alt="" />
                        </a>
                        <ul>
                           <li>7 Okt 2021</li>
                           <li> Admin</li>
                           <li>5 Şərh</li>
                        </ul>
                        <a href="#"><h3>Kurs haqqında</h3></a>
                        <p>IT Brains Academy 2022</p>
                     </div>
                     <div className="news__item">
                        <a href="#">
                           <img src={News2} alt="" />
                        </a>
                        <ul>
                           <li>15 Noy 2021</li>
                           <li>CƏmalə Əliyeva</li>
                           <li>11 Şərh</li>
                        </ul>
                        <a href="#"><h3>Tələbələr</h3></a>
                        <p>IT Brains Academy</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default Testimonials
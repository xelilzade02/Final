import React from 'react'
import Img1 from '../assets/images/about-us/about-us-w1.jpg'
import Img2 from '../assets/images/about-us/about-us-w2.jpg'
import Img3 from '../assets/images/about-us/about-us-w3.jpg'
import Line from '../line-dec.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faGlobe, faClock, faBook, faPencil, faCoffee } from '@fortawesome/free-solid-svg-icons'

const AboutUsWelcome = () => {
  return (
    <section className="about-us__content">
      <div className="about-us__container _container">
         <div className="row">
            <div className="col-md-5">
               <div className="about-us__images">
                  <div className="row">
                     <div className="col-md-12">
                       <a href=''><img src={Img1} /></a>
                     </div>
                     <div className="col-md-6 col-xs-6">
                        <a href=''><img src={Img2} /></a>
                     </div>
                     <div className="col-md-6 col-xs-6">
                        <a href=''><img src={Img3} /></a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-7">
               <div className="about-us__greeting greeting">
                  <div className="greeting__header">
                     <h2>IT Brains Academy-ə xoş gəlmisiniz.</h2>
                     <img src={Line} />
                     <span>Akademiyada olanlar:</span>
                  </div>
                  <div className="row">
                     <div className="col-md-6">
                        <div className="greeting__item">
                           <span><FontAwesomeIcon className='greeting__icon' icon={faGraduationCap} size="x"/></span>
                           <h3>Mövcud olanlar</h3>
                           <p>Labaratoriya otağı,Sinif ottaqları,Rəsm otağı</p>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="greeting__item">
                          <span><FontAwesomeIcon className='greeting__icon' icon={faGlobe} size="x"/></span>
                           <h3>Qlobal maraq</h3>
                           <p>Daha çox məlumat</p>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="greeting__item">
                           <span><FontAwesomeIcon className='greeting__icon' icon={faClock} size="x"/></span>
                           <h3> Kurs müddətti</h3>
                           <p>4 ay~Front-end</p>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="greeting__item">
                           <span><FontAwesomeIcon className='greeting__icon' icon={faBook} size="x"/></span>
                           <h3>Kitabaxana</h3>
                           <p>Hər bir kitab vardır. Və tələbələrimizə ödənişsizdir.</p>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="greeting__item">
                           <span><FontAwesomeIcon className='greeting__icon' icon={faPencil} size="x"/></span>
                           <h3>Rəssamlıq dərsləri</h3>
                           <p>Həftədə 3 dəfə olmaqla 3 ay ərzində keçirilir.</p>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="greeting__item">
                           <span><FontAwesomeIcon className='greeting__icon' icon={faCoffee} size="x"/></span>
                           <h3>Kafe</h3>
                           <p>Kofe,çay və şirniyyatlaımız tələbələrimizə ödənişsizdir.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default AboutUsWelcome
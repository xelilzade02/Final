import React from 'react'
import Line from '../line-dec.png'
import Teacher1 from '../assets/images/teachers/teacher-1.jpg'
import Teacher2 from '../assets/images/teachers/teacher-2.jpg'
import Teacher3 from '../assets/images/teachers/teacher-3.jpg'
import Teacher4 from '../assets/images/teachers/teacher-4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram, faTwitter, faTiktok} from '@fortawesome/free-brands-svg-icons'

const Teachers = () => {
  return (
    <section className="page__teachers">
      <div className="teachers__container _container">
         <div className="row">
         <div className="teachers__header">
            <h3>Müəllimlərimiz</h3>
            <img src={Line} alt="" />
            <p>IT Brains Academy</p>
         </div>
         </div>
         <div className="row">
            <div className="col-md-3 col-sm-6">
               <div className="teachers__item">
                  <div className="teachers__top">
                     <a href="">
                        <img src={Teacher1} alt="" />
                     </a>
                     <div className="teachers__hover">
                        <ul>
                           <li><a href="#"><FontAwesomeIcon className='teacher__icon' icon={faFacebookF} size="x"/></a></li>
                           <li><a href="#"><FontAwesomeIcon className='teacher__icon' icon={faInstagram} size="x"/></a></li>
                           <li><a href="#"><FontAwesomeIcon className='teacher__icon' icon={faTwitter} size="x"/></a></li>
                           <li><a href=""><FontAwesomeIcon className='teacher__icon' icon={faTiktok} size="x"/></a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="teachers__down">
                     <a href="">
                        <h3>Araz</h3>
                     </a>
                     <span>Fizika Müəllimi</span>
                     <p>IT Brains Academy</p>
                  </div>
               </div>
            </div>
            <div className="col-md-3 col-sm-6">
            <div className="teachers__item">
                  <div className="teachers__top">
                     <a href="">
                        <img src={Teacher2} alt="" />
                     </a>
                     <div className="teachers__hover">
                        <ul>
                           <li><a href="#"><FontAwesomeIcon className='teacher__icon' icon={faFacebookF} size="x"/></a></li>
                           <li><a href="#"><FontAwesomeIcon className='teacher__icon' icon={faInstagram} size="x"/></a></li>
                           <li><a href="#"><FontAwesomeIcon className='teacher__icon' icon={faTwitter} size="x"/></a></li>
                           <li><a href=""><FontAwesomeIcon className='teacher__icon' icon={faTiktok} size="x"/></a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="teachers__down">
                     <a href="">
                        <h3>Cavid</h3>
                     </a>
                     <span>İnformatika Müəllimi</span>
                     <p>IT Brains Academy</p>
                  </div>
               </div>
            </div>
            <div className="col-md-3 col-sm-6">
            <div className="teachers__item">
                  <div className="teachers__top">
                     <a href="">
                        <img src={Teacher3} alt="" />
                     </a>
                     <div className="teachers__hover">
                        <ul>
                           <li><a href="#"><FontAwesomeIcon className='teacher__icon' icon={faFacebookF} size="x"/></a></li>
                           <li><a href="#"><FontAwesomeIcon className='teacher__icon' icon={faInstagram} size="x"/></a></li>
                           <li><a href="#"><FontAwesomeIcon className='teacher__icon' icon={faTwitter} size="x"/></a></li>
                           <li><a href=""><FontAwesomeIcon className='teacher__icon' icon={faTiktok} size="x"/></a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="teachers__down">
                     <a href="">
                        <h3>Mehdi</h3>
                     </a>
                     <span>Mühasibatlıq</span>
                     <p>IT Brains Academy</p>
                  </div>
               </div>
            </div>
            <div className="col-md-3 col-sm-6">
            <div className="teachers__item">
                  <div className="teachers__top">
                     <a href="">
                        <img src={Teacher4} alt="" />
                     </a>
                     <div className="teachers__hover">
                        <ul>
                        <  li><a href="#"><FontAwesomeIcon className='teacher__icon' icon={faFacebookF} size="x"/></a></li>
                           <li><a href="#"><FontAwesomeIcon className='teacher__icon' icon={faInstagram} size="x"/></a></li>
                           <li><a href="#"><FontAwesomeIcon className='teacher__icon' icon={faTwitter} size="x"/></a></li>
                           <li><a href=""><FontAwesomeIcon className='teacher__icon' icon={faTiktok} size="x"/></a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="teachers__down">
                     <a href="">
                        <h3>Əli</h3>
                     </a>
                     <span>Android Developer</span>
                     <p>IT Brains Academy</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default Teachers
import React from 'react'
import Bground from '../assets/images/about-us/about-heading-bg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const AboutusHeading = () => {
  return (
   <div className='page__about-us'>
   <div style={{ 
       backgroundImage: `url(${Bground})`,
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover', 
       padding: '100px 0px 0px 0px'
     }} className='about-us__heading'>
     <div className='about-us__container _container'>
       <div className='row'>
         <div className='col-md-12'>
           <h1 className='about-us__title'>Haqqımızda</h1>
           <span className='about-us__text'>Əlavə məlumat üçün aşağı sürüşdürün.</span>
             <ul className='about-us__col'>
               <li className='about-us__item'><a className='about-us__link _orange' href='#'>Əsas</a></li>
               <li className='about-us__item'><FontAwesomeIcon className='about-us__icon' icon={faAngleRight} size="xs"/></li>
               <li className='about-us__item'><a className='about-us__link' href='#'>Səhifələr</a></li>
               <li className='about-us__item'><FontAwesomeIcon className='about-us__icon' icon={faAngleRight} size="xs"/></li>
               <li className='about-us__item'><a className='about-us__link' href='#'>Haqqımızda</a></li>
             </ul>
         </div>
       </div>
     </div>
   </div>
 </div>
  )
}

export default AboutusHeading
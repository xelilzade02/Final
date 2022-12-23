import React from 'react'
import Bground from '../assets/images/classic-news/news-heading-bg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const ClassicNewsHeading = () => {
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
           <h1 className='about-us__title'>Tədbirlər</h1>
           <span className='about-us__text'>Məzun günlərimizi buradan izləyə bilərsiniz.</span>
             <ul className='about-us__col'>
               <li className='about-us__item'><a className='about-us__link _orange' href='#'>Əsas</a></li>
               <li className='about-us__item'><FontAwesomeIcon className='about-us__icon' icon={faAngleRight} size="xs"/></li>
               <li className='about-us__item'><a className='about-us__link' href='#'>Səhifə</a></li>
               <li className='about-us__item'><FontAwesomeIcon className='about-us__icon' icon={faAngleRight} size="xs"/></li>
               <li className='about-us__item'><a className='about-us__link' href='#'>Yeniliklər</a></li>
             </ul>
         </div>
       </div>
     </div>
   </div>
 </div>
  )
}

export default ClassicNewsHeading
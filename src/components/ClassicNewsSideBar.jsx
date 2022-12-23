import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import Rec1 from '../assets/images/classic-news/recent1.jpg'
import Rec2 from '../assets/images/classic-news/recent2.jpg'
import Rec3 from '../assets/images/classic-news/recent3.jpg'
import Inst1 from '../assets/images/classic-news/instagram1.jpg'
import Inst2 from '../assets/images/classic-news/instagram2.jpg'
import Inst3 from '../assets/images/classic-news/instagram3.jpg'
import Inst4 from '../assets/images/classic-news/instagram4.jpg'
import Inst5 from '../assets/images/classic-news/instagram5.jpg'
import Inst6 from '../assets/images/classic-news/instagram6.jpg'

const ClassicNewsSideBar = () => {
  return (
    <div className="col-md-4">
      <div className="classic-news__sidebar">
         <div className="classic-news__search">
            <input className='search-icon' type="text" placeholder='Axtarış' />
         </div>
         <div className="classic-news__categories categories">
            <div className="categories__heading">
               <h4>Kateqoriyalar</h4>
            </div>
            <ul>
               <li><a href='#'><FontAwesomeIcon className='classic-news__icon' icon={faAngleRight} size="xs"/>Dizayn</a></li>
               <li><a href='#'><FontAwesomeIcon className='classic-news__icon' icon={faAngleRight} size="xs"/>Beynəlxalq</a></li>
               <li><a href='#'><FontAwesomeIcon className='classic-news__icon' icon={faAngleRight} size="xs"/>Öyrənmək</a></li>
               <li><a href='#'><FontAwesomeIcon className='classic-news__icon' icon={faAngleRight} size="xs"/>Oxumaq</a></li>
               <li><a href='#'><FontAwesomeIcon className='classic-news__icon' icon={faAngleRight} size="xs"/>Təhsil</a></li>
               <li><a href='#'><FontAwesomeIcon className='classic-news__icon' icon={faAngleRight} size="xs"/>Maliyyə</a></li>
            </ul>
         </div>
         <div className="classic-news__recent recent">
            <div className="recent__heading">
               <h4>Son Yeniliklər</h4>
            </div>
            <ul>
               <li>
                  <a href='#'><img src={Rec1} alt="" /></a>
                  <a href='#'><h5>Sponsor: Azərbaycan Dövlət Təhsil Nazirliyi</h5></a>
                  <span>7 İyun 2022</span>
               </li>
               <li>
                  <a href='#'><img src={Rec2} alt="" /></a>
                  <a href='#'><h5>Ən son keçirilən məzun günü</h5></a>
                  <span>12 İyun 2022</span>
               </li>
               <li>
                  <a href='#'><img src={Rec3} alt="" /></a>
                  <a href='#'><h5>Universitetlə əlaqələr-BEU</h5></a>
                  <span>18 İyun 2022</span>
               </li>
            </ul>
         </div>
         <div className="classic-news__tag tag">
           <div className="tag__heading">
            <h4>Təqlər</h4>
           </div>
           <ul>
            <li><a href="#">Fotoqraf</a></li>
            <li><a href="#">Dizayner</a></li>
            <li><a href="#">Kurs</a></li>
            <li><a href="#">Təhsil</a></li>
            <li><a href="#">Kollec</a></li>
            <li><a href="#">Müəllimlər</a></li>
            <li><a href="#">Oxucu</a></li>
            <li><a href="#">Ekskursiya</a></li>
            <li><a href="#">Dərslər</a></li>
            <li><a href="#">Web Development</a></li>
           </ul>
         </div>
         <div className="classic-news__tweets tweets">
            <div className="tweets__heading">
               <h4>Hal-hazırda</h4>
            </div>
            <ul>
               <li>
                  <FontAwesomeIcon className='tweets__icon' icon={faTwitter} size="x"/>
                  <p>IT sahəsində yeni biliklər əldə edə və biliklərinizi artıra bilərsiniz.</p>
                  <a href="#"></a>
                  <span>21 dəq. əvvəl </span>
               </li>
               <li>
                  <FontAwesomeIcon className='tweets__icon' icon={faTwitter} size="x"/>
                  <p>IT sahəsində yeni biliklər əldə edə və biliklərinizi artıra bilərsiniz.</p>
                  <a href="#"></a>
                  <span>21 dəq. əvvəl</span>
               </li>
            </ul>
         </div>
         <div className="classic-news__instagram instagram">
            <div className="instagram__heading">
               <h4>Instagram</h4>
            </div>
            <div className="instagram__items">
               <div className="instagram__item">
                  <a href="#"><img src={Inst1} alt="" /></a>
               </div>
               <div className="instagram__item">
                  <a href="#"><img src={Inst2} alt="" /></a>
               </div>
               <div className="instagram__item">
                  <a href="#"><img src={Inst3} alt="" /></a>
               </div>
               <div className="instagram__item">
                  <a href="#"><img src={Inst4} alt="" /></a>
               </div>
               <div className="instagram__item">
                  <a href="#"><img src={Inst5} alt="" /></a>
               </div>
               <div className="instagram__item">
                  <a href="#"><img src={Inst6} alt="" /></a>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default ClassicNewsSideBar
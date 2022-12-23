import React,{useEffect}from 'react'
import Line from '../line-dec.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faEarthAsia, faClock, faBook } from '@fortawesome/free-solid-svg-icons'

const Welcome = () => {

  return (
   
    <section className='page__welcome welcome'>
      <div className="welcome__container _container">
         <div className="row">
            <div className="col-md-8">
               <div className="welcome__heading">
                  <h1 className='welcome__title'>IT Brains Academy-na xoş gəlmisiniz.</h1>
                  <span className='welcome__subtitle'>IT Brains Academy</span>
                  <img src={Line} alt="line decor" />
                  <p className='welcome__text'>Məzunlarımızın sayı 1il ərzində 800-dən çoxdur. <br />
                  Hal-hazırda ttələbələrimiz isə 956-dır.</p>
               </div>
               <div className="row">
                  <div className="col-md-6 col-sm-6">
                     <div className="welcome__item">
                        <div className="welcome__icon"><FontAwesomeIcon icon={faGraduationCap} size="x"/></div>
                        <h3>Bitirənlər</h3>
                        <div className="line"></div>
                        <p>Məzunlarımız</p>
                     </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                     <div className="welcome__item">
                        <div className="welcome__icon"><FontAwesomeIcon icon={faEarthAsia} size="x"/></div>
                        <h3>Qlobal maraqlar</h3>
                        <div className="line"></div>
                        <p>Sponsorlar</p>
                     </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                     <div className="welcome__item">
                        <div className="welcome__icon"><FontAwesomeIcon icon={faClock} size="x"/></div>
                        <h3>Zamanlama</h3>
                        <div className="line"></div>
                        <p>4-7 ay</p>
                     </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                     <div className="welcome__item">
                        <div className="welcome__icon"><FontAwesomeIcon icon={faBook} size="x"/></div>
                        <h3>Kitablar</h3>
                        <div className="line"></div>
                        <p>Kitabxana</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-4">
               <div className="request__information">
                  <div className="widget__heading">
                     <h3>Tələb edilən məlumat</h3>
                  </div>
                  <div className="search__form">
                     <input type="text" placeholder='AD,SOYAD' />
                     <input type="text" placeholder='E-mail Ünvan' />
                     <div className="select">
                        <select name="" id="">
                           
                           <option value="">Yaxınlıqdakılar</option>
                           <option value="">Yüksək səviyyəli siniflər</option>
                           <option value="">Qısa zaman</option>
                           <option value="">Uzun vaxt</option>
                        </select>
                     </div>
                     <div className="select">
                        <select name="" id="">
                           <option value="-1">Proqramlar</option>
                           <option value="">WProses</option>
                           <option value="">Arxiv</option>
                           <option value="">Sosial</option>
                           <option value="">Mənfəət</option>
                        </select>
                     </div>
                     <div className="request__btn">
                        <a href="">Sorğu Göndər</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default Welcome
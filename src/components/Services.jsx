import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAreaChart, faBriefcase, faCompass,faComments } from '@fortawesome/free-solid-svg-icons'
import Line from '../line-dec.png'

const Services = () => {
  return (
    <div className="page__services">
      <div className="services__container _container">
         <div className="row">
            <div className="col-md-12">
               <div className="services__header">
                  <h2>Kitabları buradan oxuya</h2>
                  <img src={Line} alt="" />
                  <p>IT sahəsində yeni biliklər əldə edə və biliklərinizi artıra bilərsiniz.</p>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-md-3 col-sm-6">
               <div className="services__item">
               <FontAwesomeIcon icon={faAreaChart} size="xl"/>
               <h4>Struktur <br /> giriş ttələbləri</h4>
               </div>
            </div>
            <div className="col-md-3 col-sm-6">
               <div className="services__item">
               <FontAwesomeIcon icon={faBriefcase} size="xl"/>
               <h4>Təhsil <br /> qrafik interyer</h4>
               </div>
            </div>
            <div className="col-md-3 col-sm-6">
               <div className="services__item">
               <FontAwesomeIcon icon={faCompass} size="xl"/>
               <h4>İmtahanların <br />  hazırlanması</h4>
               </div>
            </div>
            <div className="col-md-3 col-sm-6">
               <div className="services__item">
               <FontAwesomeIcon icon={faComments} size="xl"/>
               <h4>Müəllimin <br /> qrupla danışması</h4>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-md-12">
               <div className="services__btn">
                  <a href="#">Kitablara doğru</a>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Services
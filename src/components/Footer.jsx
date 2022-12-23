import React from 'react'
import Logo from '../logo.png'
import Icon from '../email-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container _container">
         <div className="row">
            <div className="col-md-3">
               <div className="logo footer__header">
                  <img src={Logo} alt="" />
                  <div className="footer__line"></div>
                  <p>LOGO altindaki soz.</p>
                  <div className="footer__text-btn"><a href="">Daha çox <FontAwesomeIcon icon={faArrowRight} size="x"  className="ftext__btn"/></a></div>
               </div>
            </div>
            <div className="col-md-3">
               <div className="footer__header">
                  <h3>Seçilmiş Linklər</h3>
                  <div className="footer__line"></div>
                  <ul>
                     
                     <li><a href="#">Məzuniyyət</a></li>
                     <li><a href="#">Giriş</a></li>
                     <li><a href="#">Beynəlxalq</a></li>
                   
                  </ul>
                  <ul className='footer__list'>
                 
                     <li><a href="#">Kurslar</a></li>
                     <li><a href="#">Haqqımızda</a></li>
                     <li><a href="#">Tez-tez verilən suallar</a></li>
                  </ul>
               </div>
            </div>
            <div className="col-md-3">
               <div className="footer__header">
                  <h3>Akademiya Adresi</h3>
                  <div className="footer__line"></div>
                  <ul className="footer__address">
                        <li>
                           <FontAwesomeIcon icon={faHome} className="footer__icon" size="x"/>
                          Nizami 203B,Af Business House,2-ci mərtəbə Baku,1131
                        </li>
                        <li>
                           <FontAwesomeIcon icon={faPhone} className="footer__icon" size="x"/>
                           +994 (50) 766 20 00</li>
                        <li>
                         <FontAwesomeIcon icon={faEnvelope} className="footer__icon" size="x"/>
                           aynurmahmudova05@gmail.com
                        </li>
                     </ul>
               </div>
            </div>
            <div className="col-md-3">
               <div className="footer__header">
                  <h3>Yeni məktublar</h3>
                  <div className="footer__line"></div>
                  <p>Saytımız haqqında ən son yeniləmələr üçün abunə olun.</p>
                  <input type="email" className='email' placeholder='Email Address...' />
                  <div className="footer__email-btn">
                     <a href="#">Abonə ol.</a>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-md-12">
               <div className="footer__copyright copyright">
                  <div className="row">
                     <div className="col-md-6">
                        <div className="copyright__text">
                           <p>@ Copyright 2022 IT Brains Academy. Müəllif haqları qorunur.</p>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="copyright__menu">
                           <ul>
                              <li>
                                 <a href="#">Əsas</a>
                              </li>
                              <li>
                                 <a href="#">Kurslar</a>
                              </li>
                              <li>
                                 <a href="#">Gələcək Tələbələr</a>
                              </li>
                              <li>
                                 <a href="#">Yeniliklər</a>
                              </li>
                              <li>
                                 <a href="#">Səhifələr</a>
                              </li>
                              <li>
                                 <a href="#">Kontakt</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </footer>
  )
}

export default Footer
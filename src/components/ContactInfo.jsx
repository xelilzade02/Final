import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'

const ContactInfo = () => {
  return (
    <section className="contact-info__content">
      <div className="contact-info__container _container">
         <div className="row">
            <div className="col-md-12">
               <div className="contact-info__items">
                  <div className="contact-info__item">
                     <FontAwesomeIcon className='contact__info__icon' icon={faMapMarker} size="x"/>
                     <h4>Ünvan</h4>
                     <p>Bakı,28 may,Af Business Center</p>
                  </div>
                  <div className="contact-info__item">
                     <FontAwesomeIcon className='contact__info__icon' icon={faEnvelope} size="x"/>
                     <h4>Email Adres</h4>
                     <p>Itbrainsacademy@gmail.com</p>
                  </div>
                  <div className="contact-info__item _border">
                     <FontAwesomeIcon className='contact__info__icon' icon={faPhone} size="x"/>
                     <h4>Telefon</h4>
                     <p>+994 (50) 766 20 00</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default ContactInfo
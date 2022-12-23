import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
   

   const form = useRef();
   
   const serviceID = 'service_s4ucuqc'
   const templateID = 'template_qcdagjc'
   const userId = 'y1P9ZzfYr0cjWil4R'
   
   const sendEmail = (e) => {
      e.preventDefault();
     
         emailjs.sendForm(serviceID, templateID, form.current, userId)
           .then((result) => {
               console.log(result.text);
           }, (error) => {
               console.log(error.text);
           });
      
         form.current.reset()
   };

  return (
    <section className="contact-form__content">
      <div className="contact-form__container _container">
         <div className="row">
            <div className="col-md-6">
               <div className="contact-form__location location">
                  <div className="location__heading">
                     <h4>Xəritə</h4>
                  </div>
                  <div className="location__map">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sinhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63918.534522680704!2d-122.40357733207908!3d37.37183291146573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f0997becc65c9%3A0xdecb7a7e3778b0b7!2sTunitas%2C%20CA%2094019%2C%20USA!5e0!3m2!1sen!2sin!4v1657135813011!5m2!1sen!2sin"
                     width="100%"
                     height="394"
                     style={{ border: "0" }}
                     allowfullscreen=""
                     loading="lazy">
                   </iframe>
                  </div>
               </div>
            </div>
            <div className="col-md-6">
               <div className="contact-form__message message">
                  <div className="message__heading">
                     <h4>Əlaqə</h4>
                  </div>
                  <div className="message__body">
                     <form ref={form} onSubmit={sendEmail}>
                     <div className="row">
                        <div className="col-md-6">
                           <input name='name' type="text" placeholder='Ad,Soyad' />
                        </div>
                        <div className="col-md-6">
                           <input name='email' type="email" placeholder='E-mail Ünvan'/>
                        </div>
                        <div className="col-md-12">
                           <textarea name="message" id="" cols="30" rows="10" placeholder='Mesaj Yaz'></textarea>
                        </div>
                     </div>
                     <div className="message__btn">
                        <input type="submit" value='Mesaj Göndər' />
                     </div>
                     </form>
                     
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default ContactForm
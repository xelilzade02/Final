import React from 'react'
import EventsHeading from '../EventsHeading'
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faComment, faCircleDot} from '@fortawesome/free-solid-svg-icons'
import Img1 from '../../assets/images/events-slider/event-slider-1.jpg'
import Img2 from '../../assets/images/events-slider/event-slider-2.jpg'
import Img3 from '../../assets/images/events-slider/event-slider-3.jpg'
import Teacher from '../../assets/images/teachers/teacher-3.jpg'


const SingleEvent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
    <EventsHeading />
    <section className='single-events__content'>
      <div className='single-events__container _container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='single-events__slider'>
            <Slider {...settings}>
              <img src={Img1} />
              <img src={Img2} />
              <img src={Img3} />
            </Slider>
            </div>
          </div>
          <div className='col-md-6'>
           <div className=' single-events__item'>
            <div className='single-events__up'>
              <img src={Teacher}/>
              <h4>Əsmər Quliyeva</h4>
              <ul>
                <li><FontAwesomeIcon className='single-events__icon' icon={faComment} size="x"/> 7</li>
                <li><FontAwesomeIcon className='single-events__icon' icon={faStar} size="x"/> 5</li>
              </ul>
            </div>
            <div className='single-events__down'>
              <a href=''><h5>IT Brains Academy</h5></a>
              <p>Özünüzü IT Brains Academy-də inkişaf etdirin. <br/>
IT sahəsində yeni biliklər əldə edə və biliklərinizi artıra bilərsiniz.
<br/>IT Brains Academy`də 40-dan çox kurslar mövcuddur.Rəssamlıq,İnformatika,IT,Android Developer,Web Developer,Software Engineer,Marketing,Economic,Finance,Accounting və başqaları.
<br/>  İş saatlarımız həftə içi 6 gün saat 09:00 - 19:00-a kimidir. <br/> Labaratoriya otağımız və rəsm otağımız da mövcuddur,istədiyiniz zaman istədiyiniz qədər otaqlardan istifadə mümkündür. 
</p>
              <div className='single-course__accordion'>
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <FontAwesomeIcon className='down__icon' icon={faCircleDot} size="x"/> İnformatika Texnologiyaları
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Profesional müəllimlərimiz tərəfindən 7 aydan 12 aya kimi kurs keçirilir.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <FontAwesomeIcon className='down__icon' icon={faCircleDot} size="x"/> Planlaşdırma və Balanslaşdırma
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Profesional müəllimlərimiz tərəfindən 7 aydan 12 aya kimi kurs keçirilir.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    <FontAwesomeIcon className='down__icon' icon={faCircleDot} size="x"/>Web Designer
                    </button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Profesional müəllimlərimiz tərəfindən 7 aydan 12 aya kimi kurs keçirilir.Profesional müəllimlərimiz tərəfindən 7 aydan 12 aya kimi kurs keçirilir.</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
           </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='single-events__info'>
              <div className='single-events__widget'>
                <h4>Detallar</h4>
              </div>
              <ul>
                <li><span>Başlayır:</span>14 Noyabr 2015</li>
                <li><span>Müddət:</span>08:00 - 09:00</li>
                <li><span>Təşkilatçı:</span>Cavad İmamverdiyev</li>
                <li><span>Telefon:</span>+994 (50) 766 20 00</li>
                <li><span>Email:</span>Itbrainsacademy@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='single-events__map'>
            <div className='single-events__widget'>
              <h4>Xəritə</h4>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63918.534522680704!2d-122.40357733207908!3d37.37183291146573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f0997becc65c9%3A0xdecb7a7e3778b0b7!2sTunitas%2C%20CA%2094019%2C%20USA!5e0!3m2!1sen!2sin!4v1657135813011!5m2!1sen!2sin"
              width="100%"
              height="253"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default SingleEvent
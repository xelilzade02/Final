import React from 'react'
import Img from '../assets/images/single-post/single.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import Img1 from '../assets/images/single-post/man1.jpeg'
import Img2 from '../assets/images/single-post/man2.jpeg'
import Img3 from '../assets/images/single-post/woman1.jpg'
import Img4 from '../assets/images/single-post/woman2.jpg'


const SinglePostMain = () => {

  return (
   <div className="col-md-8">
   <div className="single-post__main main">
      <div className="main__item">
         <img src={Img} alt="" />
         <ul>
            <li>Posted: <em>23 İyun 2022</em></li>
            <li>Tərəfindən: <em>Admin</em></li>
            <li>Şərhlər: <em>2</em></li>
         </ul>
         <a href="#"><h4>İT Brains Academy</h4></a>
         <p>IT Brains Academy-nda 40-dan çox kurs fəaliyyətt göstərir</p>
         <div className="main__embied">
            <em>Həmçinin DİM-ə hazırlıq kursları da mövcuddur.</em>
         </div>
         <p>İnformatika və abituriyent hazırlıqları dərsləri də keçirilir.</p>
         <div className="main__tags-share">
            <div className="main__tags">
            <FontAwesomeIcon className='main__tag-icon' icon={faTag} size="x"/>
            <p>Təqlər:</p>
            <span>
               <a href="#">Məktəb</a>,
               <a href="#">Tələbələt</a>,
               <a href="#">Sinifotaqları</a>
            </span>
            </div>
            <div className="main__share">
               <div className="main__btn">
                  <a href="#">
                     Paylaş
                     <FontAwesomeIcon className='main__btn-icon' icon={faShareAlt} size="x"/>
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="single-post__comments comments">
      <div className="comments__heading">
         <h3>Şərhlər</h3>
      </div>
      <div className="comments__item">
         <img src={Img1} alt="" />
         <h4>Samir</h4>
         <span>1 saat əvvəl</span>
         <div className="comments__btn">
            <a href="#">Təkrar</a>
         </div>
         <p>IT Brains Academy</p>
      </div>
      <div className="comments__item _reply">
         <img src={Img3} alt="" />
         <h4>Samirə </h4>
         <span>45 dəq. əvvəl</span>
         <div className="comments__btn">
            <a href="#">Təkrar</a>
         </div>
         <p>
            IT Brains Academy</p>
      </div>
      <div className="comments__item _reply">
         <img src={Img2} alt="" />
         <h4>Anar</h4>
         <span>35 dəq. əvvəl</span>
         <div className="comments__btn">
            <a href="#">Təkrar</a>
         </div>
         <p>IT Brains Academy</p>
      </div>
      <div className="comments__item">
         <img src={Img4} alt="" />
         <h4>Cəmilə </h4>
         <span>12 dəq. əvvəl </span>
         <div className="comments__btn">
            <a href="#">Təkrar</a>
         </div>
         <p>IT Brains Academy</p>
      </div>
   </div>
   <div className="single-post__send send">
      <div className="send__heading">
         <h3>Şərh yaz</h3>
      </div>
      <div className="send__comment">
   
         <div className="row">
            <div className="col-md-6">
               <input type="text" placeholder='Ad, Soyad' name='name' />
            </div>
            <div className="col-md-6">
            <input type="text" placeholder='Email Ünvan' name='email' />
            </div>
            <div className="col-md-12">
               <textarea name="message" id="" cols="30" rows="10"></textarea>
            </div>
         </div>
        
         <div className="send__btn">
            <a href="#">Rəy bildir</a>
         </div>
      </div>
   </div>
 </div>

  )
}

export default SinglePostMain
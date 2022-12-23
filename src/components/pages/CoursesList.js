import React from 'react'
import CoursesTopBar from '../CoursesTopBar'
import myData from '../../coursesdata.json'
import CoursesHeading from '../CoursesHeading'
import CoursesListItems from '../CoursesListItems'
import DownNav from '../DownNav'


const CoursesList = () => {
  return (
    <>
      <CoursesHeading/>
      <section className='courses-list__content'>
        <div className='courses__container _container'>
        <div className='row'>
            <div className='col-md-12'>
              <CoursesTopBar />
            </div>
        </div>
        <div className='row'>
              <div className='col-md-8'>
                {myData.map((item) => (
                    <CoursesListItems key={item.id} name={item.name} image={item.image} price={item.price} imgTeacher={item.imgTeacher} text={item.text}/>
                  ))}
              </div>
             
            <div className='col-md-4'>
            <div className="request__information">
                  <div className="widget__heading">
                     <h3>Tələb Edilən Məlumat </h3>
                  </div>
                  <div className="search__form">
                     <input type="text" placeholder='Ad,Soyad' />
                     <input type="text" placeholder='E-mail Ünvan' />
                     <div className="select">
                        <select name="" id="">
                           <option value="-1">Maraqlar</option>
                           <option value="">Yaxınlıqdakılar</option>
                           <option value="">Siniflər</option>
                           <option value="">Qısa Zamanlar</option>
                           <option value="">Uzun Zamanlar</option>
                        </select>
                     </div>
                     <div className="select">
                        <select name="" id="">
                           <option value="-1">Programlaşdırma</option>
                           <option value="">İşləmə Prinsipi</option>
                           <option value="">Nailiyyətlər</option>
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
        <DownNav />
        </div>
      </section>
    </>
  )
}

export default CoursesList
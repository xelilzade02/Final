import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Coursescard = ({key,name,image,price,imgTeacher,text}) => {
  return (
   <div className="courses__wrapper" key={key}>
   <div className="courses__item">
      <a href=""><img src={image} alt="" /></a>
      <div className="courses__down">
         <img src={imgTeacher} alt="" />
         <h4>{name}</h4>
         <div className="courses__price">
            <span>{price}</span>
            <div className="base"></div>
         </div>
         <a href=""><h3>{text}</h3></a>
         <p>IT Brains Academy</p>
         <div className="courses__btn">
            <a href="">
               Daha çox<FontAwesomeIcon icon={faArrowRight} size="x"/>
            </a>
         </div>
      </div>
   </div>
   </div>
  )
}

export default Coursescard
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const SingleCourseTopics = () => {
  return (
    <div className="single-course__topics">
      <h4>Daxil Olanlar</h4>
      <div className="row">
         <div className="col-md-4">
            <ul>
               <li>
               <FontAwesomeIcon className='single-course__check' icon={faCheck} size="x"/>
               Web Designer
               </li>

               <li>
               <FontAwesomeIcon className='single-course__check' icon={faCheck} size="x"/>
               Andriod Developer
               </li>

               <li>
               <FontAwesomeIcon className='single-course__check' icon={faCheck} size="x"/>
               Uİ-UX Designer
               </li>

               <li>
               <FontAwesomeIcon className='single-course__check' icon={faCheck} size="x"/>
              İnformatika Texnologiyaları
               </li>
            </ul>
         </div>
         <div className="col-md-4">
         <ul>
               <li><FontAwesomeIcon className='single-course__check' icon={faCheck} size="xs"/>
               Software Developer
               </li>
               
               <li><FontAwesomeIcon className='single-course__check' icon={faCheck} size="x"/>
               Rəssamlıq
               </li>

               <li><FontAwesomeIcon className='single-course__check' icon={faCheck} size="x"/>
               Planlaşdırma 
               </li>

               <li><FontAwesomeIcon className='single-course__check' icon={faCheck} size="x"/>
              Maliyyə
               </li>
            </ul>
         </div>
         <div className="col-md-4">
         <ul>
               <li><FontAwesomeIcon className='single-course__check' icon={faCheck} size="x"/>
               IT Brains Academy
               </li>
               <li><FontAwesomeIcon className='single-course__check' icon={faCheck} size="x"/>
               Mühasibətlıq
               </li>
            </ul>
         </div>
      </div>
    </div>
  )
}

export default SingleCourseTopics
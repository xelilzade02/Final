import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCellsLarge, faList, faSortDown} from '@fortawesome/free-solid-svg-icons'

const CoursesTopBar = () => {
  return (
   <div className='courses-grids__feautered feautered'>
   <div className='feautered__text'>
     <span>40 kursdan yalnız 1-9-nu göstərir.</span>
   </div>
   <div className='feautered__right-side'>
     <div className='feautered__category'>
       <select>
         <option>Kateqoriya <FontAwesomeIcon icon={faSortDown} size="xl"/></option>
         <option>Ödənişsiz</option>
         <option>Zamanlama</option>
         <option>Əsasən</option>
         <option>Ən son</option>
       </select>
     </div>
     <div className='feautered__sort'>
       <select>
         <option>Sıralama</option>
         <option>Qiymət</option>
         
         <option>Mühüm Olanlar</option>
       </select>
     </div>
     <div className='feautered__icons'>
       <ul>
         <li><a href='#'><FontAwesomeIcon icon={faList} size="x"/></a></li>
         <li><a href='#'><FontAwesomeIcon icon={faTableCellsLarge} size="x"/></a></li>
       </ul>
     </div>
   </div>
 </div>
  )
}

export default CoursesTopBar
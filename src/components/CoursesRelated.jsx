import React from 'react'
import Image1 from '.././assets/images/single-post/man1.jpeg'
import Image2 from '.././assets/images/single-post/man2.jpeg'
import Image3 from '.././assets/images/single-post/woman1.jpg'

const CoursesRelated = () => {
  return (
    <div className="single-course__related related">
      <div className="related__heading">
         <h4>Əlaqəli Kurslar</h4>
      </div>
      <ul>
         <li>
            <a href='#'><img src={Image1} alt="" /></a>
            <span>Cəlil</span>
            <a href="#"><h5>Tarixi Memarlıq</h5></a>
            <p>Qiymət:<em>39.99AZN</em></p>
         </li>
         <li>
            <a href='#'><img src={Image2} alt="" /></a>
            <span>Samir</span>
            <a href="#"><h5>Managment</h5></a>
            <p>Qiymət:<em>29.99AZN</em></p>
         </li>
         <li>
         <a href='#'><img src={Image3} alt="" /></a>
            <span>Fatimə</span>
            <a href="#"><h5>Electronic Engineering</h5></a>
            <p>Qiymət:<em>89.99AZN</em></p>
         </li>
      </ul>
    </div>
  )
}

export default CoursesRelated
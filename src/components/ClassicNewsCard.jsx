import React from 'react'

const ClassicNewsCard = ({key,image,by,comments,title,posted}) => {
  return (
      <div className="classic-news__wrapper">
         <div className="classic-news__item" key={key}>
            <a href=""><img src={image} alt="" /></a>
            <ul>
               <li>Göndərilən: <em>{posted}</em></li>
               <li>Tərəfindən: <em>{by}</em></li>
               <li>Şərhlər: <em>{comments}</em></li>
            </ul>
            <a href=""><h4>{title}</h4></a>
            <p>IT sahəsində yeni biliklər əldə edə və biliklərinizi artıra bilərsiniz.</p>
            <div className="classic-news__buttons">
               <div className="classic-news__btnsub">
                  <a href="">Oxumağa davam et</a>
               </div>
               <div className="classic-news__btnshare">
                  <a href='#'>Paylaş</a>
               </div>
            </div>
         </div>
      </div>
  )
}

export default ClassicNewsCard
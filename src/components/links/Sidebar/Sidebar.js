import React from 'react'
import Style from "../../../components/styles.module.css"
function Sidebar() {
  const handleClose = (e)=>{
    console.log( e.currentTarget.parentElement.parentElement)
   e.currentTarget.parentElement.parentElement.style.display = "none"
   if( e.currentTarget.parentElement.parentElement.style.display === "none") {
    document.body.style.background = "rgb(243, 242, 239)"
   }
    
  
  }
  return (
    <div className={`${Style.sideBarContainer} sideBarContainerJsx `}  >
      <style jsx>{
                       `
                       .sideBarContainerJsx{
                        z-index: 1
                       }
                       `
                    } </style>
       <div className={Style.sidebarContainerHeader}>
           <h3>İş</h3> 
          <i onClick={handleClose} className="fa-solid fa-xmark"></i>
          
          <style jsx>{
                       `
                       .fa-xmark{
                       cursor: pointer;
                       }
                       `
                    } </style>
       </div>
             
        <div className={Style.sideBarContainerFirst}>
            <div className={Style.insideSidebarHeader}> Diğer Linkedin Üyelerini Ziyaret Edin</div>
           
            <div className={Style.firsDivInsideItem}> 
                 <ul>
                    <li> <i className="fa-solid fa-graduation-cap"></i> <h6>Learning</h6>  </li>
                    <li> <i className='fa fa-person-shelter'> </i> <h6>İçgörüler </h6> </li>
                    <li> <i className="fa-solid fa-person-circle-question"></i> <h6>İş ilanı yayınla</h6> </li>
                    <li> <i className="fa-solid fa-rectangle-ad"></i> <h6>Reklam Ver</h6> </li>
                    <li><i className="fa-solid fa-compass"></i> <h6>Adayları Bulun</h6>  </li>
                    <li><i className="fa-solid fa-users"></i>  <h6>Gruplar</h6> </li>
                    <li><i className="fa-solid fa-store"></i> <h6>Hizmetler Mağazası</h6> </li>
                    
                 </ul>
            </div>
        </div>
        <div className={Style.sideBarContainerSecond}> 
            <div className={Style.insideSidebarHeader}>LinkedIn Ticari Hizmetler </div>
            <div className={Style.sidebarSecondDivInside}>
                 <ul> 
                    <li> <span className='sidebarSpan'>Yetenek Çözümleri  </span> <span><small> Yetenekleri bulun, onların ilgisini çekin ve işe alın</small></span>     </li>
                    <li> <span className='sidebarSpan'>Satış Çözümleri </span> <span><small>Satış fırsatlarının kapısını açın</small></span></li>
                    <li><span className='sidebarSpan'>Ücretsiz iş ilanı yayınla</span> <span><small>İş ilanınızı kalifiye adayların önüne serin</small></span></li>
                    <li><span className='sidebarSpan'>Pazarlama Çözümleri</span> <span><small>İşinizi büyütün ve yeni müşteriler edinin</small></span></li>
                    <li><span className='sidebarSpan'> Eğitim Çözümleri </span> <span><small>Organizasyonunuzda yetenekler geliştirin</small></span></li> 
                </ul>
                <style jsx>
                  {
                    `
                    .sidebarSpan{
                        color:rgb(43, 43, 43) !important;
                        font-weight: 700 !important;
                    }
                    .sidebarSpan:hover{
                      position: relative;
                      border-bottom: 1px solid black;  
                    }
                   
                    
                    `
                  }
                </style>
            </div>
        </div>
      </div>
   
  )
}

export default Sidebar
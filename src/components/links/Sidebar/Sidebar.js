import React from 'react'
import Style from "../../../components/styles.module.css"
function Sidebar() {
  return (
    <div className={Style.sideBarContainer }>
     
             <h3>İş</h3>
        <div className={Style.sideBarContainerFirst}>
            <div className={Style.insideSidebarHeader}> Diğer Linkedin Üyelerini Ziyaret Edin</div>
           
            <div className={Style.firsDivInsideItem}> 
                 <ul>
                    <li> <i className='fa fa-facebook'> </i> <h6>Learning</h6>  </li>
                    <li> <i className='fa fa-facebook'> </i> <h6>Learning</h6> </li>
                    <li> <i className='fa fa-facebook'> </i> <h6>Learning</h6> </li>
                    <li> <i className='fa fa-facebook'> </i> <h6>Learning</h6> </li>
                    <li> <i className='fa fa-facebook'> </i> <h6>Learning</h6>  </li>
                    <li> <i className='fa fa-facebook'> </i> <h6>Learning</h6> </li>
                    <li> <i className='fa fa-facebook'> </i> <h6>Learning</h6> </li>
                    
                 </ul>
            </div>
        </div>
        <div className={Style.sideBarContainerSecond}> 
            <div className={Style.insideSidebarHeader}>LinkedIn Ticari Hizmetler </div>
            <div className={Style.sidebarSecondDivInside}>
                 <ul> 
                    <li> <span>Yetenek Çözümleri  </span> <span><small> Yetenekleri bulun, onların ilgisini çekin ve işe alın</small></span>     </li>
                    <li> <span>Satış Çözümleri </span> <span><small>Satış fırsatlarının kapısını açın</small></span></li>
                    <li><span>Ücretsiz iş ilanı yayınla</span> <span><small>İş ilanınızı kalifiye adayların önüne serin</small></span></li>
                    <li><span>Pazarlama Çözümleri</span> <span><small>İşinizi büyütün ve yeni müşteriler edinin</small></span></li>
                    <li><span>Eğitim Çözümleri </span> <span><small>Organizasyonunuzda yetenekler geliştirin</small></span></li> 
                </ul>
            </div>
        </div>
      </div>
   
  )
}

export default Sidebar
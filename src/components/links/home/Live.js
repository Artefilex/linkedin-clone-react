import { useState } from 'react'
import liveJson from "./Live.json"
import "./home.css"
function Live() {
  const [openLink, setOpenLink] = useState(false)
  const [openLinkTwo, setOpenLinkTwo] = useState(false)
  const handleClick = (e) => {
    setOpenLink(!openLink)

    if (openLink) {
      document.querySelector(".activePrivate").style.display = "none"

    } else {
      document.querySelector(".activePrivate").style.display = "flex"
      document.querySelector(".activePrivateTwo").style.display = "none"
    }

  }
  const handleClickTwo = (e) => {
    setOpenLinkTwo(!openLinkTwo)
    if (openLinkTwo) {
      document.querySelector(".activePrivateTwo").style.display = "none"

    } else {
      document.querySelector(".activePrivateTwo").style.display = "flex"
      document.querySelector(".activePrivate").style.display = "none"
    }

  }
  return (
    <div className='liveDiv'>

      <div className='liveFollower'>
        <div className='followerHeader'>
          <span>Akışınıza Ekleyin </span>

        </div>
        <div className='liveJsonContainer' >
          {
            liveJson.map((live, index) => (
              <div key={index} className='liveOffer'>
                <button className='userImgBtn'>
                  <img src={live.logo} alt="bla" />
                </button>
                <div className='liveOfferRight'>
                  <h6>{live.companyName}</h6>
                  <span>{live.subTitle}</span>
                  <button> <i className="fa-solid fa-plus"></i>
                    <span> Takip Et</span>
                  </button>
                </div>

              </div>
            ))
          }
        </div>
        <div className='allOffer'>
          <button ><span> Tüm tavisiyeleri göster</span>  <i className="fa-solid fa-arrow-right"></i> </button>
        </div>
      </div>
      <div className='addContent'>
        <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="" />
      </div>
      <div className='infoForLinkedIn'>
        <ul>
          <li> <a href="black"> <span>Hakkında</span></a> </li>
          <li>  <a href="black"> <span>Erişebilirlik</span></a></li>
          <li> <a href='black'> <span>Yardım Merkezi</span></a></li>
          <li> <button onClick={handleClick} id="1"> <span>Gizlilik ve Koşullar</span> <i className="fa-solid fa-sort-down"></i>
          </button>
            <div className='activePrivate' style={{ display: "none" }}> <a href="blackSvan"> <span>Gizlilik Politikası</span></a>
              <a href="blackSvan"><span>Kullanıcı Anlaşması</span> </a>
              <a href="blackSvan"><span>Çerez Politikası </span></a>
              <a href="blackSvan"><span>Telif Hakkı Politikası</span> </a>
            </div>
          </li>
          <li> <a href="black"> <span>Reklam Tercihleri</span></a> </li>
          <li> <a href="black"> <span>Reklam</span></a></li>
          <li> <button onClick={handleClickTwo} id="2"> <span>Ticaret Hizmetleri</span>  <i className="fa-solid fa-sort-down"></i> </button>
            <div className='activePrivateTwo' style={{ display: "none" }}>

              <a href="blackSvan"><h3>Yetenek çözümleri</h3>
                <p>Yetenekleri bulun, onların ilgisini çekin ve işe alın</p></a>

              <a href="blackSvan"><h3>Satış Çözümleri</h3>
                <p> Satış fırsatlarının kapısını açın   </p>
              </a>
              <a href="blackSvan"><h3>Ücretsiz iş ilanı yayınla</h3>
                <p>Ücretsiz iş ilanı yayınla </p>
              </a>
              <a href="blackSvan"> <h3>Pazarlama Çözümleri</h3>
                <p>İşinizi büyütün ve yeni müşteriler edinin</p></a>
              <a href="blackSvan" target={'_blank'}>
                <h3>Eğitim Çözümleri</h3>
                <p>Organizasyonunuzda yetenekler geliştirin</p>
              </a>

              <br />
              <a href="blackSvan" className='lastItem' >
                <h3>Şirket Sayfası Oluşturun</h3>
                <i className='fa-solid fa-plus'> </i>
              </a>
            </div>   </li>
          <li><a href="black"> <span> Linkedin uygulamasını yükle</span></a></li>
          <li> <a href="black">  <span>Daha Fazla</span></a></li>

        </ul>
        <div className='bottomInfo'>
          <i className="fa-brands fa-linkedin"></i>
          <span> LinkedIn Corporation © 2023</span>
        </div>
      </div>
    </div>
  )
}

export default Live
import { useState } from 'react'
import liveJson from "./Live.json"
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
      <style  >
        {`
       .liveDiv{
        width: 15%;
        display: flex;
        flex-direction:column;
        align-items:center;
        gap: 0.2rem; }
       .liveFollower{
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items: flex-start;
        width: 90%;
        gap: 1rem;
       }
       .liveFollower{
        background:white;
        border: 1px solid #c7bfbf;
        padding:0.5rem;
        border-radius: 10px;
       }
       .liveFollower .liveJsonContainer {
        display: flex;
        flex-direction:column;
        align-items:center;
         gap:1rem;
       }
       .liveFollower .liveJsonContainer .liveOffer{
        display: flex;
        gap: 0.3rem;
        align-items: center;
        justify-content: flex-start;
        width:100%;
       }
       .liveFollower .liveJsonContainer .liveOffer .userImgBtn{
         border:none;
         outline: none;
         background:transparent;
       }

       .liveFollower .liveJsonContainer .liveOffer .userImgBtn img{
          width: 45px;
          height:45px;
          object-fit:cover;
          border-radius:100%
           
       }
       .liveFollower .liveJsonContainer .liveOffer .liveOfferRight{
        display:flex;
        flex-direction:column;
        white-space:nowrap;
        justify-content:flex-start;
        align-items:flex-start;
        gap:0.2rem;
       }
       .liveFollower .liveJsonContainer .liveOffer .liveOfferRight h6{
        font-size:14px;
        font-weight:620
       }
       .liveFollower .liveJsonContainer .liveOffer .liveOfferRight span{
        font-size: 12px;
        color: #706767;
       }
       .liveFollower .liveJsonContainer .liveOffer .liveOfferRight button{
        border:none;
        border: 1px solid #706767;
        border-radius: 15px;
        display:flex;
        padding: 0.25rem 0.6rem;
        cursor:pointer;
        gap:0.3rem;

       }
       .liveFollower .liveJsonContainer .liveOffer .liveOfferRight button:hover{
        border: 1.5px solid #706767;
        background: #dfdddd;
        color: white;
       }
       .liveFollower .liveJsonContainer .liveOffer .liveOfferRight button i,
       .liveFollower .liveJsonContainer .liveOffer .liveOfferRight button span{
        color:#706767;
       }
      .liveFollower .allOffer button{
        display:flex;
        align-items:center;
        gap:0.2rem;
        justify-content:center;
        border:none;
        background:transparent;
        cursor:pointer;
        padding:0.1rem;
        border-radius:3px;
      }
      .liveFollower .allOffer button:hover{
        background: #dfdddd;
      } 
      .liveDiv .addContent {
        width: 95%;
        border:1px solid #c7bfbf;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:10px;
      }
      .liveDiv .addContent img{
        width:90%;
      }
      .liveDiv .infoForLinkedIn{
        display:flex;
        flex-direction:column;
        width:95%;
        gap:1rem;


      }
      .liveDiv .infoForLinkedIn ul {
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        gap:0.5rem;
        justify-content: space-evenly;
        width: 80%;
      }
      .liveDiv .infoForLinkedIn ul li {
        list-style: none;
      }
      .liveDiv .infoForLinkedIn ul li a{
        text-decoration:none;
        color: #797272;
      }
      .liveDiv .infoForLinkedIn ul li a:hover{
        color:#1668c2;
        text-decoration:underline;
      }
      .liveDiv .infoForLinkedIn ul li a span{
        font-size:12px;
      }
      .liveDiv .infoForLinkedIn ul li  button{
        display:flex;
        flex-direction:row;
        align-items:flex-start;
        justify-content:center;
        gap:0.5rem;
        border:none;
        color: #797272;
        cursor:pointer;

      }
      .liveDiv .infoForLinkedIn ul li  button span{
        font-size:12px;
      }
      .liveDiv .infoForLinkedIn ul li  button:hover span{
        text-decoration:underline;
        color:#1668c2;
      }
      .liveDiv .infoForLinkedIn ul li  button:hover i {
        color:#1668c2;
      }

      .liveDiv .infoForLinkedIn ul li  button i {
        position:relative;
        top:-1px;
      }
      .liveDiv .infoForLinkedIn .bottomInfo i{
        color:#1668c2;
        font-size: 20px;

      }
      .liveDiv .infoForLinkedIn .bottomInfo span{
        font-size:13px;
      }
      .liveDiv .infoForLinkedIn .activePrivateTwo{
        display:flex;
        flex-direction:column;
        position:absolute;
        top:15rem;
        right:15%;
        background:white;
        justify-content:flex-start;
        align-items:flex-start;
        border:1px solid #b7aeae;
        border-radius: 10px 10px 0px;
      }
      .liveDiv .infoForLinkedIn .activePrivate{
        display:flex;
        flex-direction:column;
        position:absolute;
        top:18%;
        right:20%;
        background:white;
        justify-content:flex-start;
        align-items:flex-start;
        gap:0.3rem;
        padding:1rem;
        border:1px solid #b7aeae;
        border-radius: 10px 0px 10px 10px;
      }
      .liveDiv .infoForLinkedIn .activePrivate a span {
        color:#302c2c;
        font-weight:600
      
      }
      .liveDiv .infoForLinkedIn .activePrivate a:hover{
        text-decoration:none;
        background:##e0dfdc;

      }
      .liveDiv .infoForLinkedIn .activePrivateTwo a{
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:flex-start;
        padding:1rem;
      }
      .liveDiv .infoForLinkedIn .activePrivateTwo a h3{
        white-space:nowrap;
        font-size:12px;
        margin:0
      }
      .liveDiv .infoForLinkedIn .activePrivateTwo a p{
        font-size:10px;
        margin:0;
        text-align:start;
        white-space:wrap;
      }
     
      .liveDiv .infoForLinkedIn .activePrivateTwo a:hover h3~p{
        text-decoration:underline;
        color:#797272;
      }
      .liveDiv .infoForLinkedIn .activePrivateTwo .lastItem{
         display:flex;
        flex-direction: row;
        gap:0.5rem;
        align-items:center;

      }
      liveDiv .infoForLinkedIn .activePrivateTwo .lastItem i {
        text-decoration: none;
      
      }

      @media (max-width:1000px){
        .liveDiv .infoForLinkedIn .bottomInfo span{
          font-size:100px;
        }
      }

       `}



      </style>
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
            <div className='activePrivate' style={{display:"none"}}> <a href="blackSvan"> <span>Gizlilik Politikası</span></a>
              <a href="blackSvan"><span>Kullanıcı Anlaşması</span> </a>
              <a href="blackSvan"><span>Çerez Politikası </span></a>
              <a href="blackSvan"><span>Telif Hakkı Politikası</span> </a>
            </div>
          </li>
          <li> <a href="black"> <span>Reklam Tercihleri</span></a> </li>
          <li> <a href="black"> <span>Reklam</span></a></li>
          <li> <button onClick={handleClickTwo} id="2"> <span>Ticaret Hizmetleri</span>  <i className="fa-solid fa-sort-down"></i> </button>
          <div className='activePrivateTwo' style={{display:"none"}}>
            
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
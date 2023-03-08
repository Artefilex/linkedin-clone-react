import {useState} from 'react'
import liveJson from "./Live.json"
function Live() {
  const [openLink,setOpenLink] = useState(false)
  const handleClick = (e)=>{
    setOpenLink(!openLink)
      if(openLink){
       document.querySelector(".activeLi").style.display="none"
      
      }else{
        document.querySelector(".activeLi").style.display="flex"
      }
    
  }
  const handleClickTwo= (e)=>{
    console.log(e.currentTarget.id)
  }
  return (
    <div className='liveDiv'>
      <style  >
       {`
       .liveDiv{
        width: 19%;
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

       `}



      </style>
       <div className='liveFollower'>
        <div className='followerHeader'>
          <span>Akışınıza Ekleyin </span>
          
        </div>
        <div className='liveJsonContainer' >
          {
            liveJson.map((live,index)=>(
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
        <div className='activeLi'> <a href="blackSvan"> asdasd</a></div> 
        </li>
        <li> <a href="black"> <span>Reklam Tercihleri</span></a> </li>
        <li> <a href="black"> <span>Reklam</span></a></li>
        <li> <button onClick={handleClickTwo} id="2"> <span>Ticaret Hizmetleri</span>  <i className="fa-solid fa-sort-down"></i> </button></li>
        <li><a href="black"> <span> Linkedin uygulamasını yükle</span></a></li>
        <li> <a href="black"> <img src="https://www.logosvgpng.com/wp-content/uploads/2021/12/linkedin-logo-vector-2021.png" alt="" /> <span>Daha Fazla</span></a></li>
        
        </ul> 
        <div className='last'>
             <img src="" alt="" />
              <span> LinkedIn Corporation © 2023</span>
        </div>
       </div>
      </div>
  )
}

export default Live
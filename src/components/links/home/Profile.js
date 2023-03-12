import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import img from "./../../ben.jpg"
import "./home.css"
import { useChangeButton } from '../../../context/ButtonContenx'

function Profile() {
  const { setDown } = useChangeButton()
  const [isOpen, setIsOpen] = useState(false)
  const [showBtn, setShowBtn] = useState("down")
  const [showSpan, setShowSpan] = useState("Daha fazla göster")
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  useEffect(() => {
    
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (screenWidth <= 900 && document.querySelector(".buttonMores")){
       setTimeout(()=>{
        document.querySelector(".buttonMores").style.display = "flex";
        document.querySelector(".downGroup").style.display = "none";
        document.querySelector(".downItem").style.display = "none";
        document.querySelector(".profileContent").style.height = "10rem";
        document.querySelector(".headerProfile").style.background = " linear-gradient( to top, #FFFFFF 0px,  #FFFFFD 30px,  #A0B4B7 30px, #A0B4B7 100px)";
       },50)
      }
      else if( screenWidth >= 900 && document.querySelector(".buttonMores") ){
       setTimeout(()=>{
        document.querySelector(".buttonMores").style.display = "none";
        document.querySelector(".downGroup").style.display = "flex";
        document.querySelector(".downGroup").style.flexDirection = "column";
        document.querySelector(".downGroup").style.alignItems = "center";
        document.querySelector(".downItem").style.display = "flex";
        document.querySelector(".profileContent").style.height = "22.5rem";
        document.querySelector(".headerProfile").style.background = "linear-gradient( to top, #FFFFFF 0px,  #FFFFFF 220px,  #A0B4B7 10px, #A0B4B7 100px)";
       
       },50)
      }

      //  else{
      //      setDown("up")
      //   document.querySelector(".buttonMores").style.display = "flex";
      //  }
    };

  }, [screenWidth]);


 
  const showMoreButton = () => {
    setIsOpen(!isOpen)
    if (isOpen) {
       document.querySelector(".downGroup").style.display = "none";
       document.querySelector(".downItem").style.display = "none";
      setShowBtn("down")
      setShowSpan("Daha Fazla göster")
        document.querySelector(".profileContent").style.height = "10rem"
       document.querySelector(".headerProfile").style.background = " linear-gradient( to top, #FFFFFF 0px,  #FFFFFD 30px,  #A0B4B7 30px, #A0B4B7 100px)";
    } else {
       document.querySelector(".downGroup").style.display = "flex";
       document.querySelector(".downItem").style.display = "flex";
      document.querySelector(".profileContent").style.height = "22.5rem";
      document.querySelector(".headerProfile").style.background = "linear-gradient( to top, #FFFFFF 0px,  #FFFFFF 220px,  #A0B4B7 10px, #A0B4B7 100px)";
      setShowBtn("up")
      setShowSpan("Daha Az göster")

    }

  }
  useEffect(()=>{
     setDown(showBtn)
  })
 
  

  useEffect(()=>{
    if (screenWidth <= 900 && showBtn === "down") {
     
    }
    else {
    }
  },[screenWidth,showBtn])






  return (
    <div className="profileContainer">
      <div className="profileContent">
        <div className="headerProfile">
          <div className="imgPosition">
            <button> <img src={img} alt="" /></button>
          </div>
          <div className="spanDiv">
            <span>Barış Tunçdemir</span>
            <span className="spanFor">
              Frontend Developer Candidate</span>

          </div>
          <div className='downItem'>
            <div className="borderDiv"></div>
            <div className="profileInfo">
              <div className="profileInfoDiv"> <h6> Kişi profilinizi görüntüledi</h6>  <span>44</span> </div>
              <div className="profileInfoDiv"><h6> Gönderileriniz için Gösterim</h6> <span>4556</span> </div>
            </div>
            <div className="borderDiv"></div>
            <div className="profileAdd">

              <h6>Özel araç ve içgörülere erişin</h6>
              <a href={img}> Premium ücretsiz deneyin</a>

            </div>
            <div className="borderDiv"></div>

            <div className="profileSave">
              <div className="profileSaveArea">
                <i className="fa-solid fa-bookmark"></i>
                <span>Ögelerim</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='downGroup'>
        <div className="profileGroup" >
          <div className="profileLatestContent">
            <h6>En yeni </h6>
            <ul>
              <li><i className="fa-solid fa-people-group"></i> <span>Lorem, ipsum dolor.</span></li>
              <li><i className="fa-solid fa-people-group"></i><span>Lorem, ipsum dolor.</span></li>
              <li><i className="fa-solid fa-people-group"></i> <span>Lorem, ipsum dolor.</span></li>
              <li><i className="fa-solid fa-people-group"></i> <span>Lorem, ipsum dolor.</span></li>
            </ul>
          </div>
          <div className="profileGroupContent">
            <h6>Gruplar</h6>
            <ul>
              <li><i className="fa-solid fa-people-group"></i> <span>Lorem, ipsum dolor.</span></li>
              <li><i className="fa-solid fa-people-group"></i> <span>Lorem, ipsum dolor.</span></li>
              <li><i className="fa-solid fa-people-group"></i> <span>Lorem, ipsum dolor.</span></li>
              <li><i className="fa-solid fa-people-group"></i> <span>Lorem, ipsum dolor.</span></li>
            </ul>
          </div>
          <div>
            <div className="profileActivityContent"><h6>Etkinlikler</h6> <button><i className="fa-solid fa-plus"></i></button></div>
          </div>
          <div className="profileFollowingHastagContent"> <a href={img}> <h6>Takip edilen Hastagler</h6></a> </div>
          <div className="profileMoreContent"> <button> Daha fazla keşfet</button> </div>
        </div>
      </div>

      <div className='buttonMores'>
        <button onClick={showMoreButton}>
           <span>{showSpan} </span>
           <i className={`fa-solid fa-chevron-${showBtn}`}></i>
         </button>
       </div>
    </div>
  )
}

Profile.propTypes = {
  showBtn: PropTypes.string,
  screenWidth:PropTypes.number
}


export default Profile
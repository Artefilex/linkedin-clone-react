import { useEffect, useState, } from 'react'
import postJson from "./post.json"
import userImg from "./../../ben.jpg"
import "./home.css"
 import {useChangeButton} from '../../../context/ButtonContenx'
function Post() {
  const [showSorting, setShowSorting] = useState(false);
   const {down} = useChangeButton()
  
   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
 
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const handleShowSort = () => {
    setShowSorting(!showSorting)
    if ( showSorting ) {
      document.querySelector(".sortingByWho").style.display = "flex"
    } else {
      document.querySelector(".sortingByWho").style.display = "none"   
    }
  
  }
  useEffect(()=>{
   if( screenWidth <= 1000){
    if(down === "down" ){
      setTimeout(()=>{
       document.querySelector(".sortingByWho").style.top ="24rem"},50)}
   else{
       setTimeout(()=>{
         document.querySelector(".sortingByWho").style.top= "60.5rem"},50)}
   }else{
    document.querySelector(".sortingByWho").style.top ="11rem"
   }
 
    },[down,showSorting,screenWidth])
 
  const handleWhich = (e) => {
    if (e.currentTarget.id === "first") {
      document.querySelector(`#${e.currentTarget.id}`).style.borderLeft = "2px solid green"
      document.querySelector(`#second`).style.borderLeft = "none"
      document.getElementById("textContent").textContent = "En Önemli"
    }
    else if (e.currentTarget.id === "second") {
      document.querySelector(`#${e.currentTarget.id}`).style.borderLeft = "2px solid green"
      document.querySelector(`#first`).style.borderLeft = "none"
      document.getElementById("textContent").textContent = "En Yeni"
    } else {
      document.querySelector(`#${e.currentTarget.id}`).style.borderLeft = "2px solid green"
      document.querySelector(`#second`).style.borderLeft = "none"
      document.getElementById("textContent").textContent = "En Önemli"
    }
  }
  return (
    <div className='postDiv'>
      
      <div className='postContainer'>
        <div className='newPost'>
          <div className='newPostHeaderBtn'>
            <a href={userImg}> <img src={ userImg} alt="" /></a>
            <button> <span>Gönderi başlat</span> </button>
          </div>
          <div className='newPostButtons'>
            <button ><i className="fa-regular fa-image"></i> <span>Fotoğraf</span> </button>
            <button > <i className="fa-brands fa-youtube"></i> <span>Video</span></button>
            <button >  <i className="fa-regular fa-calendar-check"></i> <span>Etkinlik</span></button>
            <button > <i className="fa-solid fa-newspaper"></i> <span>Yazı yaz</span></button>
          </div>
        </div>

        <div className='sortingContainer'>
          <button className='sortingPost' onClick={handleShowSort}>
            <div className='borderClass'></div>
            <span> Sıralama ölçütü:</span>
            <div className='sortingBtn'>
              <span id="textContent">En Önemli</span>
              <i className="fa-solid fa-caret-down"></i> </div>
          </button>
          <div  className='sortingByWho' style={{ display: "none" }}>
            <button onClick={handleWhich} id="first"><span>En Önemli</span></button>
            <button onClick={handleWhich} id="second"><span>En Yeni </span></button>
          </div>
        </div>
        {postJson.map((post, index) => (
       
          <div key={index} className='postArea'>
         
            <div className="postLikeUser">
              <div className='first'>
                <img src={ userImg} alt="" />
                 <h6>{"Barış Tunçdemir" }</h6>
                <span>bunu beğendi</span>
              </div>
              <div>
                <button > <i className="fa-solid fa-ellipsis"></i></button>
              </div>
            </div>
            <div className='profileInfo'>
              <div className="leftDiv">
                <button className='userBtnForGoToUser'>
                  <img src={post.userImg} alt="" className='userImg' />
                  <div className="leftInsideDiv">

                    <a href={userImg}>{post.userName}</a>
                    <span>{post.userInf} </span>
                  </div>
                </button>
              </div>
              <div className='rightDiv'>
                <button >
                  <i className="fa-solid fa-user-plus"></i>
                  <span> Takip Et</span>
                </button>
              </div>

            </div>
            <div className='postContent'>
              <div className="postTitle">
                {post.title}
              </div>
              <div className='postPhoto'>
                {post.userName}
              </div>
              <div className='postButtons'>

                <div className='btnPost'><button> <i className="fa-regular  fa-heart"></i> <span>Beğen</span></button></div>
                <div className="btnPost"> <button> <i className="fa-regular fa-comment-dots"></i><span>Yorum Yap</span> </button></div>
                <div className='btnPost'> <button> <i className="fa-solid fa-retweet"></i> <span>Paylaş</span></button> </div>
                <div className='btnPost'> <button> <i className="fa-solid fa-paper-plane"></i> <span>Gönder</span></button> </div>
              </div>
            </div>
          </div>

        ))}

      </div>


    </div>
  )
}

export default Post
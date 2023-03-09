import {useState,} from 'react'
import postJson from "./post.json"
import userImg from "./../../ben.jpg"
function Post() {

  const [showSorting, setShowSorting] = useState(false);
  const handleShowSort = ()=>{
    setShowSorting(!showSorting)
    if(showSorting){
      document.querySelector(".sortingByWho").style.display = "flex"
    }else{
      document.querySelector(".sortingByWho").style.display = "none"
    }
  }

  
  const handleWhich = (e)=>{
   if(e.currentTarget.id === "first"){
    document.querySelector(`#${e.currentTarget.id}`).style.borderLeft = "2px solid green"
    document.querySelector(`#second`).style.borderLeft = "none"
    document.getElementById("textContent").textContent = "En Önemli"
   }
   else if (e.currentTarget.id === "second"){
    document.querySelector(`#${e.currentTarget.id}`).style.borderLeft = "2px solid green"
    document.querySelector(`#first`).style.borderLeft = "none"
    document.getElementById("textContent").textContent = "En Yeni"
   }else{
    document.querySelector(`#${e.currentTarget.id}`).style.borderLeft = "2px solid green"
    document.querySelector(`#second`).style.borderLeft = "none"
    document.getElementById("textContent").textContent = "En Önemli"
   }
   
  
  
  
  }
  
  return (
    <div className='postDiv'>
      <style jsx > {`
       .postArea{
        margin:0;
        padding: 0;
        box-sizing: border-box;
       }
       h6{
        margin:0;
        padding: 0;
       }
       
      .postDiv{
           width: 45%;
           display:flex;
           flex-direction:column;
           gap:0.5rem;
            
        } 
        .postContainer{
          display:flex;
          flex-direction:column;
          gap:0.5rem;
        
        

        }
        .postContainer .postArea{
          border: 1px solid #c5c4c4;
          border-radius: 10px ;
          display: flex;
          flex-direction:column;
          gap:0.5rem;
          align-items:center;
          background: white;
        }
         .postContainer .postArea .postLikeUser{
          display: flex;
          flex-direction:row;
          justify-content: space-between;
          width:90%;
          align-items:center;
          margin-top:1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #ddd4d4;
         }
       
         .postContainer .postArea .postLikeUser .first{
          display:flex;
          flex-direction: row;
          gap: 0.5rem;
          align-items: center;
         }
         .postContainer .postArea .postLikeUser .first img{
          width: 20px;
          height: 20px;
          border-radius: 100%;
         }
         
         .postContainer .postArea .postLikeUser span{
             font-size:10px;
             color:#666666;
         }
         .postContainer .postArea .postLikeUser button{
          border:none;
          outline:none;
          background:transparent;
          cursor:pointer;
          font-size:20px; 
         }
         .postContainer .postArea .postLikeUser button i{
          color: #666
         }
         .postContainer .postArea .postLikeUser button:hover{
          background:#F3F2EF;
          border-radius:100%
         }
         .postContainer .postArea .profileInfo img{
          width: 40px;
          height: 40px;
          border-radius: 100%;
         }
         .postContainer .postArea .profileInfo{
          display:flex;
          flex-direction:row;
          justify-content:space-between;
          position:relative;
          top:1rem;
          margin-bottom:1rem;
          
         }
         .postContainer .postArea .profileInfo .leftDiv{
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: flex-start;
          gap:1rem;
          
         }
         .postContainer .postArea .profileInfo  .leftInsideDiv{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
         }
         .postContainer .postArea .profileInfo  .leftInsideDiv a {
          text-decoration:none;
          color:#191a1b;
          font-weight:600;
          margin:0;
          }
          .postContainer .postArea .profileInfo  .leftInsideDiv span{
            color:#6c7576;
          }
          .postContainer .postArea .profileInfo .userBtnForGoToUser{
            background: transparent;
            outline: none;
            border:none;
            display:flex;
            align-items:center;
            gap:0.5rem;
            cursor:pointer;

          }
          .postContainer .postArea .profileInfo .rightDiv button{
            background: transparent;
            outline: none;
            border:none;
            cursor:pointer;
          }
          
         
          .postContainer .postArea .profileInfo .rightDiv button i,
          .postContainer .postArea .profileInfo .rightDiv button span{
             font-size:16px;
             color:#005aff;
          }
         .postContainer .postArea .postContent{
          display:flex;
          flex-direction:column;
          gap:2rem;
          width:95%;

         } 
         .postContainer .postArea .postContent .postTitle{
          text-align: start;
         }
         .postContainer .postArea .postContent .postPhoto{
          width:100%;
          min-height:12rem;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;

         }
         .postContainer .postArea .postContent .postPhoto img{
          width:100%;
          max-height: 500px;
         }
         .postContainer .postArea .postContent .postButtons{
          display:flex;
          width:100%;
          gap:1rem;

         }

         .postContainer .postArea .postContent .postButtons .btnPost{
          width:23%;
         
         }
         .postContainer .postArea .postContent .postButtons button{
          border:none;
          background:transparent;
          width:100%;
          height:3rem;
          display:flex;
          gap:0.5rem;
          align-items: center;
          justify-content:center;
          cursor:pointer;
         }
         .postContainer .postArea .postContent .postButtons button i,
         .postContainer .postArea .postContent .postButtons button span{
          font-size:1.2rem;
          color:#5E5E5E;
         }
         .postContainer .postArea .postContent .postButtons button:hover{
          background:#F3F2EF
         }
        .postContainer .borderClass{
          border-bottom: 1px solid #727070;
          width: 88%;
         }
         .postContainer .sortingPost{
          display: flex;
          flex-direction: row;
          align-items: center;
          gap:0.5rem;
          border:none;
          outline:none;
          cursor:pointer;
          width:100%;
          background: transparent;
        }
      }
      .postContainer .sortingContainer{
        width:100%
      }
      .postContainer .sortingPost span{
        font-size:12px;
        white-space:nowrap;
        color:#727070;
      }
      .postContainer .sortingPost .sortingBtn{
        display:flex;
        flex-direction:row;
        align-items:flex-start;
        gap:0.4rem;
      }
      .postContainer .sortingPost .sortingBtn span{
        color:black; 
        font-weight:600
      }
      .postContainer .newPost{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:95%;
        gap:0.7rem;
        background: white;
        border:1px solid #c5c4c4;
        border-radius: 10px;
        padding:1rem;
      }
      .postContainer .newPost .newPostHeaderBtn{
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
        width: 90%;
        gap:1rem;
      }
      .postContainer .newPost .newPostHeaderBtn button{
        width:100%;
        border-radius:30px;
        border:0.1px solid #b6abab;
        display:flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 2rem;
        cursor:pointer;
        background:white;

      }
      .postContainer .newPost .newPostHeaderBtn button:hover{
        background: #F3F2EF;
      }
      
      .postContainer .newPost .newPostHeaderBtn button span{
        color: #706969;
        font-weight: 500;
        font-size: 14px;

      }
      .postContainer .newPost .newPostHeaderBtn a img{
         width:50px;
         height: 50px;
         border-radius:100%;

      }
      .postContainer .newPost .newPostButtons{
        display:flex;
        width:95%;
        justify-content: space-between;
      }
      .postContainer .newPost .newPostButtons button{
        width:20%;
        height:50px;
        cursor:pointer;
        border:none;
        background:transparent;
        gap:0.5rem;
        display:flex;
        flex-direction: row;
        align-items:center;
        justify-content:center;

      }
      .postContainer .newPost .newPostButtons button:hover{
        background: #F3F2EF;
      }
      .postContainer .newPost .newPostButtons button:nth-child(1) i{
         color: #378FE9;
      }
      .postContainer .newPost .newPostButtons button:nth-child(2) i{
        color: #5F9B41;
      }
      .postContainer .newPost .newPostButtons button:nth-child(3) i{
        color: #C37D16;
      }
      .postContainer .newPost .newPostButtons button:nth-child(4) i{
        color:#E16745;
      }
      .postContainer .newPost .newPostButtons button i{
     font-size:20px
      }

      .postContainer .newPost .newPostButtons button span{
        font-size: 15px;
        font-weight:600;
        color:#706969;
      }
      .sortingByWho{
        display: flex;
        flex-direction: column;
        position: absolute;
        right: 27.5%;
        top: 11rem;
        background: #ffffff;
        width: 11rem;
        gap: 0.4rem;
        border: 1px solid #c1bdbd;
        border-radius: 5px 0px 10px 10px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
       
      }
      .sortingByWho button{
        border:none;
        height:25px;
        background:transparent;
        cursor:pointer;
        display:flex;
        justify-content:flex-start;
        padding-left:1rem;
        align-items:center;

      }
      .sortingByWho button:hover{
        background:#e9e6e6;
      }

         `}
      </style>
      <div className='postContainer'>
         <div className='newPost'> 
         <div className='newPostHeaderBtn'>
          <a href={userImg}> <img src={userImg} alt="" /></a>
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
         <div className='sortingByWho' style={{display:"none"}}>
          <button onClick={handleWhich} id="first"><span>En Önemli</span></button>
          <button onClick={handleWhich}  id="second"><span>En Yeni </span></button>
         </div>
         </div>
        {postJson.map((post , index) => (
          <div key={index} className='postArea'>
            <div className="postLikeUser">
              <div className='first'>
                <img src={userImg} alt="" /> 
                <h6> Barış Tunçdemir </h6>
                <span>bunu beğendi</span>
              </div>
              <div>
                <button> <i className="fa-solid fa-ellipsis"></i></button>
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
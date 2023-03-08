import React from 'react'
import postJson from "./post.json"
import userImg from "./../../ben.jpg"
function Post() {
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
           width: 60%;
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
        

         }`}
      </style>
      <div className='postContainer'>

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
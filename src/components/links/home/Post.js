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
          background: white;
        

        }
        .postContainer .postArea{
          border: 1px solid #c5c4c4;
          border-radius: 10px ;
          display: flex;
          flex-direction:column;
          gap:0.5rem;
          align-items:center;
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
         .postButtons{
          display:flex;
          width:100%;

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
         .postContainer .postArea .profileInfo img{
          width: 40px;
          height: 40px;
          border-radius: 100%;
         }
         .postContainer .postArea .profileInfo{
          display:flex;
          flex-direction:row;
          justify-content:space-between;
         }
         .postContainer .postArea .profileInfo .leftDiv{
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: flex-start;
          
         }
         .postContainer .postArea .profileInfo  .leftInsideDiv{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
         }
         .postContainer .postArea .profileInfo  .leftInsideDiv h4 {
          margin:0;
          
}
         }
        
        `}
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
            <img src={post.userImg} alt="" className='userImg' />
              <div className="leftInsideDiv">
               
                <h4>{post.userName}</h4>
                <span>{post.userInf} </span>
              </div>
            </div>
              <div className='rightDiv'>
                <button >
                  <i className="fa-solid fa-user-plus"></i>
                  <span> Bağlantı Kur</span>
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
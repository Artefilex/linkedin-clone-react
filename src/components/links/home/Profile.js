import React from 'react'
import img from "./../../ben.jpg"

function Profile() {
  return (
    <div className='profileContainer'>
      <style jsx>
        {`
        .profileContainer{ 
          display:flex;
          flex-direction:column;
          width:15%; 
         border-radius:15px;
          position:relative;
          gap:1rem;
         
        }
        .profileContent{
          width: 14rem;
          background: white;
          height: 24.5rem;
          border-radius: 15px;
          border: 1px solid #cac9c9;
        }
        .headerProfile{
          background: linear-gradient( to top, #FFFFFF 0%,  #FFFFFF 80%,  #A0B4B7 50%, #A0B4B7 100%);
          display:flex;
          flex-direction:column;
          align-items: center;
          justify-content:center;
          gap: 0.5rem;
          border-radius:15px;
         
        }
        .headerProfile .imgPosition{
          position:relative;
          top:2.5rem

        }
        .headerProfile img{
          width: 50px;
          heigth: 50px;
          border-radius:100%;
          right:6px;
          bottom:1px;
          padding: 0.2rem;
          position:relative;
          
        }
        .imgPosition{
          background:white;
          width:56px;
          height:56px;
          border-radius: 100%;
        }
        
        
        .headerProfile button{
          outline:none;
          border: none;
          background:transparent;
        }
        .spanDiv{
          position: relative;
          top:3rem;
          display:flex;
          flex-direction:column;

        }
        .spanDiv span:first-child{
          font-weight:600; 
        }
        .spanDiv span:first-child:hover{
           border-bottom:1px solid black;
           
        }
        .spanDiv span:last-child{
          font-size:12px;
          color: #6b6a69;
        }
        .spanDiv ::after{
          border:1px solid black;
        }
        .borderDiv{
          position: relative;
          width: 100%;
          height: 1px;
          top: 4rem;
          background: #cfc7c7;
        }
        .profileInfo{
          position:relative;
          display:flex;
          flex-direction:column;
          top:4rem;
          gap:0.5rem;
          width:90%
        }
        .profileInfo .profileInfoDiv{
          padding:0.5rem 0.2rem;
          display:flex;
          flex-direction:row;
          align-items: center;
          justify-content:space-between;
         
        }
        .profileInfo .profileInfoDiv h6{
          font-size:12px;
          color:#6b6a69;
          margin:0;
        }
        .profileInfo .profileInfoDiv span{
          font-size: 12px;
          color: #0a66c2;
          font-weight: 700;
        }
        .profileInfo .profileInfoDiv:hover{
          background: #E0DFDC;
        }
        .profileAdd{
          position:relative;
          display:flex;
          flex-direction:column;
          top:4rem;
          align-items: flex-start;
          gap:0.5rem;
          padding: 0.5rem 0.5rem 1rem 0rem;
          width:95%
        }
        .profileAdd:hover{
          background: #E0DFDC;
        }
        .profileAdd h6{
          padding-left:1rem;
          margin:0;
          color:#6b6a69;
        }
        .profileAdd a{
          padding-left:1rem;
          color: black;
          font-size:12px;
        }
        .profileAdd a:hover{
          color: #0a66c2;
        }
        .profileSave{
          align-items:center;
          position:relative;
          display:flex;
          flex-direction:row;
          top:4rem;
          gap:0.5rem;
          padding: 0.5rem 0.5rem 1rem 0rem;
          width:85%;
        }
        .profileSave i,
        .profileSave span{
          color:#6b6a69;
          cursor:pointer;
          font-size:13px;
        }
        .profileSave:hover,
        .profileSave:hover i,
        .profileSave:hover span{
          background:#E0DFDC;
          color: #545454;
        }
        .profileSave .profileSaveArea{
          left: 2px;
          width: 90%;
          display: flex;
          gap: 1rem;
          align-items: center;
          position: relative;
        }   
        .profileGroup{
          
          width: 14rem;
          background: white;
          height: 22.5rem;
          border-radius: 15px;
          border: 1px solid #cac9c9;
        }
        .profileGroup ul li {
          list-style: none;
        }
        .profileGroup .profileLatestContent,
        .profileGroup .profileGroupContent{
          display:flex;
          flex-direction:column;
          align-items: flex-start;
          width: 95%;
          position: relative;
          left: 1rem;
        }
        .profileGroup .profileLatestContent ul,
        .profileGroup .profileGroupContent ul{
          display:flex;
          flex-direction:column;
          align-items: flex-start;
          width: 95%;
          position: relative;
          right: 2rem;
        }
        .profileGroup .profileLatestContent h6,
        .profileGroup .profileGroupContent h6{
          margin: 0.5rem 0rem 0rem 0rem;
        }
        .profileGroup .profileGroupContent h6,
        .profileGroup .profileFollowingHastagContent h6,
        .profileGroup .profileActivityContent h6 {
          color: #0a66c2;
          cursor: pointer;

        }
        .profileGroup .profileGroupContent h6:hover,
        .profileGroup .profileActivityContent h6:hover{
          border-bottom: 1px solid  #0a66c2
        }
        .profileGroup .profileLatestContent ul li,
        .profileGroup .profileGroupContent ul li{
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: row;
          gap: 1rem;
        }
        .profileGroup ul li:hover{
          background:#E0DFDC;
          color: #545454;
        }
        .profileGroup .profileLatestContent span,
        .profileGroup .profileGroupContent span,
        .profileGroup .profileLatestContent i,
        .profileGroup .profileGroupContent i{
          font-size: 13px;
          color: #6b6a69;
        }
        .profileGroup .profileActivityContent{
          display:flex;
          flex-direction:row;
          justify-content: space-between;
          width: 90%;
          padding:0rem 1rem;
        }
        .profileGroup .profileActivityContent h6{
          margin: 0;
        }
        .profileGroup .profileActivityContent button{
          border:none;
          outline:none;
          cursor: pointer;
          background:transparent;
        
        }
        .profileGroup .profileFollowingHastagContent{
          display: flex;
          padding: 0rem 1rem;
                }
        .profileGroup .profileFollowingHastagContent a{
          text-decoration: none;
        }
        .profileGroup .profileMoreContent button{
             border: none;
             outline: none;
             color:#6B6A69;
             background: transparent;
             cursor:pointer;

        }
        `}
      </style>

    <div className='profileContent'>
    < div className='headerProfile'>
       <div className='imgPosition'>
      <button> <img src={img} alt="" /></button>
       </div>
      <div className="spanDiv">
      <span>Barış Tunçdemir</span>
        <span className='spanFor'>
          Frontend Developer Candidate</span>
         
      </div>
      <div className='borderDiv'></div>
      <div className="profileInfo">
        <div className='profileInfoDiv'> <h6> Kişi profilinizi görüntüledi</h6>  <span>44</span> </div>
        <div className='profileInfoDiv'><h6> Gönderileriniz için Gösterim</h6> <span>4556</span> </div>
      </div>
      <div className='borderDiv'></div>
      <div className='profileAdd'>
      
          <h6>Özel araç ve içgörülere erişin</h6>
          <a href={img}> Premium ücretsiz deneyin</a>
      
      </div>
      <div className='borderDiv'></div>
  
      <div className='profileSave'>
      <div className="profileSaveArea">
      <i className="fa-solid fa-bookmark"></i>
      <span>Ögelerim</span>
      </div>
      </div>
      </div>
    </div>
    <div className='profileGroup'>
      <div className='profileLatestContent'>
      <h6>En yeni </h6>
        <ul>
          <li><i className="fa-solid fa-people-group"></i> <span>Lorem, ipsum dolor.</span></li>
          <li><i className="fa-solid fa-people-group"></i><span>Lorem, ipsum dolor.</span></li>
          <li><i className="fa-solid fa-people-group"></i> <span>Lorem, ipsum dolor.</span></li>
          <li><i className="fa-solid fa-people-group"></i> <span>Lorem, ipsum dolor.</span></li>
        </ul>
      </div>
      <div className='profileGroupContent'>
        <h6>Gruplar</h6>
        <ul>
        <li><i className="fa-solid fa-people-group"></i> <span>Lorem, ipsum dolor.</span></li>
        <li><i className="fa-solid fa-people-group"></i> <span>Lorem, ipsum dolor.</span></li>
        <li><i className="fa-solid fa-people-group"></i> <span>Lorem, ipsum dolor.</span></li>
        <li><i className="fa-solid fa-people-group"></i> <span>Lorem, ipsum dolor.</span></li>
        </ul>
        </div>
      <div>
       <div className='profileActivityContent'><h6>Etkinlikler</h6> <button><i className="fa-solid fa-plus"></i></button></div>
      </div>
      <div className='profileFollowingHastagContent'> <a href={img}> <h6>Takip edilen Hastagler</h6></a> </div>
      <div className='profileMoreContent'> <button> Daha fazla keşfet</button> </div>
    </div>
    
    </div>
  )
}

export default Profile
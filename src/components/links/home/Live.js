import React from 'react'
import liveJson from "./Live.json"
function Live() {
  return (
    <div className='liveDiv'>
      <style jsx>
       {`
       .liveDiv{
        width: 19%;
        display: flex;
        flex-direction:column;
        align-items:center;
        gap: 0.2rem;

       }`}



      </style>
       <div className='liveFollower'>
        <div className='followerHeader'>
          <span>Akışınıza Ekleyin </span>
          
        </div>
        <div className='liveJsonContainer' >
          {
            liveJson.map((live,index)=>(
                <div key={index} className='liveOffer'>
                    <button>
                      <img src={live.logo} alt="bla" />
                    </button>
                    <div className='liveOfferRight'>
                       <h6>{live.companyName}</h6>
                       <span>{live.subTitle}</span>
                       <button> <i className="fa-solid fa-plus"></i> 
                                 Takip Et
                       </button>
                    </div>
                </div>
           ))
          }
        </div>
       </div>


      </div>
  )
}

export default Live
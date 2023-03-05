import React from 'react'
import Live from './Live'
import Post from './Post'
import Profile from './Profile'
function Home() {
  
  return (
   <>
    <div className={"container"}>

      <style jsx>{`
       .container{
          display:flex;
          flex-direction: row;
          position: absolute;
          top:6rem;
          width:95%;
          justify-content: center;
          gap: 1rem;

       }`}</style>
      <Profile/>
      <Post/>
      <Live/>
    </div>
   </>
  )
}

export default Home
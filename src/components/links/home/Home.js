import React from 'react'
import Live from './Live'
import Post from './Post'
import Profile from './Profile'
import "./home.css"
function Home() {
  
  return (   
    <div className="container">
      <Profile/>
      <Post/>
      <Live/>
    </div>
  )
}

export default Home
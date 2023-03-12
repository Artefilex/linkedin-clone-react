import React from 'react'
import Live from './Live'
import Post from './Post'
import Profile from './Profile'
import "./home.css"
import {ButtonProvider} from '../../../context/ButtonContenx'
function Home() {

  return (

    <div className="container">
      <ButtonProvider>
       <Profile/>
        <Post/>
        <Live/>
      </ButtonProvider>
    </div>

  )
}

export default Home
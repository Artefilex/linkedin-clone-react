import {useEffect} from 'react'
import Live from './Live'
import Post from './Post'
import Profile from './Profile'
import "./home.css"
import {ButtonProvider} from '../../../context/ButtonContenx'
import { useOpacity } from '../../../context/OpacityContex'
function Home() {
 const {opacity} = useOpacity()
 useEffect(()=>{
  if(opacity){
    document.querySelector(".container").style.opacity= "0.5"
  }else{
    document.querySelector(".container").style.opacity= "1"
  }
 })
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
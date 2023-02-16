import React from 'react'
import styles from "../links.module.css"
import Live from './Live'
import Post from './Post'
import Profile from './Profile'
function Home() {
  return (
   <>
    <div className={styles.container}>
      <Profile/>
      <Post/>
      <Live/>
    </div>
   </>
  )
}

export default Home
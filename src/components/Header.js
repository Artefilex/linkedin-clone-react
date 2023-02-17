// import { useState } from "react"
// import { Formik } from 'formik'
import Logo from "../components/lk.png"
import styles from "../components/styles.module.css"
import Home from './links/home/Home'
import Network from './links/Network'
import Advertisment from './links/Advertisment'
import Comment from './links/Comment'
import Notifications from "./links/Notifications"
import User from "./links/User"
import Fastjob from './links/Fastjob'
import Job from './links/Job'
import { BrowserRouter as Router, Routes,Route, NavLink } from 'react-router-dom'


function Header() {


 return (
  <>
    <div className={styles.container}>
    <Router>

       <div className={styles.links} >
       <img src={Logo} alt="logo" className={styles.logo} />
      <nav>
        <ul >
          <li >
          <button>
             
           <div className={styles.iconDiv}>
              <span>
               <i className="fa-solid fa-magnifying-glass fa-xl"></i>
               Arama Yap</span>
           </div>
          </button>

         </li>
         <li > 
            <NavLink to="/" className={({ isActive }) =>  isActive ? styles.active : undefined}  > 

               <div className={styles.iconDiv}   >
                      <i className="fa-solid fa-house  fa-xl"> </i>
                       <div className={styles.iconSpan}>    
                        <span > Ana Sayfa</span>
                        
                       </div>
                </div>
            </NavLink>
        </li>
        <li  >
            <NavLink to="network"   className={({ isActive }) =>  isActive ?  styles.active  : undefined}   >
            <div  className={styles.iconDiv}  >
               <i className="fa-solid fa-user-group  fa-xl"></i>
               <div className={styles.iconSpan}>
               <span  >Ağım</span>
              
               </div>
             </div>
            </NavLink>
        </li>
        <li>  
          <NavLink to="jobadvertisement"  className={({ isActive }) =>  isActive ?  styles.active  : undefined}  >
             <div className={styles.iconDiv}>
             <i className="fa-solid fa-briefcase  fa-xl"></i>
             <div className={styles.iconSpan}>
             <span>İş İlanları </span>
             
             </div>
             </div>
          </NavLink>
        </li>
        <li>
         <NavLink to="comment" className={({ isActive }) =>  isActive ?  styles.active  : undefined}  > 
            <div className={styles.iconDiv}>
            <i className="fa-solid fa-comment-dots  fa-xl"></i>
            <div className={styles.iconSpan}>
            <span className="ascasc">Mesajlaşma</span>
           
             </div>
            </div>
         </NavLink>
        </li>
        <li> 
          <NavLink to="notifications"className={({ isActive }) =>  isActive ?  styles.active  : undefined}   >
            <div className={styles.iconDiv}>
            <i className="fa-solid fa-bell  fa-xl"></i>
            <div className={styles.iconSpan}>
            <span>Bildirimler</span>
          
             </div>
            </div>
          </NavLink>
        </li>
    
        <li> 
          <NavLink to="user" > 
           <div>
           <img src="iii" alt="user-img" />
            <span>Ben</span>
            </div>  
          </NavLink>
        </li>
  
     <li> 
     <NavLink to="job" className={({ isActive }) =>  isActive ?  styles.active  : undefined} >
      <div className={styles.iconDiv}>
      <i className="fa-solid fa-list-ul  fa-xl"></i>
      <div className={styles.iconSpan}>
         <span >İş</span>

      </div>
      </div>

    </NavLink>
    </li>
    <li>
    <NavLink to="fastJob" > 
    <span> Premiumu <br /> ücretsiz deneyin.</span>
    </NavLink>
    </li>
    </ul>
    
    </nav>
    </div>
    <Routes>
    <Route path='/' element={<Home/>}> </Route>
    
    <Route path="/network" element={<Network />} > </Route>
    <Route path="/jobadvertisement" element={<Advertisment />}></Route>
    <Route path="/comment" element={<Comment />}></Route>
    <Route path="/notifications" element={<Notifications />}> </Route>
    <Route path="/user" element={<User />}> </Route>
    <Route path="/fastjob" element={<Fastjob />}> </Route>
    <Route path="/job" element={<Job />}> </Route>
    </Routes>
    </Router>
    </div>
  </>
 )
}

export default Header


    
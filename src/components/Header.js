import { useState } from "react"

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
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import img from "../components/ben.jpg"
import UserInf from './links/userInf/UserInf'
// import ThreeDots from "./links/userInf/ThreeDots"





function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDot, setIsOpenDot] = useState(false);
  const [count, setCount] = useState(0)


 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDot = () => {
    if (count % 2 === 0) {
      setIsOpenDot(false)
    }
    else {
      setIsOpenDot(true);
    }

  };


//  anasyafa

  return (
    <>

      <div className={styles.container}>
        <Router>

          <div className={styles.links} >
            <img src={Logo} alt="logo" className={styles.logo} />
            <nav>
              <ul >
                <li  >

                  <div className={styles.iconDiv}>

                    <div className={styles.inputDiv}>
                      <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                      <input type="text" placeholder=" Arama Yap" />
                    </div>

                  </div>


                </li>
                <li >
                  <NavLink to="/"   className={({ isActive }) => isActive ? styles.active : undefined}   >

                    <div   className={styles.iconDiv}   >
                      <i className="fa-solid fa-house  fa-xl" >  </i>
                      <div className={styles.iconSpan}>
                        <span > Ana Sayfa</span>

                      </div>
                    </div>
                  </NavLink>
                </li>
                <li   >
                  <NavLink to="network" className={({ isActive }) => isActive ? styles.active : undefined}    >
                    <div className={styles.iconDiv}  >
                      <i className="fa-solid fa-user-group  fa-xl"></i>
                      <div className={styles.iconSpan}>
                        <span  >Ağım</span>

                      </div>
                    </div>
                  </NavLink>
                </li>
                <li  >
                  <NavLink to="jobadvertisement" className={({ isActive }) => isActive ? styles.active  : undefined }   >
                    <div className={styles.iconDiv}>
                      <i className="fa-solid fa-briefcase  fa-xl"></i>
                      <div className={styles.iconSpan}>
                        <span>İş İlanları </span>

                      </div>
                    </div>
                  </NavLink>
                </li>
                <li  className={styles.navbarLastItem}   >
                  <NavLink to="comment" className={({ isActive }) => isActive ? styles.active : undefined}   >
                    <div className={styles.iconDiv}>
                      <i className="fa-solid fa-comment-dots  fa-xl"></i>
                      <div className={styles.iconSpan}>
                        <span className="ascasc">Mesajlaşma</span>

                      </div>
                    </div>
                  </NavLink>
                </li>
                <li  className={styles.navbarFourItem}  >
                  <NavLink to="notifications" className={({ isActive }) => isActive ? styles.active : undefined} >
                    <div className={styles.iconDiv}>
                      <i className="fa-solid fa-bell  fa-xl"></i>
                      <div className={styles.iconSpan}>
                        <span>Bildirimler</span>
                      </div>
                    </div>
                  </NavLink>
                </li>

                <li className={styles.navbarThreeItem}   >
                  <NavLink to="user" onClick={toggleSidebar} >
                    <div className={styles.userDiv}>
                      <img src={img} className={styles.userImg} alt="user-img" />
                      <button className={styles.userDownBtn} ><span>Ben</span> <i className="fa-solid fa-sort-down"></i> </button>
                      <div className={styles.altLink}>
                        {
                          isOpen && <UserInf />
                        }



                      </div>
                    </div>
                  </NavLink>
                </li>

                <li className={styles.navbarSecondItem}>
                  <NavLink to="job" className={({ isActive }) => isActive ? styles.active : undefined}   >
                    <div className={styles.iconDiv}>
                      <i className="fa-solid fa-list-ul  fa-xl"></i>
                      <div className={styles.iconSpan}>
                        <span >İş</span>

                      </div>
                    </div>

                  </NavLink>
                </li>

                <li className={styles.navbarFirstItem} >
                  <NavLink to="fastJob"   >
                    <span> Premiumu <br /> ücretsiz deneyin.</span>
                  </NavLink>
                </li>







                <li className={styles.phoneDot} onClick={() => setCount(count + 1)}>
                  <div className={styles.userDiv}>
                    <i onClick={toggleDot} className="fa-solid fa-ellipsis"></i>

                    <div className={styles.altLink}>
                      {
                        isOpenDot && (<>
                          <div className={styles.openSideBar}>

                                <li  className={styles.navbarLastItem}   >
                                  <NavLink to="comment" className={({ isActive }) => isActive ? styles.active : undefined}   >
                                    <div className={styles.iconDiv}>
                                      <i className="fa-solid fa-comment-dots  fa-xl"></i>
                                      <div className={styles.iconSpan}>
                                        <span className="ascasc">Mesajlaşma</span>

                                      </div>
                                    </div>
                                  </NavLink>
                                </li>
                                <li  className={styles.navbarFourItem}  >
                                  <NavLink to="notifications" className={({ isActive }) => isActive ? styles.active : undefined} >
                                    <div className={styles.iconDiv}>
                                      <i className="fa-solid fa-bell  fa-xl"></i>
                                      <div className={styles.iconSpan}>
                                        <span>Bildirimler</span>
                                      </div>
                                    </div>
                                  </NavLink>
                                </li>

                                <li className={styles.navbarThreeItem}   >
                                  <NavLink to="user" onClick={toggleSidebar} >
                                    <div className={styles.userDiv}>
                                      <img src={img} className={styles.userImg} alt="user-img" />
                                      <button className={styles.userDownBtn} ><span>Ben</span> <i className="fa-solid fa-sort-down"></i> </button>
                                      <div className={styles.altLink}>
                                        {
                                          isOpen && <UserInf />
                                        }



                                      </div>
                                    </div>
                                  </NavLink>
                                </li>

                                <li className={styles.navbarSecondItem}>
                                  <NavLink to="job" className={({ isActive }) => isActive ? styles.active : undefined}   >
                                    <div className={styles.iconDiv}>
                                      <i className="fa-solid fa-list-ul  fa-xl"></i>
                                      <div className={styles.iconSpan}>
                                        <span >İş</span>

                                      </div>
                                    </div>

                                  </NavLink>
                                </li>

                                <li className={styles.navbarFirstItem} >
                                  <NavLink to="fastJob"   >
                                    <span id="span"> Premiumu <br /> ücretsiz deneyin.</span>
                                  </NavLink>


                                </li>
                          </div>
                        </>)

                      }


                    </div>
                  </div>

                </li>




              </ul>
             
            </nav>
          </div>





          <Routes>

            <Route path='/' element={<Home />}> </Route>

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


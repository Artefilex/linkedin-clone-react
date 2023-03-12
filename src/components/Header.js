import { useState ,useEffect} from "react"

import Logo from "../components/lk.png"
import styles from "../components/styles.module.css"
import Home from './links/home/Home'
import Network from './links/Network'
import Advertisment from './links/Advertisment'
import Comment from './links/Comment'
import Notifications from "./links/Notifications"
import Fastjob from './links/Fastjob'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import img from "../components/ben.jpg"
import UserInf from './links/userInf/UserInf'
import Sidebar from "./links/Sidebar/Sidebar"


function Header() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDot, setIsOpenDot] = useState(false);
  const [count, setCount] = useState(0)
  const [openSideBar,setOpenSideBar] = useState(false)
  const [hideDivs, setHideDivs] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
 
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
   


  const  handleInput = (e) =>{
    e.currentTarget.nextElementSibling.style.display = `flex `
    setHideDivs(true);
    if(hideDivs === false  &&  screenWidth <= 900 ){
      e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.style.width="90%"
      e.currentTarget.parentElement.parentElement.parentElement.style.width="90%"
      e.currentTarget.parentElement.style.width="90%"
      e.currentTarget.nextElementSibling.style.width= "100%"
      e.currentTarget.parentElement.parentElement.parentElement.nextElementSibling.style.display= "none"
      e.currentTarget.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.style.display= "none"
      e.currentTarget.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.style.display= "none"
      e.currentTarget.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display= "none"
      e.currentTarget.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display= "none"
      e.currentTarget.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display= "none"   
      e.currentTarget.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display= "none"
      e.currentTarget.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display= "none"    
   
    }
  else if (screenWidth >= 900  )  {
    e.currentTarget.parentElement.parentElement.parentElement.nextElementSibling.style.display= "flex"
    e.currentTarget.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.style.display= "flex"
    e.currentTarget.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.style.display= "flex"
    e.currentTarget.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display= "flex"
    e.currentTarget.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display= "flex"
    e.currentTarget.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display= "flex"   
    e.currentTarget.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display= "flex"
    e.currentTarget.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display= "flex"    
   
  }
}
  
 
  const showSidebar = () =>{
    setOpenSideBar(!openSideBar)
  }
  

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

  const openWhichLi = (activeLi) =>{
    if(activeLi.id === "1"){
    setOpenSideBar(false)
    document.body.style.background = "rgb(243, 242, 239)"
    }else{
      setIsOpen(false)
      document.body.style.background = "rgba(61, 61, 60, 0.76)"
        if(openSideBar){
          document.body.style.background = "rgb(243, 242, 239)"
          // document.querySelector(".container").style.opacity= "1";
        }
        else{
          document.body.style.background = "rgba(61, 61, 60, 0.76)"
          // document.querySelector(".container").style.opacity= "0.5";
        } 
    }
  }

  return (
    <>
      <div className={styles.container}>
        <Router>
          <div className={styles.position}>
          <div className={styles.links} >
            <img src={Logo} alt="logo" className={styles.logo} />
            <nav  >
              <ul >
                <li>
                  <div className={styles.iconDiv}>
                    <div className={styles.inputDiv}>
                     <button onClick={ handleInput }> <i className="fa-solid fa-magnifying-glass fa-xl" ></i></button>
                      <input type="text" placeholder=" Arama Yap" />
                      <span>Arama Yap</span>
                    </div>                 
                  </div>
                </li>
                
                 <li  >
                <NavLink to="/" className={({ isActive }) => isActive ? styles.active : undefined}   >
                <div   className={styles.iconDiv}   >
                  <i className="fa-solid fa-house  fa-xl" > </i>
                  <div className={styles.iconSpan}>
                    <span > Ana Sayfa</span>
                  </div>
                </div>
                </NavLink>
                </li>
                <li>
                  <NavLink to="networks"  className={({ isActive }) => isActive ? styles.active : undefined}    >
                    <div className={styles.iconDiv}  >
                      <i className="fa-solid fa-user-group  fa-xl"></i>
                      <div className={styles.iconSpan}>
                        <span >Ağım</span>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li>
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
                <li   className={styles.navbarThreeItem} onClick={(e)=>openWhichLi( e.currentTarget)} id="1"  >
                <NavLink  onClick={toggleSidebar} >
                <div className={styles.userDivs}>
                  <img src={img} className={styles.userImg} alt="user-img" />
                  <button className={`${styles.userDownBtn} userDownBtnJsx `} ><span>Ben</span> <i className="fa-solid fa-sort-down"></i> </button>
                  <div className={`${styles.altLink} altLink`} style={{zIndex: 1}}>
                  
                   
                  </div>
                </div>
                </NavLink>
                </li>
                <li className={styles.navbarSecondItem} onClick={(e)=> openWhichLi(e.currentTarget)} id="2"  >
                <NavLink  onClick={showSidebar} className={styles.showSidebar} >
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
                                <li className={styles.navbarThreeItem}   onClick={(e)=>openWhichLi( e.currentTarget)} id="1" >
                                  <a href="user" onClick={toggleSidebar} >
                                    <div className={styles.userDiv}>
                                      <img src={img} className={styles.userImg} alt="user-img" />
                                      <button className={styles.userDownBtn} ><span>Ben</span> <i className="fa-solid fa-sort-down"></i> </button>
                                      <div className={styles.altLink}>
                                      </div>
                                    </div>
                                  </a>
                                </li>                   
                                <li className={styles.navbarSecondItem} onClick={(e)=> openWhichLi(e.currentTarget)} id="2"  >
                                    <NavLink   to="job" 
                                    onClick={showSidebar} className={styles.showSidebar} >
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
            {
                isOpen && <UserInf  />
             }
            { openSideBar &&  <Sidebar/>}
          {
         hideDivs &&  (
              <>
                <div className={styles.linksBottom} id="bottomNav">
                <nav >
                 <ul>
                    <li  >
                    <NavLink to="/"   className={({ isActive }) => isActive ? styles.active : undefined}   >
                    <div   className={styles.iconDiv}   >
                      <i className="fa-solid fa-house  fa-xl" >  </i>
                      <div className={styles.iconSpan}>
                        <span > Ana Sayfa</span>

                      </div>
                    </div>
                    </NavLink>
                    </li>
                    <li>
                      <NavLink to="networks" className={({ isActive }) => isActive ? styles.active : undefined}    >
                        <div className={styles.iconDiv}  >
                          <i className="fa-solid fa-user-group fa-xl"></i>
                          <div className={styles.iconSpan}>
                            <span  >Ağım</span>

                          </div>
                        </div>
                      </NavLink>
                    </li>
                    <li>
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
                    <li   className={styles.navbarThreeItem} onClick={(e)=>openWhichLi( e.currentTarget)} id="1"   >
                    <a  href="user" onClick={toggleSidebar} >
                    <div className={styles.userDivs}>
                      <img src={img} className={styles.userImg} alt="user-img" />
                      <button className={styles.userDownBtn} ><span>Ben</span> <i className="fa-solid fa-sort-down"></i> </button>
                      <div className={styles.altLink}>
                        {
                          isOpen && <UserInf  />
                        }
                      </div>
                    </div>
                    </a>
                    </li>
                    <li className={styles.navbarSecondItem} onClick={(e)=> openWhichLi(e.currentTarget)} id="2"  >
                    <NavLink   to="job" 
                    onClick={showSidebar} className={styles.showSidebar} >
                    <div className={styles.iconDiv}>
                      <i className="fa-solid fa-list-ul  fa-xl"></i>
                      <div className={styles.iconSpan}>
                        <span className="workSpan" >İş</span>
                      </div>
                    </div>
                    { openSideBar &&  <Sidebar/>     }

                    </NavLink>
                    </li>
                    <li className={styles.navbarFirstItem} >
                    <NavLink to="fastJob">
                    <span> Premiumu <br /> ücretsiz deneyin.</span>
                    </NavLink>
                    </li>
                 </ul>
                  </nav>
             </div>        
              </>
            )
          }
          </div>
             




          </div>
          <Routes>
            <Route path='/'  element={<Home/>}> </Route>
            <Route path="/networks" element={<Network/>} ></Route>
            <Route path="/jobadvertisement" element={<Advertisment/>}></Route>
            <Route path="/comment" element={<Comment/>}></Route>
            <Route path="/notifications" element={<Notifications/>}></Route>
            <Route path="/fastjob" element={<Fastjob/>}></Route>  
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default Header



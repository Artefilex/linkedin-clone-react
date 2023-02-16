
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

 let activeStyle = {
  
  paddingBottom:"1rem",
  borderBottom: "2px solid black"
 }
 return (
  <>
    <div className={styles.container}>
    <Router>

       <div className={styles.links} >
       <img src={Logo} alt="logo" className={styles.logo} />
      <nav>
        <ul >
          <li>
            <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined }>
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            
           </NavLink>
         </li>
         <li> 
            <NavLink to="home" style={({ isActive }) => isActive ? activeStyle : undefined }> 
            <i className="fa-solid fa-house  fa-lg"> </i>
            </NavLink>
        </li>
        <li>
            <NavLink to="network" style={({ isActive }) => isActive ? activeStyle : undefined } >
               <i className="fa-solid fa-user-group  fa-lg"></i>
            </NavLink>
        </li>
        <li>  
          <NavLink to="jobadvertisement" style={({ isActive }) => isActive ? activeStyle : undefined } >
             <i className="fa-solid fa-briefcase  fa-lg"></i>
          </NavLink>
        </li>
        <li>
         <NavLink to="comment" style={({ isActive }) => isActive ? activeStyle : undefined }> 
            <i className="fa-solid fa-comment-dots  fa-lg"></i>
         </NavLink>
        </li>
        <li> 
          <NavLink to="notifications" style={({ isActive }) => isActive ? activeStyle : undefined }>
            <i className="fa-solid fa-bell  fa-lg"></i>
          </NavLink>
        </li>
    
        <li> 
          <NavLink to="user" > 
            <img src="iii" alt="user-img" />  
          </NavLink>
        </li>
    
     
 
      
     <li> 
     <NavLink to="job" style={({ isActive }) => isActive ? activeStyle : undefined }>
    <i className="fa-solid fa-list-ul  fa-lg"></i>

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
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/network" element={<Network />} > </Route>
    <Route path="/jobadvertisement" element={<Advertisment />}></Route>
    <Route path="/comement" element={<Comment />}></Route>
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


    //  <Router>
    //       <div>
    //       <nav>
    //           <ul>
    //             <li>
    //               <NavLink style={({ isActive }) =>
    //                 isActive ? activeStyle : undefined
    //               } to="/">Home</NavLink>
    //             </li>
    //             <li>
    //               <NavLink style={({ isActive }) =>
    //                 isActive ? activeStyle : undefined
    //               } to="/about">About</NavLink>
    //             </li>
    //             <li>
    //               <NavLink style={({ isActive }) =>
    //                 isActive ? activeStyle : undefined
    //               } to="/users">Users</NavLink>
    //             </li>

    //           </ul>
    //         </nav>

    //          A <Switch> looks through its children <Route>s and
    //           renders the first one that matches the current URL. 

//       </div >
//     </Router >
//   ); 
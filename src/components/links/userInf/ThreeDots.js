import { useState } from 'react'

import styles from "../links.module.css"
import UserInf from './UserInf'


function ThreeDots({isOpenDot} ) {
  
    const [activeDiv,setActiveDiv] = useState(false)
    const handleActive = ()=>{
        setActiveDiv(!activeDiv)
    }
  


    return (
        
        <>
        <div className={styles.dotLink} onClick={isOpenDot} >
            <div  onClick={()=>setActiveDiv(true)} >nnn
            {isOpenDot === true ? <UserInf/> :null}
            </div>
            <div> <button onClick={handleActive}>c</button></div>
            <div><button onClick={handleActive}>cc</button></div>
        </div>
         
        </>
    )
}

export default ThreeDots
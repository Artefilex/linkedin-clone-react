import React from 'react'
import styles from "../links.module.css"
import img from "../../ben.jpg"

function UserInf() {
  return (
    <div className={`${styles.userInfdownDiv} jsxUserInf`}>
        <style jsx>{`
              .jsxUserInf{
                cursor: default;
              }
        `}
        </style>
        <div className={styles.userInfo} > 
            <div className={styles.userInformation}>
                 <div className={styles.userInfImg}> <img src={img} alt="" /></div>
                <div className={styles.userInfSpan}> 
                   <span style={{fontSize:"1rem", fontWeight:"bold",whiteSpace:"nowrap"}}> Barış Tunçdemir</span>
                   <span> Front End Developer</span>
                   <span> Candidate</span></div>
                </div>
            <div className={styles.userInfBtnDiv}> <button> Profili Görüntüleyin</button> </div>
        </div >
        <div className={styles.account}>
            <div className={styles.accountNav}> 
               <h4>Hesap </h4>
                <ul className={styles.accountBtn}>
                    <li> <span className={styles.firstSpan} onClick={()=> alert("dv")}>Premium'u ücretsiz deneyin</span></li>
                    <li><span onClick={()=> alert("dv")}>Ayarlar ve Gizlilik</span> </li>
                    <li> <span onClick={()=> alert("dv")}>Yardım</span> </li>
                    <li><span onClick={()=> alert("dv")}>Dil</span> </li>
                </ul>
            </div>
        </div >
        <div className={styles.manage}>
        <div className={styles.accountNav}> 
               <h4>Yönet </h4>
                <ul className={styles.accountBtn}>
                    <li> <span onClick={()=> alert("dv")}>Gönderi ve Faaliyetler</span> </li>
                    <li><span onClick={()=> alert("dv")}>İş İlanı Yayınlama Hesabı</span> </li>
                </ul>
            
            </div>
            
        </div >
        <div className={styles.out}>
          <span onClick={()=> alert("dv")}>Oturumu Kapat</span>
        </div >
    </div>
  )
}

export default UserInf
import { createContext,useContext,useState } from "react";

const ButtonContext = createContext()

const ButtonProvider = ({children})=>{
    const [down,setDown] = useState("down")
    const values = { down, setDown }
    return <ButtonContext.Provider value={values}>{children}</ButtonContext.Provider>
}

 const useChangeButton =()=> useContext(ButtonContext)
 export  {useChangeButton, ButtonProvider}
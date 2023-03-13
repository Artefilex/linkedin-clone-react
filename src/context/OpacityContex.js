import { createContext,useContext,useState } from "react";

const OpacityContext = createContext()
const OpacityProviver = ({children})=>{
     const [opacity,setOpacity] = useState(null)
     console.log(opacity)
     const values = {opacity,setOpacity}
    return <OpacityContext.Provider value={values}>{children}</OpacityContext.Provider>
}


const useOpacity =()=> useContext(OpacityContext)

export {useOpacity,OpacityProviver}
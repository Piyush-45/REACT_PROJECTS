import { useState, useEffect } from "react";

const UseEffectCleanup = ()=>{
const [size, setSize] = useState(window.innerWidth)


const checkSize = ()=> setSize(window.innerWidth)

useEffect(()=>{
    console.log("heeee")
    window.addEventListener('resize', checkSize)


},[])
    return(
        <h1>Window is ${size} px wide</h1>
    )

}


export default UseEffectCleanup
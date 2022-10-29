import { useState, useEffect } from "react";

// ? by default runs after every re-render

const UseEffectBasics = () => {
const[value, setValue]  = useState(0)
    useEffect(() => {
        console.log("call Use Effect")
        if(value >2 ){
            document.title = `new message (${value})`
        }
    },[])
    console.log('render component');
    return <>
    <h1>{value}</h1>
    <button onClick={()=> setValue(value + 1)}>CLICK ME</button>
    
    
    </>
}

export default UseEffectBasics;













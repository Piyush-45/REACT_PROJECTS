import { useState } from "react";

const ShortCircuit = ()=>{
    const[text, setText] = useState('')
    const[isError, setIsError] = useState(false)


    return(

       <>
        <h2>{text || 'john doe'}</h2>
        <button className="btn" onClick={() => setIsError(!isError)}>Toggle</button>
        {isError && <h1>Error...</h1>}
        
        
{/*   */}
{/*
 //? </>Syntax: condition ? <expression if true> : <expression if false></expression>  
*/}

{isError ? <h1>true</h1> : <h1>false</h1>}
       </>
    )
}

export default ShortCircuit



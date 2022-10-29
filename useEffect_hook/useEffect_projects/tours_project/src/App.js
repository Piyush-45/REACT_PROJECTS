import { useState } from "react"
import { useEffect } from "react"

const App = ()=>{

    // const url = 'https://course-api.com/react-tours-project'

    
        const [tours, setTours] = useState([])

      const getTours = async ()=>{
        const response = await fetch(url)
        const tours = await response.json()
        setTours(tours)
        console.log(tours)
      }
    
    useEffect(()=>{
        getTours()
    }, [])
    return(
      <>
    <h1>Our Tours</h1>
    
    <ul>
    {
        tours.map(()=>{
            const{id, image, name, info,price } = tours
            return(
              <li key={id}>
            <img src={image} alt="" />
             <h2>{name}</h2>
              </li>  
            )
        })
    }
    </ul>
      </>
    )
}

export default App
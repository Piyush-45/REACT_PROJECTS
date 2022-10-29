import { useState } from "react"
import './App.css'
import data from "./data"
import List from "./list"
const App = ()=>{

    // ? first i made this, then i Destructured the people into List components
    // ? and used it in list.js
    
    const [people, setPeople] = useState(data)
    return (
        <main>
            <section className="container">
                <h3>{people.length} Birthdays today</h3>
                <List people = {people}/>
                <button onClick={() => setPeople([])}>Clear All</button>
            </section>
        </main>
    )

    
}

export default App
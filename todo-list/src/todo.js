import React, { useState } from "react";
import './App.css'
// import './icons8-plus-30.png'
// import './icons8-minus-30.png'

const Todo = () => {
    const [inputData, setInputData] = useState('')

    // ? for pushing inputData into the array
    const [items, setItems] = useState([]);
    const addItem = () => {
        if (!inputData) {
            alert("Please add some task")

        } else {
            setItems([...items, inputData])
            setInputData('')
        }
    }

    // ? for deleting eachItem
    const removeItem =(id)=>{
        console.log(id)
       let updatedItems = items.filter((elem, ind)=>{
        return ind != id;
        })
        setItems( updatedItems)
     }

     const removeAll = () =>{
        setItems([]) 
     }
    return (

        <>
            
                <div className="main-div">

                    <div className="child-div">
                        <figure>
                            {/* <img src="" alt="" /> */}
                            <figcaption>Add Your Task</figcaption>
                        </figure>

                        <div className="addItems">
                            <input type="text" placeholder="📝 Add Items.."
                                value={inputData}
                                onChange={(e) => setInputData(e.target.value)}
                            />
                            <i className="fa fa-plus add-btn" title="add-task"
                                onClick={addItem}></i>
                        </div>

                        <div className="showItems">
                            {
                                items.map((elem, ind) => {
                                    return (
                                        <div className="eachItem" key={ind}>
                                            <h3>{elem}</h3>
                                            <i className="far fa-trash-alt add-btn" title="delete item" onClick={()=> removeItem(ind)}></i>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>

                        {/* clear all buttons */}

                        <div className="showItems">
                            <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Todo
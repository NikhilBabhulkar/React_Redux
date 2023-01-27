import React, { useState } from 'react'
import "./style.css"
import { useSelector, useDispatch } from "react-redux"
import { addtodo, DeleteToDo, RemoveToDO } from "./actions/index"

function App() {
  const [inputdata, setinputdata] = new useState(" ")
  const dispatch = useDispatch()
  const list = useSelector((state) => state.todoreducer.list);

  return (
    <div className="main">
      <div className="upper">
        <p>Make The List of The Task You have to go Through</p>
      </div>
      <div className="lower">
        <div className="input">
          <input type="text" placeholder='Add list' value={inputdata} onChange={(event) => setinputdata(event.target.value)} />
          <button id='add' onClick={() => dispatch(addtodo(inputdata), setinputdata(''))}>Add</button>
        </div>
        <div className="list">

          {
            list.map((ele) => {
              return (
                <div className="list_items" key={ele.id}>

                  <li>{ele.data} </li>
                  <span onClick={() => dispatch(DeleteToDo(ele.id))}>-</span>

                </div>
              )
            })
          }
        </div>

          <button id='RM' onClick={()=> dispatch(RemoveToDO())}>Remove All</button>

      </div>
    </div >

  )
}

export default App
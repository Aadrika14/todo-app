import { useState } from "react";
import styles from './AddTodo.module.css'

function AddTodo({onNewItem}){
  const [newName,setTodoName]=useState("");
  const [newDate,setTodoDate]=useState("");

  const handleNameChange=(event)=>{
    setTodoName(event.target.value);
  }
  const handleDateChange=(event)=>{
    setTodoDate(event.target.value);
  }
  const handleOnClick=()=>{
    onNewItem(newName,newDate);
    setTodoDate("");
    setTodoName("");
  }

  return (
    <>
    <div className="row">
  <div className="col-6">
    <input type="text" placeholder="enter todo here" value={newName} onChange={handleNameChange} className={styles.inp}/>
  </div>
  <div className="col-4">
    <input type="date" value={newDate} onChange={handleDateChange} className={styles.inp2}/>
  </div>
  <div className="col-2">
  <button type="button" className={styles.btn}  onClick={handleOnClick}>Add</button>
  </div>
</div>
    </>
  )
}
export default AddTodo;
import axios from 'axios';
import { useEffect, useState } from "react";
import TodoInput from "./mainsection/TodoInput";
import styles from './MainSectionPage.module.css'

function MainSectionPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await axios.get("http://localhost:4000/todos");
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    getTodos();
  }, []);

  const addTodo = async(obj) => {
    let data=await axios.post("http://localhost:4000/todos/addtodo",obj)
    let newData=await axios("http://localhost:4000/todos")
    setTodos(newData.data)
  };

  const updateTodo=async(id,updatedData)=>{
    let data=await axios.patch(`http://localhost:4000/todos/${id}`,updatedData)
    console.log(data.data.message)
    let newData=await axios("http://localhost:4000/todos")
    setTodos(newData.data)
  }

  const setDelete=async(id)=>{
    let data=await axios.delete(`http://localhost:4000/todos/${id}`)
    console.log(data.data.message)
    let newData=await axios("http://localhost:4000/todos")
    setTodos(newData.data)
  }

  return (
    <>
    <div className={styles.app}>
      <TodoInput addTodo={addTodo}/>
      <div className={styles.db_elem}>
      {todos.map(({ title, status, _id }) => (
        <div key={_id}>

          <div className={styles.collective}>
          <h1>{title}</h1>
          <button onClick={()=>{
            updateTodo(_id,{status:!status})
          }} className={styles.completed}>{status?"completed":"not completed"}</button>
          <button onClick={()=>{
            setDelete(_id);
          }}>Delete</button>
          </div>

        </div>
      ))}
      </div>
    </div>
    </>
  );
}

export default MainSectionPage;

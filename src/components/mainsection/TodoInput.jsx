import { useState } from "react";
import styles from './TodoInput.module.css'; // Import CSS module

export default function TodoInput({ addTodo, text }) {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    addTodo({
      title: inputText,
      status: false
    });
    setInputText(""); // Clear input after adding todo
  };

  return (
    <>
      <h1>Add your tasks here!</h1>
    <div className={styles.inp}>
      <input
        type="text"
        placeholder="Enter todo"
        value={inputText}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add</button>
      <p>{text}</p> 
    </div>
    </>
  );
}

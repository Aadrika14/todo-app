import { useState } from "react";
import AddTodo from "./mainsection/AddTodo";
import MainHead from "./mainsection/MainHead";
import TodoItems from "./mainsection/TodoItems";
import Container from "./mainsection/Container";

function MainSectionPage() {
  const todoItems = [
    {
      name: 'code',
      date: '24/3/2023'
    },
    {
      name: 'sleep',
      date: '25/3/2023'
    },
    {
      name: 'eat',
      date: '26/3/2023'
    }
  ];

  const [todoShow, setTodo] = useState(todoItems);

  const handleNewItem = (newName, newDate) => { // Define newName and newDate parameters
    console.log(`new item added is ${newName}, ${newDate}`);
    const newTodoItems = [...todoShow, { name: newName, date: newDate }];
    setTodo(newTodoItems);
  }

  const handleDeleteItem=(deletedName)=>{
    
    const newTodoItems=todoShow.filter(item=>item.name!=deletedName);
    setTodo(newTodoItems);
  }

  return (
    <>
      <Container>
        <MainHead/>
      <AddTodo onNewItem={handleNewItem} />
      <TodoItems todoI={todoShow} onDeleteClick={handleDeleteItem} />
      </Container>
    </>
  );
}

export default MainSectionPage;

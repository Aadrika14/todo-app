import TodoItem from "./TodoItem";

function TodoItems({ todoI ,onDeleteClick}) {
  return (
    <>
      {todoI.map((item, index) => (
        <TodoItem key={index} name={item.name} date={item.date} onDeleteClick={onDeleteClick}/>
      ))}
    </>
  );
}

export default TodoItems;

import styles from './TodoItem.module.css'

function TodoItem({ name, date ,onDeleteClick}) { // Destructure props
  return (
    <div className="row kg-row">
      <div className="col-6">
      <span className={styles.col}>
        {name}<hr></hr>
        </span>
      </div>
      <div className="col-4" >
        <span className={styles.col}>
        {date}<hr></hr>
        </span>
      </div>
      <div className="col-2">
        <button type="button" 
        className={styles.btn} onClick={()=>onDeleteClick(name)}>
          Delete
          </button>
      </div>
    </div>
  );
}

export default TodoItem;

import React from 'react'
import axios from 'axios'
import styles from './todos.module.css'

const Todo = ({todo, reloadTodos}) => {
  const toggleCompleted = () => {
    axios
      .post('/api/toggle-completed', {
        id: todo._id,
        text: todo.text,
        completed: !todo.completed,
      })
      .then(reloadTodos)
  }

  const handelDelete = () => {
    axios
      .post('/api/delete-todo', {
        id: todo._id,
      })
      .then(reloadTodos)
  }

  return (
    <>
      <label htmlFor={`toggle-todo-${todo.id}`} className={styles.label}>
        Mark complete
      </label>
      <input
        id={`toggle-todo-${todo.id}`}
        type="checkbox"
        checked={todo.completed}
        onChange={toggleCompleted}
        className={styles.toggle}
      />
      <p className={`${styles.text} ${todo.completed && styles.completed}`}>
        {todo.text}
      </p>
      <label htmlFor={`delete-todo-${todo.id}`} className={styles.label}>
        Delete
      </label>
      <button onClick={handelDelete} className={styles.delete}>
        <span role="img" title="delete this todo" aria-label="delete">
          ❌
        </span>
      </button>
    </>
  )
}

export default Todo

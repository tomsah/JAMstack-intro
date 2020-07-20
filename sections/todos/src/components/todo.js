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
    </>
  )
}

export default Todo

import React from 'react'
import styles from './todos.module.css'

const Todo = ({todo}) => (
  <p className={`${styles.text} ${todo.completed && styles.completed}`}>
    {todo.text}
  </p>
)

export default Todo

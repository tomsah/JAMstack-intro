import React from 'react'
import styles from './form.module.css'

const Form = () => {
  const handleSubmit = event => {
    event.preventDefault()
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name" className={styles.label}>
        Name
        <input type="text" name='name' className={styles.input}/>
      </label>
      <label htmlFor="email" className={styles.label}>
        Email
        <input type="email" name='email' className={styles.input}/>
      </label>
      <label htmlFor="subject" className={styles.label}>
        Subject
        <input type="text" name='subject' className={styles.input}/>
      </label>
      <label htmlFor="body" className={styles.label}>
        Body
        <textarea  name='body' className={styles.input}/>
      </label>
      <button className={styles.button}>Send</button>
    </form>
  )
}

export default Form

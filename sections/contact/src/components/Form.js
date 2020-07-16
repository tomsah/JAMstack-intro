import React, {useReducer} from 'react'
import styles from './form.module.css'

const INITIAL_STATE = {
  name: '',
  email: '',
  subject: '',
  body: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateFieldValue':
      return {
        ...state,
        [action.field]: action.value,
      }
    default:
      return INITIAL_STATE
  }
}

const Form = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const updateFieldValue = (field) => (event) => {
    dispatch({
      type: 'updateFieldValue',
      field,
      value: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(state)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name" className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          className={styles.input}
          value={state.name}
          onChange={updateFieldValue('name')}
        />
      </label>
      <label htmlFor="email" className={styles.label}>
        Email
        <input
          type="email"
          name="email"
          className={styles.input}
          value={state.email}
          onChange={updateFieldValue('email')}
        />
      </label>
      <label htmlFor="subject" className={styles.label}>
        Subject
        <input
          type="text"
          name="subject"
          className={styles.input}
          value={state.subject}
          onChange={updateFieldValue('subject')}
        />
      </label>
      <label htmlFor="body" className={styles.label}>
        Body
        <textarea
          name="body"
          className={styles.input}
          value={state.body}
          onChange={updateFieldValue('body')}
        />
      </label>
      <button className={styles.button}>Send</button>
    </form>
  )
}

export default Form

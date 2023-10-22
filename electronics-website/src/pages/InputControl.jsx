import React from 'react'
// import styles from "./InputControl.module.css"
import styles from "../styles/InputControl.module.css"

const InputControl = (props) => {
  return (
    <div className={styles.container}>
      {props.label && <label></label>}
      <input type="text" {...props} />
    </div>
  )
}

export default InputControl

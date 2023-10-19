import React from 'react'
import styles from "../styles/Home.module.css"
const Heading = ({body}) => {
  return <h1 className={styles.header}>{body}</h1>;
}

export default Heading
import React from 'react'
import styles from "../styles/Pills.module.css"


const Pills = ({setState}) => {
  return (
    <div className={styles.container}>
      <img src="./Pills.png" alt="pills" />
      <button
        onClick={() => setState((prev) => prev + 2)}
        id={styles.redPill}
      ></button>
      <button
        onClick={() => setState((prev) => prev + 1)}
        id={styles.bluePill}
      ></button>
    </div>
  );
}

export default Pills
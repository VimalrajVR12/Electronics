import React from 'react'
import styles from "../styles/Footer.module.css"
import { fbSVG, instaSVG, xSVG, ytSVG } from './SVGs'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <span className={styles.fbSVG}>{fbSVG}</span>
        <span className={styles.xSVG}>{xSVG}</span>
        <span className={styles.instaSVG}>{instaSVG}</span>
        <span className={styles.ytSVG}>{ytSVG}</span>
      </div>
      <p>Email us at <span className={styles.emailContainer}>service@saw.com</span></p>
      <h2 className={styles.head}>Shock and Awe ©</h2>
    </div>
  );
}

export default Footer

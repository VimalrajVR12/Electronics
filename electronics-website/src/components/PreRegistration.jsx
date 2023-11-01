import React,{useState} from 'react'
import styles from "../styles/PreRegistration.module.css";
import {checkSVG, crossSVG} from '../components/SVGs'



const PreRegistration = ({setOpen}) => {
  const [registered,setRegistered] = useState(false);
  const handleRegistration =()=>{
        setRegistered(true)
  }
  return (
    <div className={styles.container}>
      {registered ? (
        <div>
          <span onClick={() => setOpen(false)}>{crossSVG}</span>
          <span className={styles.check}>{checkSVG}</span>
          <p>Dun!! Dun!! Done!!</p>
        </div>
      ) : (
        <>
          <span onClick={() => setOpen(false)}>{crossSVG}</span>
          <form onSubmit={(event)=>{
              event.preventDefault();
              setRegistered(true);
          }}>
            <input required
              type="email"
              name="register"
              placeholder="Enter your email"
            />
            <input style={{cursor:'pointer'}} className={styles.button} type='submit' name='Pre Register' value="Pre Register"/>
          </form>
        </>
      )}
    </div>
  );
}

export default PreRegistration
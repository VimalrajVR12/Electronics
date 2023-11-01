import React, { useState } from 'react'
import styles from "../styles/PreRegister.module.css"
import PreRegistration from './PreRegistration'
import Pills from './Pills'


const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const PreRegister = () => {
  const [state,setState] = useState(0)
  const [open,setOpen] = useState(false)
  const hoverEffect = (event)=>{
    const el = event.target;
    const original = el.innerText;
    let count = 0;
    const int = setInterval(()=>{
        let newText = ""
        for(let i=0; i<count;i++){
          newText += el.textContent[i];
        }
        for(let i=count; i<original.length;i++){
            const rand = Math.floor(Math.random() * 26);
            newText += chars[rand];
        }
        if(count<10){
          el.innerText = newText;
          count++;
        }
        else {
          el.innerText=original
          clearInterval(int);
          goToNext()
        }
    },40)

  }
  const goToNext = () => {
        if (state < 4) setState((prev) => prev + 1);
      }
  const arr = [
    <p
      onMouseOver={hoverEffect}
      
      
      className={styles.sparkling}
      title="Third time's the charm"
    >
      SOMETHING SPECIAL COMING SOON
    </p>,
    <p onMouseOver={hoverEffect}
     className={styles.sparkling}>
      SOMETHING SPECIAL COMING SOON
    </p>,
    <p onMouseOver={hoverEffect}
     className={styles.sparkling}>
      SOMETHING SPECIAL COMING SOON
    </p>,
    <p onMouseOver={hoverEffect}
     className={styles.sparkling}>
      ARE YOU SURE?
    </p>,
    <Pills setState={setState}/>
    ,
    <p>Oll Korrect.</p>,
    <div className={styles.secretContainer}>
      <p>SAWftBook. COMING SOON</p>
      <img src="/SAWftBook.jpg"></img>
      <button onClick={() => setOpen(true)}>Register</button>
    </div>,
  ];
  return (
    <div
      className={styles.container}
    >
      {arr[state]}
      {state < 3 || state===5 ? <button onClick={() => setOpen(true)}>Register</button>:null}
      {open && <PreRegistration setOpen={setOpen} />}
    </div>
  );
}

export default PreRegister
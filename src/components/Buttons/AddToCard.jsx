import React from 'react'
import styles from "./addtocard.module.css"
function AddToCard({handlebtn,children}) {
  return (
    <button className={styles.button} onClick={()=>handlebtn()}>{children}</button>

  )
}

export default AddToCard
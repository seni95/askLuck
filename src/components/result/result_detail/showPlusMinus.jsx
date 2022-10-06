import React from 'react'
import styles from './result_detail.module.css'
const ShowPlusMinus = (props) => {
    const sky=props.sky;
    const ground=props.ground;


  return (
    <div>
    <div id={sky.sign} className={styles.plusMinus}>{sky.sign}</div>
    <div id={ground.sign} className={styles.plusMinus}>{ground.sign}</div>
    </div>
  )
}

export default ShowPlusMinus
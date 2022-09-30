import React from 'react'
import Data from '../data/data';
import CalculateFamily from './calculate_family';
import styles from './calculate_innerAttri.module.css'

const CalculateInnerAttri = (props) => {

    const data = new Data();

  const ground = props.ground;
  const daySky = props.daySky;

  const firstAttri = data.sky[ground.innerAttri.charAt(0)];
  const secondAttri = data.sky[ground.innerAttri.charAt(1)];
  const thirdAttri = data.sky[ground.innerAttri.charAt(2)];

return (
    <div className={styles.container}>
        <div className={styles.element}>
        <span id={firstAttri.color}>{firstAttri.code}</span>
        <span><CalculateFamily
        daySky={daySky}
        ground={firstAttri}
        ></CalculateFamily></span>
        </div>
        
        <div className={styles.element}>
        <span id={secondAttri.color}>{secondAttri.code}</span>
        <span><CalculateFamily
        daySky={daySky}
        ground={secondAttri}
        ></CalculateFamily></span>
        </div>

        <div className={styles.element}>
        <span id={thirdAttri.color}>{thirdAttri.code}</span>
        <span><CalculateFamily
        daySky={daySky}
        ground={thirdAttri}
        ></CalculateFamily></span>
        </div>
    </div>
  )
}

export default CalculateInnerAttri
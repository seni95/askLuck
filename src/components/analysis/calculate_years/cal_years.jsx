import React from 'react'
import Logic from '../../logic/logic'
import styles from './cal_years.module.css'
import Data from '../../data/data'

const CalYears = () => {

    const logic = new Logic();
    const data = new Data();

    const today={
        year:new Date().getFullYear(),
        month:new Date().getMonth()+1,
        date:new Date().getDate()
      }

    const result = logic.returnYearSky(today.year,today.month,today.date);
    const resultG = logic.returnYearGround(today.year,today.month,today.date);

    const yearSkyArr = [];
    const yearGroundArr = [];
    const yearResultArr =[];

      const showCurrentYears =()=>{
        let forkey = 0;
        //대운 순행 함수
        for (let i = 0; i < 10; i++) {
                const returnYearSky = logic.returnYearSky(today.year+i,today.month,today.date);
            yearSkyArr.push(
                <>
                <span key={forkey} className={styles.span} id={returnYearSky.color}>
                    {returnYearSky.code}
                </span>
                </>
            )
            forkey++;
        }


        for (let i = 0; i < 10; i++) {
    const returnYearGround = logic.returnYearGround(today.year+i,today.month,today.date);

            yearGroundArr.push(<>
                <span key={forkey} className={styles.span} id={returnYearGround.color}>
                    {returnYearGround.code}
                </span>
               <span className={styles.years}>{today.year+i}년</span>
                  </>
            )
            forkey++;

        }

        for (let i = 0; i < 10; i++) {
            yearResultArr.push(<span className={styles.pillar}>
                {yearSkyArr[i]}
                {yearGroundArr[i]}
            </span>);

        }

        return yearResultArr;

      }

  return (
    <div className={styles.container}>
       {showCurrentYears()}
    </div>
  )
}

export default CalYears
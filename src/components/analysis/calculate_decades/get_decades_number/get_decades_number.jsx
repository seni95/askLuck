import React from 'react'
import styles from './get_decades_number.module.css'
import CalTimesLogic from '../../analysis_logic/cal_times_logic'

const GetDecadesNumber = (props) => {


    const cal_times_logic = new CalTimesLogic();

    const selectedYear = props.selectedYear;
    const selectedMonth = props.selectedMonth+1<12?props.selectedMonth+1:0;
    const selectedDay = props.selectedDay;

    const monthIndex = props.monthIndex;

    const order= props.order;
    const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate();

  
  return (
    <>

   <div className={styles.h1}>
    {cal_times_logic.decadesNum(selectedMonth,selectedDay,monthIndex,dateTotalCount)+(order*10)}
   </div>
   </>
  )
}

export default GetDecadesNumber
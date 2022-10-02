import React from 'react'
import CalTimesLogic from '../../analysis_logic/cal_times_logic';
import styles from './get_decades_number.module.css'

const GetDecadesNumberR = (props) => {


    const cal_times_logic = new CalTimesLogic();

    const selectedYear = props.selectedYear;
    const selectedMonth = props.selectedMonth+1<12?props.selectedMonth+1:0;
    const selectedDay = Number(props.selectedDay);

    const monthIndex = props.monthIndex;

    const order= props.order;
    const dateTotalCount = new Date(selectedYear, selectedMonth-1<0?11:selectedMonth-1, 0).getDate();

  
  return (
    <>

   <div className={styles.h1}>
    {order!=0 && order}
    {cal_times_logic.decadesNumR(selectedMonth, selectedDay, monthIndex, dateTotalCount)}
   </div>
   </>
  )
}

export default GetDecadesNumberR
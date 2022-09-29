import React from 'react'
import CalTimesLogic from '../../analysis_logic/cal_times_logic';
import styles from './get_decades_year.module.css'

const GetDecadesYearR = (props) => {
  

        const cal_times_logic= new CalTimesLogic();
    
        const order= props.order;
        const selectedMonth = props.selectedMonth+1<12?props.selectedMonth+1:0;
    
        const selectedDay = props.selectedDay;
        const monthIndex = props.monthIndex;
        const selectedYear = props.selectedYear;
        const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate();
        
   
    
    
      return (
        <>
       <span className={styles.span}>
        {cal_times_logic.returnYear(selectedYear,selectedMonth, selectedDay, monthIndex, dateTotalCount,order)}년
       </span>
       </>
      )
    }


export default GetDecadesYearR
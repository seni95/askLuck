import React from 'react'
import styles from './analysis.module.css'
import CalFiveElements from './cal_five_elements/cal_five_elements';
import CalculateDecades from './calculate_decades/calculate_decades';
import Logic from '../logic/logic';
import { useState } from 'react';
import CalYears from './calculate_years/cal_years';


const Analysis = (props) => {

    const [selectedDecades, setSelectedDecades] = useState(); 

    const logic = new Logic();

    const selectedYear = props.selectedYear;
    const selectedMonth = props.selectedMonth;
    const selectedDay = props.selectedDay;
    // const selectedTime = "09:50"
    const selectedTime = props.selectedTime;
    const selectedGender = props.selectedGender;
    // const show = parseInt(props.selectedMonth);

    // const selectedYear = 2022;
    // const selectedMonth =8;
    // const selectedDay = 21;
    // const selectedTime = "09:50";

    const yearSky = logic.returnYearSky(selectedYear,selectedMonth,selectedDay);
    const yearGround = logic.returnYearGround(selectedYear,selectedMonth,selectedDay);

    const monthSky = logic.returnMonthSky(selectedYear, selectedMonth, selectedDay);
    const monthGround = logic.returnMonthGround(selectedMonth, selectedDay);

    const daySky = logic.returnDaySky(selectedYear, selectedMonth, selectedDay);
    const dayGround = logic.returnDayGround(selectedYear, selectedMonth, selectedDay);

    const timeSky = logic.returnTimeSky(selectedYear, selectedMonth, selectedDay, selectedTime);
    const timeGround = logic.returnTimeGround(selectedTime);

  
  return (
    <div className={styles.container}>
        <div>오행분포</div>
        <CalFiveElements
            yearSky={yearSky}
            yearGround={yearGround}
            monthSky={monthSky}
            monthGround={monthGround}
            daySky={daySky}
            dayGround={dayGround}
            timeSky={timeSky}
            timeGround={timeGround}
        ></CalFiveElements>
        <div>대운</div>
        <CalculateDecades
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        selectedDay = {selectedDay}
        yearSky={yearSky}
         yearGround={yearGround}
         monthSky={monthSky}
         monthGround={monthGround}
         daySky={daySky}
         dayGround={dayGround}
         timeSky={timeSky}
         timeGround={timeGround}
         selectedGender={selectedGender}
        ></CalculateDecades>
        <div>세운</div>
        <CalYears></CalYears>
    </div>
  )
}

export default Analysis
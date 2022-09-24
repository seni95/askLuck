import React from 'react'
import styles from './analysis.module.css'
import CalFiveElements from './analysis_logic/cal_five_elements';
import Logic from '../logic/logic';

const Analysis = (props) => {

    const logic = new Logic();

    const selectedYear = props.selectedYear;
    const selectedMonth = props.selectedMonth;
    const selectedDay = props.selectedDay;
    // const selectedTime = "09:50"
    const selectedTime = props.selectedTime;

    // const show = parseInt(props.selectedMonth);

    // const selectedYear = 2022;
    // const selectedMonth =8;
    // const selectedDay = 21;
    // const selectedTime = "09:50";

    const yearSky = logic.returnYearSky(selectedYear);
    const yearGround = logic.returnYearGround(selectedYear);

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
    </div>
  )
}

export default Analysis
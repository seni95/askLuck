import React,{useEffect} from 'react'
import Logic from '../logic/logic';
import styles from './four_pillar_viewer.module.css';
import CalculateFamily from '../logic/calculate_family';

const FourPillarViewer = (props) => {

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

            <div className={styles.pillars}>
                <span>년</span>
                <span><CalculateFamily daySky = {daySky} sky={yearSky}></CalculateFamily></span>
                <span className={`${styles.element} ${styles.sky}`}
                id={yearSky.color}>
                    {yearSky.code}
                </span>
                <span className={`${styles.element} ${styles.ground}`}
                id={yearGround.color}>
                    {yearGround.code}
                </span>
                <span><CalculateFamily daySky = {daySky} ground={yearGround}></CalculateFamily></span>
            </div>
            <div className={styles.pillars}>
                <span>월</span>
                <span><CalculateFamily daySky = {daySky} sky={monthSky}></CalculateFamily></span>
                <span className={`${styles.element} ${styles.sky}`}
                id={monthSky.color}>
                    {monthSky.code}
                </span>
                <span className={`${styles.element} ${styles.ground}`}
                id={monthGround.color}>
                    {monthGround.code}
                </span>
                <span><CalculateFamily daySky = {daySky} ground={monthGround}></CalculateFamily></span>

            </div>
            <div className={styles.pillars}>
                <span>일</span>
                <span>아신</span>
                <span className={`${styles.element} ${styles.sky}`}
                id={daySky.color}>
                    {daySky.code}
                </span>
                <span className={`${styles.element} ${styles.ground}`}
                id={dayGround.color}>
                    {dayGround.code}
                </span>
                <span><CalculateFamily daySky = {daySky} ground={dayGround}></CalculateFamily></span>

            </div>
            <div className={styles.pillars}>
                <span>시</span>
                <span><CalculateFamily daySky = {daySky} sky={timeSky}></CalculateFamily></span>

                <span className={`${styles.element} ${styles.sky}`}
                id={timeSky.color}>
                    {timeSky.code}
                </span>
                <span className={`${styles.element} ${styles.ground}`}
                id={timeGround.color}
                >
                    {timeGround.code}
                </span>
                <span><CalculateFamily daySky = {daySky} ground={timeGround}></CalculateFamily></span>

            </div>

        </div>
    )
}

export default FourPillarViewer;
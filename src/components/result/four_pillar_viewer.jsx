import React,{useEffect} from 'react'
import Logic from '../logic/logic';
import styles from './four_pillar_viewer.module.css';


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

    const yearSky = logic.returnYearSky(selectedYear);
    const yearGround = logic.returnYearGround(selectedYear);




    

    return (
        <div className={styles.container}>

            <div className={styles.pillars}>
                <span>년</span>
                <span className={`${styles.element} ${styles.sky}`}>
                    {yearSky.code}
                </span>
                <span className={`${styles.element} ${styles.ground}`}>
                    {yearGround.code}
                </span>
            </div>
            <div className={styles.pillars}>
                <span>월</span>
                <span className={`${styles.element} ${styles.sky}`}>
                    {logic.returnMonthSky(selectedYear, selectedMonth, selectedDay)}
                </span>
                <span className={`${styles.element} ${styles.ground}`}>
                    {logic.returnMonthGround(selectedMonth, selectedDay)}
                </span>
            </div>
            <div className={styles.pillars}>
                <span>일</span>
                <span className={`${styles.element} ${styles.sky}`}>
                    {logic.returnDaySky(selectedYear, selectedMonth, selectedDay)}
                </span>
                <span className={`${styles.element} ${styles.ground}`}>
                    {logic.returnDayGround(selectedYear, selectedMonth, selectedDay)}
                </span>
            </div>
            <div className={styles.pillars}>
                <span>시</span>
                <span className={`${styles.element} ${styles.sky}`}>
                    {logic.returnTimeSky(selectedYear, selectedMonth, selectedDay, selectedTime)}
                </span>
                <span className={`${styles.element} ${styles.ground}`}>
                    {logic.returnTimeGround(selectedTime)}
                </span>
            </div>

        </div>
    )
}

export default FourPillarViewer;
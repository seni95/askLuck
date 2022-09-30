import React,{useEffect} from 'react'
import Logic from '../logic/logic';
import styles from './four_pillar_viewer.module.css';
import CalculateFamily from '../logic/calculate_family';
import { useState } from 'react';
import ShowHop from './result_detail/showHop';
import Data from '../data/data';

const FourPillarViewer = (props) => {

    const logic = new Logic();
    const data = new Data();

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

    const [detailKey,setDetailKey] = useState(false);

    const showDetail=()=>{
        if(!detailKey){
            setDetailKey(true);
            console.log(detailKey+"토글완");
        }else{
            setDetailKey(false);
            console.log(detailKey+"토글완");
        }
    }
    

    return (
        <div className={styles.container}>
<div className={styles.showDetail}>
<div className={styles.toggleSwitch} id={detailKey==0?"":"toggledSwitch"}>
  <span className={styles.toggleButton} onClick={showDetail}
  id={detailKey==0?"":"toggledButton"}></span>
</div>
</div>

        <div className={styles.pillarsContainer}>
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
                <span>
                <span>{data.sky[dayGround.innerAttri.charAt(0)].code}</span>
                <span>{data.sky[dayGround.innerAttri.charAt(1)].code}</span>
                <span>{data.sky[dayGround.innerAttri.charAt(2)].code}</span>
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

            {detailKey &&
            <ShowHop
            yearSky={yearSky}
            monthSky={monthSky}
            daySky={daySky}
            timeSky={timeSky}
            yearGround={yearGround}
            monthGround={monthGround}
            dayGround={dayGround}
            timeGround={timeGround}
            ></ShowHop>
            }
        </div>
    )
}

export default FourPillarViewer;
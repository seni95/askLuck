import React, { useEffect } from 'react'
import Logic from '../logic/logic';
import styles from './four_pillar_viewer.module.css';
import CalculateFamily from '../logic/calculate_family';
import { useState } from 'react';
import ShowHop from './result_detail/showHop';
import Data from '../data/data';
import CalculateInnerAttri from '../logic/calculate_innerAttri';
import ShowPlusMinus from './result_detail/showPlusMinus';
import ShowChung from './result_detail/showChung';

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

    const yearSky = logic.returnYearSky(selectedYear, selectedMonth, selectedDay);
    const yearGround = logic.returnYearGround(selectedYear, selectedMonth, selectedDay);

    const monthSky = logic.returnMonthSky(selectedYear, selectedMonth, selectedDay);
    const monthGround = logic.returnMonthGround(selectedMonth, selectedDay);

    const daySky = logic.returnDaySky(selectedYear, selectedMonth, selectedDay);
    const dayGround = logic.returnDayGround(selectedYear, selectedMonth, selectedDay);

    const timeSky = logic.returnTimeSky(selectedYear, selectedMonth, selectedDay, selectedTime);
    const timeGround = logic.returnTimeGround(selectedTime);

    const [detailKey, setDetailKey] = useState(false);

    const showDetail = () => {
        if (!detailKey) {
            setDetailKey(true);
            console.log(detailKey + "토글완");
        } else {
            setDetailKey(false);
            console.log(detailKey + "토글완");
        }
    }


    return (
        <div className={styles.container}>
            {/* <div className={styles.showDetail}>
                <div className={styles.toggleSwitch} id={detailKey == 0 ? "" : "toggledSwitch"}>
                    <span className={styles.toggleButton} onClick={showDetail}
                        id={detailKey == 0 ? "" : "toggledButton"}></span>
                </div>
            </div> */}
            <table>
                <th>시</th>
                <th>일</th>
                <th>월</th>
                <th>연</th>
                <tr>
                    <td><CalculateFamily daySky={daySky} sky={timeSky}></CalculateFamily></td>
                    <td>아신</td>
                    <td><CalculateFamily daySky={daySky} sky={monthSky}></CalculateFamily></td>
                    <td><CalculateFamily daySky={daySky} sky={yearSky}></CalculateFamily></td>
                </tr>

                <tr className={styles.sky}>
                    <td> <span className={`${styles.element} ${styles.sky}`}
                        id={timeSky.color}>
                        {timeSky.code}
                    </span></td>
                    <td>
                        <span className={`${styles.element} ${styles.sky}`}
                            id={daySky.color}>
                            {daySky.code}
                        </span>
                    </td>
                    <td>
                        <span className={`${styles.element} ${styles.sky}`}
                            id={monthSky.color}>
                            {monthSky.code}
                        </span>
                    </td>
                    <td>
                        <span className={`${styles.element} ${styles.sky}`}
                            id={yearSky.color}>
                            {yearSky.code}
                        </span>
                    </td>
                </tr>

                <tr className={styles.ground}>
                    <td><span className={`${styles.element} ${styles.ground}`}
                        id={timeGround.color}
                    >
                        {timeGround.code}
                    </span></td>
                    <td><span className={`${styles.element} ${styles.ground}`}
                        id={dayGround.color}>
                        {dayGround.code}
                    </span></td>
                    <td>  <span className={`${styles.element} ${styles.ground}`}
                        id={monthGround.color}>
                        {monthGround.code}
                    </span></td>
                    <td>  <span className={`${styles.element} ${styles.ground}`}
                        id={yearGround.color}>
                        {yearGround.code}
                    </span>
                    </td>
                </tr>

                <tr>
                    <td> <span className={styles.innerAttri}>
                        <CalculateInnerAttri
                            ground={timeGround}
                            daySky={daySky}
                        ></CalculateInnerAttri>
                    </span></td>
                    <td>  <span className={styles.innerAttri}>
                        <CalculateInnerAttri
                            ground={dayGround}
                            daySky={daySky}
                        ></CalculateInnerAttri>
                    </span></td>
                    <td>  <span className={styles.innerAttri}>
                        <CalculateInnerAttri
                            ground={monthGround}
                            daySky={daySky}
                        ></CalculateInnerAttri>
                    </span></td>
                    <td> <span className={styles.innerAttri}>
                        <CalculateInnerAttri
                            ground={yearGround}
                            daySky={daySky}
                        ></CalculateInnerAttri>
                    </span></td>
                </tr>

                <tr>
                    <td>
                        <span><CalculateFamily daySky={daySky} ground={timeGround}></CalculateFamily></span>
                    </td>
                    <td>
                        <span><CalculateFamily daySky={daySky} ground={dayGround}></CalculateFamily></span>
                    </td>
                    <td>
                        <span><CalculateFamily daySky={daySky} ground={monthGround}></CalculateFamily></span>
                    </td>
                    <td>
                        <span><CalculateFamily daySky={daySky} ground={yearGround}></CalculateFamily></span>
                    </td>
                </tr>

                <tr>
            <td>
                <span><ShowPlusMinus sky={timeSky} ground={timeGround}></ShowPlusMinus></span>
            
            </td>
            <td>
                <span><ShowPlusMinus sky={daySky} ground={dayGround}></ShowPlusMinus></span>
            </td> 
            <td>
                <span><ShowPlusMinus sky={monthSky} ground={monthGround}></ShowPlusMinus></span>
            </td> 
            <td>
                <span><ShowPlusMinus sky={yearSky} ground={yearGround}></ShowPlusMinus></span>
            </td>
                </tr>
               <tr>
               <td colspan="4">
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

                 <ShowChung
                  yearSky={yearSky}
                  monthSky={monthSky}
                  daySky={daySky}
                  timeSky={timeSky}
                  yearGround={yearGround}
                  monthGround={monthGround}
                  dayGround={dayGround}
                  timeGround={timeGround}
                 > 
                 </ShowChung>
               </td>
           </tr>
            </table>
        </div>
    )
}

export default FourPillarViewer;
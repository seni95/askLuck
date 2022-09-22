import React, { useCallback, useEffect, useState } from 'react'
import showFortune from './show_fortune/show_fortune';


const Logic = (props) => {

    const sky = [
        { name: "갑", symbol: "목", sign: "양", key: 1 ,code:"甲"},
        { name: "을", symbol: "목", sign: "음", key: 2 ,code:"乙"},
        { name: "병", symbol: "화", sign: "양", key: 3 ,code:"丙"},
        { name: "정", symbol: "화", sign: "음", key: 4 ,code:"丁"},
        { name: "무", symbol: "토", sign: "양", key: 5 ,code:"戊"},
        { name: "기", symbol: "토", sign: "음", key: 6 ,code:"己"},
        { name: "경", symbol: "금", sign: "양", key: 7 ,code:"庚"},
        { name: "신", symbol: "금", sign: "음", key: 8 ,code:"辛"},
        { name: "임", symbol: "수", sign: "양", key: 9 ,code:"壬"},
        { name: "계", symbol: "수", sign: "음", key: 10 ,code:"癸"}
    ];

    const ground = [
        { name: "자", symbol: "수", sign: "음", key: 11 ,code:"子"},
        { name: "축", symbol: "토", sign: "음", key: 12 ,code:"丑"},
        { name: "인", symbol: "목", sign: "양", key: 13 ,code:"寅"},
        { name: "묘", symbol: "목", sign: "음", key: 14 ,code:"卯"},
        { name: "진", symbol: "토", sign: "양", key: 15 ,code:"辰"},
        { name: "사", symbol: "화", sign: "양", key: 16 ,code:"巳"},
        { name: "오", symbol: "화", sign: "음", key: 17 ,code:"午"},
        { name: "미", symbol: "토", sign: "음", key: 18 ,code:"未"},
        { name: "신", symbol: "금", sign: "양", key: 19 ,code:"申"},
        { name: "유", symbol: "금", sign: "음", key: 20 ,code:"酉"},
        { name: "술", symbol: "토", sign: "양", key: 21 ,code:"戌"},
        { name: "해", symbol: "수", sign: "음", key: 22 ,code:"亥"},
    ]


    const today={
        year:new Date().getFullYear(),
        month:new Date().getMonth()+1,
        date:new Date().getDate()
      }
  

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


    const returnYearSky = useCallback((selectedYear) => {
        const yearSkyCal = selectedYear % 10;
        const yearSky = yearSkyCal + 6 < 10 ? yearSkyCal + 6 : yearSkyCal + 6 - 10;
        

        return sky[yearSky].code;
    }, [selectedYear,selectedMonth,selectedDay,selectedTime])

    const returnYearGround = useCallback((selectedYear) => {
        const yearGroundCal = selectedYear % 12;
        const yearGround = yearGroundCal + 8 < 12 ? yearGroundCal + 8 : yearGroundCal + 8 - 12;
        return ground[yearGround].code;
    }, [selectedYear,selectedMonth,selectedDay,selectedTime])

    const returnMonthSky = useCallback((selectedYear, selectedMonth) => {
        const yearSkyCal = selectedYear % 10;
        const yearSky = yearSkyCal + 6 < 10 ? yearSkyCal + 6 : yearSkyCal + 6 - 10;
        let monthSkyCal = null;
        console.log(sky[yearSky].name);
        switch (sky[yearSky].name) {
            case "갑":
            case "기":
                monthSkyCal = 2;
                break;
            case "을":
            case "경":
                monthSkyCal = 4;
                break;

            case "병":
            case "신":
                monthSkyCal = 6;
                break;

            case "정":
            case "임":
                monthSkyCal = 8;
                break;

            case "무":
            case "계":
                monthSkyCal = 0;
                break;

        }

        const monthSkyCal2 = selectedMonth - 1;
        //2월부터 시작하니까 1을 빼줌. 
        const monthSkyCal3 = monthSkyCal + monthSkyCal2 < 10 ? monthSkyCal + monthSkyCal2 : monthSkyCal + monthSkyCal2 - 10;
        
        let monthSky = monthSkyCal3;

        switch (monthSkyCal3) {
            case 2:
                if (selectedDay < 5) {
                    monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;
                }
                break;
            case 3:
                if (selectedDay < 7) {
                    monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;
                }
                break;

            case 4:
                if (selectedDay < 6) {
                    monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;
                
                }
                break;
            case 5:
                if (selectedDay < 6) {
                    monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;
                }
                break;

            case 6:
                if (selectedDay < 7) {
                    monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;

                }
                break;

            case 7:
                if (selectedDay < 8) {
                    monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;

                }
                break;

            case 8:
                if (selectedDay < 8) {
                    monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;
                  
                }
                break;

            case 9:
                if (selectedDay < 9) {
                    monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;
                }
                break;

            case 10:
                if (selectedDay < 9) {
                    monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;
                }
                break;

            case 11:
                if (selectedDay < 8) {
                    monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;
                }
                break;

            case 0:
                if (selectedDay < 8) {
                    monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;
                }
                break;
            case 1:
                if (selectedDay < 7) {
                    monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;
                }

                break;
        }
        
        return sky[monthSky].code;

    }, [selectedYear,selectedMonth,selectedDay,selectedTime])

    const returnMonthGround = useCallback((selectedMonth, selectedDay) => {
        //12월의 경우 11로 들어온다.

        let monthGroundCal = selectedMonth +1 < 12 ? selectedMonth + 1 : 0;
        //여기서 1이 더해져서 12가 된다. 그래서 0으로 바뀐다. (자월)
        
        let monthGround = monthGroundCal;

        let test = 0
        switch (test) {
            case 2:
                if (selectedDay < 5) {
                    monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                }
                break;
            case 3:
                if (selectedDay < 7) {
                    monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                }
                break;

            case 4:
                if (selectedDay < 6) {
                    monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                }
                break;
            case 5:
                if (selectedDay < 6) {
                    monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                }
                break;

            case 6:
                if (selectedDay < 7) {
                    monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                }
                break;

            case 7:
                if (selectedDay < 8) {
                    monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                }
                break;

            case 8:
                if (selectedDay < 8) {
                    monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                }
                break;

            case 9:
                if (selectedDay < 9) {
                    monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                }
                break;

            case 10:
                if (selectedDay < 9) {
                    monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                }
                break;

            case 11:
                if (selectedDay < 8) {
                    monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                }
                break;

            case 0:
                if (selectedDay < 8) {
                    monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                }
                break;
            case 1:
                if (selectedDay < 7) {
                    monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                }

                break;
        }
        console.log(monthGround);

        return ground[monthGround].code;
    }, [selectedYear,selectedMonth,selectedDay,selectedTime])



    const returnDaySky = useCallback((selectedYear, selectedMonth, selectedDay) => {
        const standard = new Date(1925, 0, 10);
        console.log(standard);
        const daySkyCal = new Date(selectedYear, selectedMonth, selectedDay);
        const diffDate = daySkyCal.getTime() - standard.getTime();
        const diffDateResult = Math.abs(diffDate / (1000 * 60 * 60 * 24));
        const daySky = diffDateResult % 10;

        return sky[daySky].code;
    })

    const returnDayGround = useCallback((selectedYear, selectedMonth, selectedDay) => {
        const standard = new Date(1925, 0, 4);
        const dayGroundCal = new Date(selectedYear, selectedMonth, selectedDay);
        const diffDate = dayGroundCal.getTime() - standard.getTime();
        const diffDateResult = Math.abs(diffDate / (1000 * 60 * 60 * 24));
        const dayGround = diffDateResult % 12;

        return ground[dayGround].code;
    })

    const returnTimeSky = useCallback((selectedYear, selectedMonth, selectedDay, selectedTime) => {
        const standard = new Date(1925, 0, 10);
        console.log(standard);
        const daySkyCal = new Date(selectedYear, selectedMonth, selectedDay);
        const diffDate = daySkyCal.getTime() - standard.getTime();
        const diffDateResult = Math.abs(diffDate / (1000 * 60 * 60 * 24));
        const daySky = diffDateResult % 10;
        const toCalculateTimeSky = sky[daySky].name;

        let timeSkyCal = null;

        switch (toCalculateTimeSky) {
            case "갑":
            case "기":
                timeSkyCal = 0;
                break;
            case "을":
            case "경":
                timeSkyCal = 2;
                break;

            case "병":
            case "신":
                timeSkyCal = 4;
                break;

            case "정":
            case "임":
                timeSkyCal = 6;
                break;

            case "무":
            case "계":
                timeSkyCal = 8;
                break;
        }

        const timeCal = JSON.stringify(selectedTime);
        const hourString = timeCal.substring(1, 3);
        const minutesString = timeCal.substring(4, 6);
        const hour = Number(hourString);
        const minutes = Number(minutesString);
        let timeGround = null;

        let arrCheck = 0;
        let arrNum = Math.floor(hour / 2);
        if (hour % 2 == 1) {
            arrCheck = minutes < 30 ? arrNum : ++arrNum;
        }
        //8+5=13-12=1
        const timeSky = timeSkyCal + arrNum < 10 ? timeSkyCal + arrNum : timeSkyCal + arrNum - 10;

        return sky[timeSky].code;

    },[selectedYear,selectedMonth,selectedDay,selectedTime])

    const returnTimeGround = useCallback((selectedTime) => {


        const timeCal = JSON.stringify(selectedTime);
        const hourString = timeCal.substring(1, 3);
        const minutesString = timeCal.substring(4, 6);
        const hour = Number(hourString);
        const minutes = Number(minutesString);
        let timeGround = null;

        let arrCheck = 0;
        let arrNum = Math.floor(hour / 2);
        if (hour % 2 == 1) {
            arrCheck = minutes < 30 ? arrNum : ++arrNum;
        }


        return ground[arrCheck].code;
    },[selectedYear,selectedMonth,selectedDay,selectedTime])



    return (
        <h1>
            {returnYearSky(selectedYear)}
            {returnYearGround(selectedYear)}
            /
            {returnMonthSky(selectedYear, selectedMonth)}
            {returnMonthGround(selectedMonth,selectedDay)}
            /
            {returnDaySky(selectedYear, selectedMonth, selectedDay)}
            {returnDayGround(selectedYear, selectedMonth, selectedDay)}
            /
            {returnTimeSky(selectedYear, selectedMonth, selectedDay, selectedTime)}
            {returnTimeGround(selectedTime)}
            /
            /
        </h1>
    )
}

export default Logic
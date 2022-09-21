import React, { useCallback, useEffect, useState } from 'react'

const Logic = (props) => {

    const sky = [
        { name: "갑", symbol: "목", sign: "양", key: 1 },
        { name: "을", symbol: "목", sign: "음", key: 2 },
        { name: "병", symbol: "화", sign: "양", key: 3 },
        { name: "정", symbol: "화", sign: "음", key: 4 },
        { name: "무", symbol: "토", sign: "양", key: 5 },
        { name: "기", symbol: "토", sign: "음", key: 6 },
        { name: "경", symbol: "금", sign: "양", key: 7 },
        { name: "신", symbol: "금", sign: "음", key: 8 },
        { name: "임", symbol: "수", sign: "양", key: 9 },
        { name: "계", symbol: "수", sign: "음", key: 10 }
    ];

    const ground = [
        { name: "자", symbol: "수", sign: "음", key: 11 },
        { name: "축", symbol: "토", sign: "음", key: 12 },
        { name: "인", symbol: "목", sign: "양", key: 13 },
        { name: "묘", symbol: "목", sign: "음", key: 14 },
        { name: "진", symbol: "토", sign: "양", key: 15 },
        { name: "사", symbol: "화", sign: "양", key: 16 },
        { name: "오", symbol: "화", sign: "음", key: 17 },
        { name: "미", symbol: "토", sign: "음", key: 18 },
        { name: "신", symbol: "금", sign: "양", key: 19 },
        { name: "유", symbol: "금", sign: "음", key: 20 },
        { name: "술", symbol: "토", sign: "양", key: 21 },
        { name: "해", symbol: "수", sign: "음", key: 22 },
    ]

    const selectedYear = 1990;
    const selectedMonth = 5;
    const selectedDay = 15;
    const selectedTime = "09:50"
    // const selectedTime = props.selectedTime;


    const returnYearSky = useCallback((selectedYear) => {
        const yearSkyCal = selectedYear % 10;
        const yearSky = yearSkyCal + 6 < 10 ? yearSkyCal + 6 : yearSkyCal + 6 - 10;
        return sky[yearSky].name;
    }, [])

    const returnYearGround = useCallback((selectedYear) => {
        const yearGroundCal = selectedYear % 12;
        const yearGround = yearGroundCal + 8 < 12 ? yearGroundCal + 8 : yearGroundCal + 8 - 12;
        return ground[yearGround].name;
    }, [])

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
        const monthSky = monthSkyCal + monthSkyCal2 < 10 ? monthSkyCal + monthSkyCal2 : monthSkyCal + monthSkyCal2 - 10;
        return sky[monthSky].name;

    }, [])

    const returnMonthGround = useCallback((selectedMonth) => {
        const monthGround = selectedMonth < 12 ? selectedMonth + 1 : 0;
        return ground[monthGround].name;
    }, [])



    const returnDaySky = useCallback((selectedYear, selectedMonth, selectedDay) => {
        const standard = new Date(1925, 0, 10);
        console.log(standard);
        const daySkyCal = new Date(selectedYear, selectedMonth, selectedDay);
        const diffDate = daySkyCal.getTime() - standard.getTime();
        const diffDateResult = Math.abs(diffDate / (1000 * 60 * 60 * 24));
        const daySky = diffDateResult % 10;

        return sky[daySky].name;
    })

    const returnDayGround = useCallback((selectedYear, selectedMonth, selectedDay) => {
        const standard = new Date(1925, 0, 4);
        const dayGroundCal = new Date(selectedYear, selectedMonth, selectedDay);
        const diffDate = dayGroundCal.getTime() - standard.getTime();
        const diffDateResult = Math.abs(diffDate / (1000 * 60 * 60 * 24));
        const dayGround = diffDateResult % 12;

        return ground[dayGround].name;
    })

    const returnTimeGround = useCallback((selectedTime) => {


        const timeCal = JSON.stringify(selectedTime);
        const hourString = timeCal.substring(1, 3);
        const minutesString = timeCal.substring(4, 6);
        const hour = Number(hourString);
        const minutes = Number(minutesString);
        let timeGround = null;

        switch (hour) {
            case 1:
                if (minutes < 30) {
                    timeGround = ground[0];
                } else {
                    timeGround = ground[1];
                }
                break;

            case 2:
                timeGround = ground[1];
                break;
            case 3:
                if (minutes < 30) {
                    timeGround = ground[1];
                } else {
                    timeGround = ground[2];
                }
                break;
            case 4:
                timeGround = ground[2];
                break;
            case 5:
                if (minutes < 30) {
                    timeGround = ground[2];
                } else {
                    timeGround = ground[3];
                }
                break;

            case 6:
                timeGround = ground[3];
                break;

            case 7:
                if (minutes < 30) {
                    timeGround = ground[3];
                } else {
                    timeGround = ground[4];
                }
                break;

            case 8:
                timeGround = ground[4];
                break;
            case 9:
                if (minutes < 30) {
                    timeGround = ground[4];
                } else {
                    timeGround = ground[5];
                }
                break;
            case 10:
                timeGround = ground[5];
                break;
            case 11:
                if (minutes < 30) {
                    timeGround = ground[5];
                } else {
                    timeGround = ground[6];
                }
                break;

            case 12:
                timeGround = ground[6];
                break;

            case 13:
                if (minutes < 30) {
                    timeGround = ground[6];
                } else {
                    timeGround = ground[7];
                }
                break;
            case 14:
                timeGround = ground[7];
                break;
            case 15:
                if (minutes < 30) {
                    timeGround = ground[7];
                } else {
                    timeGround = ground[8];
                }
                break;
            case 16:
                timeGround = ground[8];
                break;
            case 17:
                if (minutes < 30) {
                    timeGround = ground[8];
                } else {
                    timeGround = ground[9];
                }
                break;

            case 18:
                timeGround = ground[9];
                break;

            case 19:
                if (minutes < 30) {
                    timeGround = ground[9];
                } else {
                    timeGround = ground[10];
                }
                break;

            case 20:
                timeGround = ground[10];
                break;
            case 21:
                if (minutes < 30) {
                    timeGround = ground[10];
                } else {
                    timeGround = ground[11];
                }
                break;
            case 22:
                timeGround = ground[11];
                break;
            case 23:
                if (minutes < 30) {
                    timeGround = ground[11];
                } else {
                    timeGround = ground[0];
                }
                break;

            case 0:
                timeGround = ground[0];
                break;
        }


        return timeGround.name;
    })



    return (
        <h1>
            {returnYearSky(selectedYear)}
            {returnYearGround(selectedYear)}
            ?
            {returnMonthSky(selectedYear, selectedMonth)}
            {returnMonthGround(selectedMonth)}
            ?
            {returnDaySky(selectedYear, selectedMonth, selectedDay)}
            {returnDayGround(selectedYear, selectedMonth, selectedDay)}
            ?
            {returnTimeGround(selectedTime)}
        </h1>
    )
}

export default Logic
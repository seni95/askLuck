import Data from './data/data'


class Logic{
    constructor(){

        this.data = new Data();
    }

   


        returnYearSky = (selectedYear) => {
            const yearSkyCal = selectedYear % 10;
            const yearSky = yearSkyCal + 6 < 10 ? yearSkyCal + 6 : yearSkyCal + 6 - 10;
            
    
            return data.sky[yearSky].code;
        }

        returnYearGround = (selectedYear) => {
            const yearGroundCal = selectedYear % 12;
            const yearGround = yearGroundCal + 8 < 12 ? yearGroundCal + 8 : yearGroundCal + 8 - 12;
            return data.ground[yearGround].code;
        }
    
        returnMonthSky = (selectedYear, selectedMonth) => {
            const yearSkyCal = selectedYear % 10;
            const yearSky = yearSkyCal + 6 < 10 ? yearSkyCal + 6 : yearSkyCal + 6 - 10;
            let monthSkyCal = null;
            console.log(data.sky[yearSky].name);
            switch (data.sky[yearSky].name) {
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
            
            return data.sky[monthSky].code;
    
        }
    
        returnMonthGround = (selectedMonth, selectedDay) => {
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
    
            return data.ground[monthGround].code;
        }
    
    
        returnDaySky = (selectedYear, selectedMonth, selectedDay) => {
            const standard = new Date(1925, 0, 10);
            console.log(standard);
            const daySkyCal = new Date(selectedYear, selectedMonth, selectedDay);
            const diffDate = daySkyCal.getTime() - standard.getTime();
            const diffDateResult = Math.abs(diffDate / (1000 * 60 * 60 * 24));
            const daySky = diffDateResult % 10;
    
            return data.sky[daySky].code;
        }
    

        returnDayGround = (selectedYear, selectedMonth, selectedDay) => {
            const standard = new Date(1925, 0, 4);
            const dayGroundCal = new Date(selectedYear, selectedMonth, selectedDay);
            const diffDate = dayGroundCal.getTime() - standard.getTime();
            const diffDateResult = Math.abs(diffDate / (1000 * 60 * 60 * 24));
            const dayGround = diffDateResult % 12;
    
            return data.ground[dayGround].code;
        }

        returnTimeSky = (selectedYear, selectedMonth, selectedDay, selectedTime) => {
            const standard = new Date(1925, 0, 10);
            console.log(standard);
            const daySkyCal = new Date(selectedYear, selectedMonth, selectedDay);
            const diffDate = daySkyCal.getTime() - standard.getTime();
            const diffDateResult = Math.abs(diffDate / (1000 * 60 * 60 * 24));
            const daySky = diffDateResult % 10;
            const toCalculateTimeSky = data.sky[daySky].name;
    
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
            }else{
                arrCheck = arrNum;
            }
            //8+5=13-12=1
            const timeSky = timeSkyCal + arrCheck < 10 ? timeSkyCal + arrCheck : timeSkyCal + arrCheck - 10;
    
            return data.sky[timeSky].code;
    
        }
    

        returnTimeGround = (selectedTime) => {


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
            } else{
                arrCheck=arrNum;
            }
    
    
            return data.ground[arrCheck].code;
        }
}

export default Logic;
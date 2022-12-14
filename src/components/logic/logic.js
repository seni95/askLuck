import Data from '../data/data'


class Logic{
    constructor(){

        this.data = new Data();
    }

   


        returnYearSky = (selectedYear,selectedMonth,selectedDay) => {
           
            //1월 6일 전까지는 아직 해가 바뀌지 않음.

            if(selectedMonth==0&&selectedDay<6){
                selectedYear--;
            }


            //따라서 한연도 전의 값을 계산함

      
            
            const yearSkyCal = selectedYear % 10;
            const yearSky = yearSkyCal + 6 < 10 ? yearSkyCal + 6 : yearSkyCal + 6 - 10;
            
           
    
            return this.data.sky[yearSky];
        }

        returnYearGround = (selectedYear,selectedMonth,selectedDay) => {
            
            //1월 6일 전까지는 아직 해가 바뀌지 않음.

            if(selectedMonth==0&&selectedDay<6){
                selectedYear--;
            }


            //따라서 한연도 전의 값을 계산함


            const yearGroundCal = selectedYear % 12;
            const yearGround = yearGroundCal + 8 < 12 ? yearGroundCal + 8 : yearGroundCal + 8 - 12;
            return this.data.ground[yearGround];
        }
    
        returnMonthSky = (selectedYear, selectedMonth,selectedDay) => {

            //1월 초에는 전년도의 12월을 받아오므로

           

            if(selectedMonth==0&&selectedDay<6){

                selectedYear--;
                selectedMonth=12;

            }


            const yearSkyCal = selectedYear % 10;
            //천간은 열개니까 십을 나눠

            const yearSky = yearSkyCal + 6 < 10 ? yearSkyCal + 6 : yearSkyCal + 6 - 10;
            //0으로 끝나는 해는 "경"으로 시작하니까 data 에 있는 
            //지지배열 인덱스 6번의 값을 대입해줘야함.
            

            let monthSkyCal = null;
            console.log(this.data.sky[yearSky].name);
            switch (this.data.sky[yearSky].name) {
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

            let monthSkyCal3=0;
            if(monthSkyCal2+monthSkyCal<0){
            monthSkyCal3=9;
            }else{
                monthSkyCal3 = monthSkyCal + monthSkyCal2 < 10 ? monthSkyCal + monthSkyCal2 : monthSkyCal + monthSkyCal2 - 10;
            }

            let monthSky = monthSkyCal3;
    
            switch (monthSkyCal3) {
                case 2:
                    if (selectedDay < 4) {
                        monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;
                    }
                    break;
                case 3:
                    if (selectedDay < 6 ){
                        monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;
                    }
                    break;
    
                case 4:
                    if (selectedDay < 5) {
                        monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;
                    
                    }
                    break;
                case 5:
                    if (selectedDay < 5) {
                        monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;
                    }
                    break;
    
                case 6:
                    if (selectedDay < 6) {
                        monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;
    
                    }
                    break;
    
                case 7:
                    if (selectedDay < 7) {
                        monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;
    
                    }
                    break;
    
                case 8:
                    if (selectedDay < 7) {
                        monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;
                      
                    }
                    break;
    
                case 9:
                    if (selectedDay < 8) {
                        monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;
                    }
                    break;
    
                case 10:
                    if (selectedDay < 8) {
                        monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;
                    }
                    break;
    
                case 11:
                    if (selectedDay < 7) {
                        monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;
                    }
                    break;
    
                case 0:
                    if (selectedDay < 7) {
                        monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;
                    }
                    break;
                case 1:
                    if (selectedDay < 6) {
                        monthSky = monthSkyCal3 == 0 ? 9 : monthSkyCal3-1;
                    }
    
                    break;
            }
            
            return this.data.sky[monthSky];
    
        }
    
        returnMonthGround = (selectedMonth, selectedDay) => {
            //12월의 경우 11로 들어온다.
    
            let monthGroundCal = selectedMonth +1 < 12 ? selectedMonth + 1 : 0;
            //여기서 1이 더해져서 12가 된다. 그래서 0으로 바뀐다. (자월)
            
            let monthGround = monthGroundCal;
    
            let test = 0
            switch (test) {
                case 2:
                    if (selectedDay < 4) {
                        monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                    }
                    break;
                case 3:
                    if (selectedDay < 6) {
                        monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                    }
                    break;
    
                case 4:
                    if (selectedDay < 5) {
                        monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                    }
                    break;
                case 5:
                    if (selectedDay < 5) {
                        monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                    }
                    break;
    
                case 6:
                    if (selectedDay < 6) {
                        monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                    }
                    break;
    
                case 7:
                    if (selectedDay < 7) {
                        monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                    }
                    break;
    
                case 8:
                    if (selectedDay < 7) {
                        monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                    }
                    break;
    
                case 9:
                    if (selectedDay < 8) {
                        monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                    }
                    break;
    
                case 10:
                    if (selectedDay < 8) {
                        monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                    }
                    break;
    
                case 11:
                    if (selectedDay < 7) {
                        monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                    }
                    break;
    
                case 0:
                    if (selectedDay < 7) {
                        monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                    }
                    break;
                case 1:
                    if (selectedDay < 6) {
                        monthGround = monthGroundCal ==0 ? 11 : monthGroundCal-1;
                    }
    
                    break;
            }
            console.log(monthGround);
    
            return this.data.ground[monthGround];
        }
    
    
        returnDaySky = (selectedYear, selectedMonth, selectedDay) => {
            const standard = new Date(1925, 0, 10);
            //갑
            const daySkyCal = new Date(selectedYear, selectedMonth, selectedDay);
            const diffDate = daySkyCal.getTime() - standard.getTime();
            const diffDateResult = Math.abs(diffDate / (1000 * 60 * 60 * 24));
            let daySky = diffDateResult % 10;
            //왜인지 모르지만 1958년에서 나머지값이 소수점으로 나옴...;;
            daySky = Math.floor(daySky);
    
            return this.data.sky[daySky];
        }
    

        returnDayGround = (selectedYear, selectedMonth, selectedDay) => {
            const standard = new Date(1925, 0, 4);
            const dayGroundCal = new Date(selectedYear, selectedMonth, selectedDay);
            const diffDate = dayGroundCal.getTime() - standard.getTime();
            const diffDateResult = Math.abs(diffDate / (1000 * 60 * 60 * 24));
            let dayGround = diffDateResult % 12;
            dayGround = Math.floor(dayGround);
    
            return this.data.ground[dayGround];
        }

        returnTimeSky = (selectedYear, selectedMonth, selectedDay, selectedTime) => {
            const standard = new Date(1925, 0, 10);
            console.log(standard);
            const daySkyCal = new Date(selectedYear, selectedMonth, selectedDay);
            const diffDate = daySkyCal.getTime() - standard.getTime();
            const diffDateResult = Math.abs(diffDate / (1000 * 60 * 60 * 24));
            let daySky = diffDateResult % 10;
            daySky = Math.floor(daySky);
            const toCalculateTimeSky = this.data.sky[daySky].name;
    
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

                //arrCheck 값이 12가 되어서 배열을 넘어가는 경우가 발생하지 않도록
                if(arrCheck>11){
                    arrCheck=0;
                }
            }else{
                arrCheck = arrNum;
            }
            //8+5=13-12=1
            const timeSky = timeSkyCal + arrCheck < 10 ? timeSkyCal + arrCheck : timeSkyCal + arrCheck - 10;
    
            return this.data.sky[timeSky];
    
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

                //arrCheck 값이 12가 되어서 배열을 넘어가는 경우가 발생하지 않도록
                if(arrCheck>11){
                    arrCheck=0;
                }
               
            } else{
                arrCheck=arrNum;
            }
    
    
            return this.data.ground[arrCheck];
        }
}

export default Logic;
class CalTimesLogic {
    constructor() {
        this.param = [
            7, 6, 4, 6, 5, 5, 6, 7, 7, 8, 8, 7
        ]
    }

    //대운수 구하는 로직 (순행)
    decadesNum = (selectedMonth, selectedDay, monthIndex, dateTotalCount) => {
        let toCalResult = 0;
        if (selectedMonth == monthIndex) {
            toCalResult = dateTotalCount - selectedDay;
            toCalResult += this.param[monthIndex];
        } else {
            toCalResult = this.param[monthIndex] - selectedDay;
        }
        let Result = Math.floor(toCalResult / 3);

        return Result;
    }

//대운연도 구하는 로직 (순행)
    returnYear = (selectedYear,selectedMonth, selectedDay, monthIndex, dateTotalCount,order)=>{
        let decadesNumResult = this.decadesNum(selectedMonth, selectedDay, monthIndex, dateTotalCount);
 
        return decadesNumResult+parseInt(selectedYear)-1+order*10;
     }

    //대운수 구하는 로직 (역행)

    decadesNumR = (selectedMonth, selectedDay, monthIndex, dateTotalCount) => {
        let toCalResult = 0;
        if (selectedMonth == monthIndex) {
            toCalResult = selectedDay - this.param[monthIndex];
        } else {
            toCalResult = selectedDay + dateTotalCount - this.param[monthIndex];
        }
        let Result = Math.floor(toCalResult / 3);
        return Result;
    }


    //대운 연도 구하는 로직 (역행)
    returnYearR = (selectedYear,selectedMonth, selectedDay, monthIndex, dateTotalCount,order)=>{
        let decadesNumResult = this.decadesNumR(selectedMonth, selectedDay, monthIndex, dateTotalCount);
 
        return decadesNumResult+parseInt(selectedYear)-1+order*10;
     }


}
export default CalTimesLogic;

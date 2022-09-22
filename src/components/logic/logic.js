class Logic{
    constructor(selectedYear,selectedMonth,selectedDay,selectedTime){

        this.selectedYear = selectedYear;
        this.selectedMonth = selectedMonth;
        this.selectedDay = selectedDay;
        this.selectedTime = selectedTime;


        this.sky = [
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

        this.ground =[
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

        this.today={
            year:new Date().getFullYear(),
            month:new Date().getMonth()+1,
            date:new Date().getDate()
          }

    }


}
export default Logic;
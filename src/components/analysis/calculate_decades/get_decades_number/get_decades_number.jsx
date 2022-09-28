import React from 'react'
import styles from './get_decades_number.module.css'

const GetDecadesNumber = (props) => {

    const param = [
        7,6,4,6,5,5,6,7,7,8,8,7
    ]

    const order= props.order;
    const selectedMonth = props.selectedMonth+1<12?props.selectedMonth+1:0;
    //8월이면 7을 반환하는데, 1을 더해서 8로 만들어줌

    // 7이면 6을 반환하는데, 1을 더해서 7로 만들어줌
    const selectedDay = props.selectedDay;
    const monthIndex = props.monthIndex;
    //7월 26일의 경우 인덱스 7번을 반환 (미달)
    //1월 5일의 경우, 0을 반환(자달)
    const selectedYear = props.selectedYear;
    const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate();
    //1995년 1월의 전체 날짜를 받음.
    let toCalResult = 0;

    const decadesNum = ()=>{
        if(selectedMonth==monthIndex){
            toCalResult = dateTotalCount-selectedDay;
            //31일에서 26을 뺌. (5)
            toCalResult+=param[monthIndex];
            }else{
            toCalResult = param[monthIndex]-selectedDay;               
                        }
       let Result = Math.floor(toCalResult/3);

       return Result;
    }

  return (
    <>

   <h1 className={styles.h1}>
    {order!=0 && order}
    {decadesNum()}
   </h1>
   </>
  )
}

export default GetDecadesNumber
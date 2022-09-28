import React from 'react'
import styles from './get_decades_number.module.css'

const GetDecadesNumberR = (props) => {

    const param = [
        7,6,4,6,5,5,6,7,7,8,8,7
        //자축인묘진사오미신유술해 월의 절기가 바뀌는 날짜를 배열로 받음.
    ]

    const order= props.order;
    const selectedMonth = props.selectedMonth+1<12?props.selectedMonth+1:0;
    //8월이면 7을 반환하는데, 1을 더해서 8로 만들어줌

    //1월이면 0을 반환하는데, 1을 더해서 1을 만들어줌.

    // 7이면 6을 반환하는데, 1을 더해서 7로 만들어줌
    const selectedDay = Number(props.selectedDay);
    //왜인지 자꾸 string 으로 들어와서 덧셈할때 숫자를 엄청 키워버림 ㅜ
    const monthIndex = props.monthIndex;
    //7월 26일의 경우 인덱스 7번을 반환 (미달)
    //1월 5일인 경우 인덱스 0을 반환 (자달)
    const selectedYear = props.selectedYear;
    const dateTotalCount = new Date(selectedYear, selectedMonth-1<0?11:selectedMonth-1, 0).getDate();
    // 1월 5일의 경우 31일이 반환됨


    let toCalResult = 0;

    const decadesNum = ()=>{

        


        if(selectedMonth==monthIndex){
            //
            toCalResult=selectedDay-param[monthIndex];
            }else{
                //1995년 1월 5일의 경우 
                console.log(monthIndex+"???abby");
            toCalResult = selectedDay+dateTotalCount-param[monthIndex]; 
        
        
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

export default GetDecadesNumberR
import React, { useRef, useState,useCallback } from 'react'
import styles from './input_birthday.module.css'


const InputBirthday = (props) => {

    const today={
      year:new Date().getFullYear(),
      month:new Date().getMonth()+1,
      date:new Date().getDate()
    }

    const [selectedYear,setSelectedYear] = useState(today.year);
    const [selectedMonth,setSelectedMonth] = useState(today.month);
    const [selectedDay,setSelectedDay] = useState(today.date);
    const dateTotalCount = new Date(selectedYear,selectedMonth,0).getDate();


    const inputTime = useRef();
    const inputDay = useRef();
    const inputMonth = useRef();
    const inputYear = useRef();

    const yearControl = useCallback(()=>{
      let yearArr=[];
      const startYear = today.year-90;
      const endYear = today.year;

      for(let i=endYear; i>startYear ; i-- ){
        yearArr.push(
          <option
          key={i} value={i}
          >
            {i}년
          </option>
        )
      }

      return (
        <select className={styles.yearSelect}
        onChange={function(e){
          setSelectedYear(Number(e.target.value));
            }}
            ref={inputYear}
          >
          {yearArr}
        </select>
      );

    },[selectedYear])


    const monthControl = useCallback(()=>{
      let monthArr = [];
      for(let i=0; i<12;i++){
        monthArr.push(
          <option
          key={i+1}
          value={i+1}
          >
            {i+1}월
          </option>
        )
      }

      return (

        <select
        onChange={function(e){
      setSelectedMonth(Number(e.target.value));
        }}
        ref={inputMonth}

        // value={selectedMonth}
        >
          {monthArr}
          {console.log(selectedMonth)};
        </select>
      )

    },[selectedMonth])


    const dayControl=useCallback(()=>{
      let dayArr=[];

      for(let i =0; i<dateTotalCount; i++){
        dayArr.push(
          <option
          key={i+1}
          value={i+1}
          >

            {i+1}일
          </option>
        )
      }
      return(
        <select
        // value={selectedDay}
        ref={inputDay}

        >
          {dayArr}
        </select>
      )

    },[selectedYear,selectedMonth,dateTotalCount])

    const onSubmit = event =>{
        event.preventDefault();

        const time = inputTime.current.value;
        const day = inputDay.current.value;
        const month = inputMonth.current.value;
        const year = inputYear.current.value;

        console.log(year,month,day,time);
        time&&props.onAdd(year,month,day,time);

    }

 


  return (
    <div>

        <form action="" onSubmit={onSubmit}>
        <h2>
          {yearControl()}년
        </h2>
        <h2>
          {monthControl()}월
        </h2>
        <h2>
          {dayControl()}일
        </h2>
            <input type="time" ref={inputTime}/>
            <input type="submit"  />
        </form>
    </div>
  )
}

export default InputBirthday
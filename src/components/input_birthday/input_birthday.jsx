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

    
    const inputGender= useRef();
    const inputYear = useRef();
    const inputMonth = useRef();
    const inputDay = useRef();
    const inputAmPm = useRef();
    const inputHour = useRef();
    const inputMinutes = useRef();


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

        const checkAmPm = inputAmPm.current.value;
        let checkHour = inputHour.current.value;
        const checkMinutes = inputMinutes.current.value;
        let calHour = "";
        if(checkAmPm=="오전"){
        calHour = "0"+checkHour.toString();
        }else{
          checkHour +=12
          calHour = checkHour.toString();
        }
        let calMin = "";
        if(checkMinutes<10){
          calMin = "0"+checkMinutes.toString();
        }else{
          calMin = checkMinutes.toString();
        }


        

        const time = calHour+":"+calMin;
        const day = inputDay.current.value;
        const month = inputMonth.current.value;
        const year = inputYear.current.value;

        console.log(inputGender.current.value+"젠더 ");
        time&&props.onAdd(year,month,day,time);

    }

    const selectWoman = ()=>{
      inputGender.current.value="여자"   
      console.log(inputGender.current.value);
    }
    const selectMan = ()=>{
      inputGender.current.value="남자"
      console.log(inputGender.current.value);

    }

    const selectAm = ()=>{
      inputAmPm.current.value="오전"   
      console.log(inputAmPm.current.value);
    }
    const selectPm = ()=>{
      inputAmPm.current.value="오후"
      console.log(inputAmPm.current.value);

    }


  return (
    <div className={styles.container}>

        <form action="" onSubmit={onSubmit}>
        <div className={styles.genderSelect} ref={inputGender}>
        성별
        <input type="button" onClick={selectMan}
          value="남자"/>
       <input type="button" onClick={selectWoman}
         value="여자"/>
        </div>
       <div className={styles.dateSelect}>
        <h2>
          {yearControl()}년
        </h2>
        <h2>
          {monthControl()}월
        </h2>
        <h2>
          {dayControl()}일
        </h2>
        <div className={styles.selectAmPm} ref={inputAmPm}>
        <input type="button" onClick={selectAm}
          value="오전"/>
       <input type="button" onClick={selectPm}
         value="오후"/>
        </div>
        </div>
        <div className={styles.timeInput}>
          <input type="number" ref={inputHour} max="11" min ="00" placeholder='00'/>시
          <input type="number" ref={inputMinutes} max="59" min="00" placeholder='00'/>분
        </div>
          <input type="submit"  />
        </form>
    </div>
  )
}

export default InputBirthday
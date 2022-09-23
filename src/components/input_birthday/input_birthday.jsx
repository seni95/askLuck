import React, { useRef, useState, useCallback } from 'react'
import styles from './input_birthday.module.css'


const InputBirthday = (props) => {


  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate()
  }

  const [selectedYear, setSelectedYear] = useState(today.year);
  const [selectedMonth, setSelectedMonth] = useState(today.month);
  const [selectedDay, setSelectedDay] = useState(today.date);
  const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate();
  const [selectedGender,setSelectedGender] =useState();
  const [selectedAmPm,setSelectedAmPm] =useState();

  const inputGender = useRef();
  const inputYear = useRef();
  const inputMonth = useRef();
  const inputDay = useRef();
  const inputAmPm = useRef();
  const inputHour = useRef();
  const inputMinutes = useRef();

  

  const yearControl = useCallback(() => {
    let yearArr = [];
    const startYear = today.year - 90;
    const endYear = today.year;

    for (let i = endYear; i > startYear; i--) {
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
        onChange={function (e) {
          setSelectedYear(Number(e.target.value));
        }}
        ref={inputYear}
      >
        {yearArr}
      </select>
    );

  }, [selectedYear])


  const monthControl = useCallback(() => {
    let monthArr = [];
    for (let i = 0; i < 12; i++) {
      monthArr.push(
        <option
          key={i + 1}
          value={i + 1}
        >
          {i + 1}월
        </option>
      )
    }

    return (

      <select
        onChange={function (e) {
          setSelectedMonth(Number(e.target.value));
        }}
        ref={inputMonth}

      // value={selectedMonth}
      >
        {monthArr}
        {console.log(selectedMonth)};
      </select>
    )

  }, [selectedMonth])


  const dayControl = useCallback(() => {
    let dayArr = [];

    for (let i = 0; i < dateTotalCount; i++) {
      dayArr.push(
        <option
          key={i + 1}
          value={i + 1}
        >

          {i + 1}일
        </option>
      )
    }
    return (
      <select
        // value={selectedDay}
        ref={inputDay}

      >
        {dayArr}
      </select>
    )

  }, [selectedYear, selectedMonth, dateTotalCount])

  const onSubmit = event => {
    event.preventDefault();

    const checkAmPm = inputAmPm.current.value;
    let tranMinutes = inputMinutes.current.value;
    let transHour = inputHour.current.value;
    //처음 사용자로부터 시간의 숫자값을 받아왔을 때, string으로 받아진다.
    //넘버로 변환시켜주고 (혹시 사용자가 0을 입력했을 시에 0을 빼주고 자연수값만을 받기 위함)
    //다시 스트링으로 변환시켜서 넘겨줘야한다.
    let checkHour = Number(transHour);
    const checkMinutes = Number(tranMinutes);


    let calHour = "";
    if (checkAmPm == "오전") {
      calHour = "0" + checkHour.toString();
    } else {
      checkHour += 12
      calHour = checkHour.toString();
    }
    let calMin = "";
    if (checkMinutes < 10) {
      calMin = "0" + checkMinutes.toString();
    } else {
      calMin = checkMinutes.toString();
    }




    const time = calHour + ":" + calMin;
    const day = inputDay.current.value;
    const month = inputMonth.current.value;
    const year = inputYear.current.value;

    console.log(inputGender.current.value + "젠더 ");
    time && props.onAdd(year, month, day, time);

  }

  const selectWoman = () => {
    inputGender.current.value = "여자"
    console.log(inputGender.current.value);
    setSelectedGender(inputGender.current.value);
  }
  const selectMan = () => {
    inputGender.current.value = "남자"
    console.log(inputGender.current.value);
    setSelectedGender(inputGender.current.value);

  }

  const selectAm = () => {
    inputAmPm.current.value = "오전"
    console.log(inputAmPm.current.value);
    setSelectedAmPm(inputAmPm.current.value);
    
  }
  const selectPm = () => {
    inputAmPm.current.value = "오후"
    console.log(inputAmPm.current.value);
    setSelectedAmPm(inputAmPm.current.value);
  }


  return (
    <div className={styles.container}>

      <form action="" onSubmit={onSubmit}>
        <div className={styles.genderSelect} ref={inputGender}>
          <input type="button" onClick={selectMan}
            value="남자" className={selectedGender=="남자"?styles.checked:""} 
            />
          <input type="button" onClick={selectWoman}
            value="여자" className={selectedGender=="여자"?styles.checked:""}  />
        </div>
        <div className={styles.dateSelect}>
          <span>
            {yearControl()}년
          </span>
          <span>
            {monthControl()}월
          </span>
          <span>
            {dayControl()}일
          </span>
          </div>


          <div className={styles.selectAmPm} ref={inputAmPm}>
            <input type="button" onClick={selectAm}
              value="오전" 
              className={selectedAmPm=="오전"?styles.checked:""}
              />
            <input type="button" onClick={selectPm}
              value="오후" 
              className={selectedAmPm=="오후"?styles.checked:""}
              />
          </div>
        
        <div className={styles.timeInput}>
          <input type="number" ref={inputHour} max="11" min="00" placeholder='00' />시
          <input type="number" ref={inputMinutes} max="59" min="00" placeholder='00' />분
        </div>
        <div className={styles.toSubmit}>
<button>제출</button>

        </div>
        
      </form>
    </div>
  )
}

export default InputBirthday
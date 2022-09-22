import logo from './logo.svg';
import './App.css';
import Logic from './components/logic';
import InputBirthday from './components/input_birthday/input_birthday';
import { useState } from 'react';

function App() {

  const today={
    year:new Date().getFullYear(),
    month:new Date().getMonth()+1,
    date:new Date().getDate()
  }


  const [selectedYear , setSelectedYear] = useState(today.year);
  const [selectedMonth , setSelectedMonth] = useState(today.month-1);
  const [selectedDay , setSelectedDay] = useState(today.date);
  const [selectedTime , setSelectedTime] = useState("00:00");


  const onAdd = (year,month,day,time)=>{
    setSelectedYear(year);
    //그냥 month로 넣었을땐 왜 갑자만 뜬거임..?
    // setSelectedMonth(month);
    //일주부터 시작해서 다 영향받았음..
    setSelectedMonth(month-1);
    setSelectedDay(day);
    setSelectedTime(time);
    console.log('제대로 받았니?' + year,month,day,time);

  }

  return (
    <div className="App">
    <InputBirthday onAdd={onAdd}></InputBirthday>
    <Logic 
    selectedYear = {selectedYear}
    selectedMonth={selectedMonth}
    selectedDay ={selectedDay}
    selectedTime={selectedTime}
    ></Logic>
    {console.log()}
    </div>
  );
}

export default App;

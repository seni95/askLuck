import logo from './logo.svg';
import './App.css';
import InputBirthday from './components/input_birthday/input_birthday';
import { useState } from 'react';
import FourPillarViewer from './components/result/four_pillar_viewer';
import Header from './components/header/header';
import Analysis from './components/analysis/analysis';

function App() {

  const today={
    year:new Date().getFullYear(),
    month:new Date().getMonth()+1,
    date:new Date().getDate()
  }


  const [selectedYear , setSelectedYear] = useState();
  const [selectedMonth , setSelectedMonth] = useState();
  const [selectedDay , setSelectedDay] = useState();
  const [selectedTime , setSelectedTime] = useState();
  const [selectedGender, setSelectedGender] = useState();

  const onAdd = (year,month,day,time,gender)=>{
    setSelectedYear(year);
    //그냥 month로 넣었을땐 왜 갑자만 뜬거임..?
    // setSelectedMonth(month);
    //일주부터 시작해서 다 영향받았음..
    setSelectedMonth(month-1);
    setSelectedDay(day);
    setSelectedTime(time);
    setSelectedGender(gender);

  }

  return (
    <div className="App">
    <Header></Header>

    {
selectedYear&& (
<>


<FourPillarViewer
selectedYear = {selectedYear}
selectedMonth={selectedMonth}
selectedDay ={selectedDay}
selectedTime={selectedTime}
></FourPillarViewer>

<Analysis
selectedYear = {selectedYear}
selectedMonth={selectedMonth}
selectedDay ={selectedDay}
selectedTime={selectedTime}
selectedGender={selectedGender}
></Analysis>

</>
)
    }

    <InputBirthday onAdd={onAdd}></InputBirthday>


    </div>
  );
}

export default App;

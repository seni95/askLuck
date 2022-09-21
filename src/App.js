import logo from './logo.svg';
import './App.css';
import Logic from './components/logic';
import InputBirthday from './components/input_birthday/input_birthday';
import { useState } from 'react';

function App() {

  const [selectedTime , setSelectedTime] = useState(null);


  const onAdd = (time)=>{
    setSelectedTime(time);
  }

  return (
    <div className="App">
    <InputBirthday onAdd={onAdd}></InputBirthday>
    <Logic selectedTime={selectedTime}></Logic>
    </div>
  );
}

export default App;

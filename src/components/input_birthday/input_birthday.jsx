import React, { useRef } from 'react'

const InputBirthday = (props) => {

    const inputTime = useRef();

    const onSubmit = event =>{
        event.preventDefault();

        const time = inputTime.current.value;
        time&&props.onAdd(time);

    }


  return (
    <div>
        <form action="" onSubmit={onSubmit}>
            <input type="time" ref={inputTime}/>
            <input type="submit"  />
        </form>
    </div>
  )
}

export default InputBirthday
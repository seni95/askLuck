import React from 'react'

const ShowHop = (props) => {

    const sky=[
        props.yearSky.name,
        props.monthSky.name,
        props.daySky.name,
        props.timeSky.name
    ]

    const ground=[
        props.yearGround,
        props.monthGround,
        props.dayGround,
        props.timeGround
    ]


    //천간합을 구하는 함수
    const figureSkyHop=()=>{
      let skyHopArr=[];
      let i=0;
      if(sky.indexOf("무")+1==sky.indexOf("계")||sky.indexOf("무")-1==sky.indexOf("계"))
      {
        skyHopArr[i] = <div>무계합화</div>;
        i++;
      }
       
      if(sky.indexOf("갑")+1==sky.indexOf("기")||sky.indexOf("갑")-1==sky.indexOf("기"))
      {
        skyHopArr[i] = <div>갑기합토</div>;
        i++;
      }

      if(sky.indexOf("정")+1==sky.indexOf("임")||sky.indexOf("정")-1==sky.indexOf("임"))
      {
        skyHopArr[i] = <div>정임합목</div>;
        i++;
      }

      if(sky.indexOf("병")+1==sky.indexOf("신")||sky.indexOf("병")-1==sky.indexOf("신"))
      {
        skyHopArr[i] = <div>병신합수</div>;
        i++;
      }

      if(sky.indexOf("을")+1==sky.indexOf("경")||sky.indexOf("을")-1==sky.indexOf("경"))
      {
        skyHopArr[i] = <div>을경합금</div>;
        i++;
      }
    
      return skyHopArr;
    }

  return (
    <div>
      {figureSkyHop()}
    </div>
  )
}

export default ShowHop
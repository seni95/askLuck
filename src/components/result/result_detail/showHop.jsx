import React from 'react'

const ShowHop = (props) => {

    const sky=[
      null, //-1이랑 0이랑 자꾸 나란히 하게되서..
        props.yearSky.name,
        props.monthSky.name,
        props.daySky.name,
        props.timeSky.name
    ]

    const ground=[
      null,
        props.yearGround.name,
        props.monthGround.name,
        props.dayGround.name,
        props.timeGround.name
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
    //방합을 구하는 함수
    const figureBangHop=()=>{
      let a=ground.indexOf("사");
      let b=ground.indexOf("오");
      let c=ground.indexOf("미");
  
      if(a!=-1&&b!=-1&&c!=-1){
        //월지를 하나 차지하고 있어야함.
        if(ground[2]=="사"||ground[2]=="오"||ground[2]=="미")
        return <div>사오미 합화</div>
      }

      a = ground.indexOf("신");
      b = ground.indexOf("유");
      c = ground.indexOf("술");
      
      if(a!=-1&&b!=-1&&c!=-1){
        if(ground[2]=="신"||ground[2]=="유"||ground[2]=="술")
        return <div>신유술 합금</div>
      }
      a = ground.indexOf("해");
      b = ground.indexOf("자");
      c = ground.indexOf("축");
      
      if(a!=-1&&b!=-1&&c!=-1){
        if(ground[2]=="해"||ground[2]=="자"||ground[2]=="축")
        return <div>해자축 합수</div>
      }
      
      a = ground.indexOf("인");
      b = ground.indexOf("묘");
      c = ground.indexOf("진");
      
      if(a!=-1&&b!=-1&&c!=-1){
        if(ground[2]=="인"||ground[2]=="묘"||ground[2]=="진")
        return <div>인묘진 합목</div>
      }
      
    }

  return (
    <div>
      {figureSkyHop()}
      {figureBangHop()}
    </div>
  )
}

export default ShowHop
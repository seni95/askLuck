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
      if(skyHopArr[0]==null)
      return null;
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
      return null;
    }


    const figureSomHop=()=>{
      const fireHop =["인","오","술"];
      const goldHop=["사","유","축"];
      const waterHop =["신","자","진"];
      const treeHop=["해","묘","미"];

      const sample1 =ground.slice(1,4);
      const sample2 = ground.slice(2,5);

     const checkFireHop1=fireHop.filter(x=>sample1.includes(x));
     const checkFireHop2 = fireHop.filter(x=>sample2.includes(x));

    if(checkFireHop1.length==3||checkFireHop2.length==3){
        return <div> 인오술 삼합</div>;
      }

     const checkGoldHop1=goldHop.filter(x=>sample1.includes(x));
     const checkGoldHop2 = goldHop.filter(x=>sample2.includes(x));

    if(checkGoldHop1.length==3||checkGoldHop2.length==3){
        return <div> 사유축 삼합</div>;
      }

      const checkWaterHop1=waterHop.filter(x=>sample1.includes(x));
      const checkWaterHop2 = waterHop.filter(x=>sample2.includes(x));
 
     if(checkWaterHop1.length==3||checkWaterHop2.length==3){
         return <div> 신자진 삼합</div>;
       }
 
       const checkTreeHop1=treeHop.filter(x=>sample1.includes(x));
       const checkTreeHop2 = treeHop.filter(x=>sample2.includes(x));
  
      if(checkTreeHop1.length==3||checkTreeHop2.length==3){
          return <div> 해묘미 삼합</div>;
        }
  
return null;
    }

    const figureBanHop=()=>{

      let banHopResult=[];
      let i=0;
      //삼합이 한개라도 있으면 반합이 나올 수 없음.
      if(!figureSomHop()){

     //화국 반합
     if(ground.includes("오")){
      const fireLeft = ground.indexOf("오")-1;
      const fireRight = ground.indexOf("오")+1;

      if(ground[fireLeft]=="술"||ground[fireRight]=="술"){
        banHopResult[i]=<div>오술 반합</div>;
        i++;
      }
      if(ground[fireLeft]=="인"||ground[fireRight]=="인"){
        banHopResult[i]=<div>인오 반합</div>;
        i++;
      }
     }

     //금국 반합

     if(ground.includes("유")){
      const goldLeft = ground.indexOf("유")-1;
      const goldRight = ground.indexOf("유")+1;

      if(ground[goldLeft]=="사"||ground[goldRight]=="사"){
        banHopResult[i]=<div>사유 반합</div>;
        i++;
      }
      if(ground[goldLeft]=="축"||ground[goldRight]=="축"){
        banHopResult[i]=<div>유축 반합</div>;
        i++;
      }
     }

     //수국 반합

     if(ground.includes("자")){
      const waterLeft = ground.indexOf("자")-1;
      const waterRight = ground.indexOf("자")+1;

      if(ground[waterLeft]=="신"||ground[waterRight]=="신"){
        banHopResult[i]=<div>신자 반합</div>;
        i++;
      }
      if(ground[waterLeft]=="진"||ground[waterRight]=="진"){
        banHopResult[i]=<div>자진 반합</div>;
        i++;
      }
     }

     //목국 반합

     if(ground.includes("묘")){
      const treeLeft = ground.indexOf("묘")-1;
      const treeRight = ground.indexOf("묘")+1;

      

      if(ground[treeLeft]=="해"||ground[treeRight]=="해"){
        banHopResult[i]=<div>해묘 반합</div>;
        i++;
      }
      if(ground[treeLeft]=="미"||ground[treeRight]=="미"){
        banHopResult[i]=<div>묘미 반합</div>;
        i++;
      }
     }

     if(banHopResult[0]==null)
     return null;
     return banHopResult;
      }
      
      return null;


    }


    const figureSixHop=()=>{


      let sixHopResult=[];
      let i=0;

      const Za = ground.indexOf("자");
      if(ground[Za-1]=="축"||ground[Za+1]=="축"){
        sixHopResult[i]=<div>자축합</div>;
        i++;
      }

      const In = ground.indexOf("인");
      if(ground[In-1]=="해"||ground[In+1]=="해"){
        sixHopResult[i]=<div>인해합</div>;
        i++;
      }

      const Myo = ground.indexOf("묘");
      if(ground[Myo-1]=="술"||ground[Myo+1]=="술"){
        sixHopResult[i]=<div>묘술합</div>;
        i++;
      }

      const Jin = ground.indexOf("진");
      if(ground[Jin-1]=="유"||ground[Jin+1]=="유"){
        sixHopResult[i]=<div>진유합</div>;
        i++;
      }

      const Sa = ground.indexOf("사");
      if(ground[Sa-1]=="신"||ground[Sa+1]=="신"){
        sixHopResult[i]=<div>사신합</div>;
        i++;
      }

      const Ow = ground.indexOf("오");
      if(ground[Ow-1]=="미"||ground[Ow+1]=="미"){
        sixHopResult[i]=<div>오미합</div>;
        i++;
      }

      if(sixHopResult[0]==null)
      return null;
      return sixHopResult;
    }


  return (
    <div>
      {figureSkyHop()}
      {figureBangHop()}
      {figureSomHop()}
      {figureBanHop()}
      {figureSixHop()}
      {!figureSkyHop()&&!figureBangHop()&&!figureSomHop()&&!figureBanHop()&&!figureSixHop()&&
      <div>합/충 없음</div>
      }
    </div>
  )
}

export default ShowHop
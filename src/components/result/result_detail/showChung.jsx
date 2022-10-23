import React from 'react'

const ShowChung = (props) => {

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
  

    const figureSkyChung=()=>{
        let skyChungArr=[];
        let i=0;
        if(sky.indexOf("갑")+1==sky.indexOf("경")||sky.indexOf("갑")-1==sky.indexOf("경"))
        {
          skyChungArr[i] = <div>갑경충</div>;
          i++;
        }
         
        if(sky.indexOf("을")+1==sky.indexOf("신")||sky.indexOf("을")-1==sky.indexOf("신"))
        {
          skyChungArr[i] = <div>을신충</div>;
          i++;
        }
  
        if(sky.indexOf("병")+1==sky.indexOf("임")||sky.indexOf("병")-1==sky.indexOf("임"))
        {
          skyChungArr[i] = <div>병임충</div>;
          i++;
        }
  
        if(sky.indexOf("정")+1==sky.indexOf("계")||sky.indexOf("정")-1==sky.indexOf("계"))
        {
          skyChungArr[i] = <div>정계충</div>;
          i++;
        }
        if(skyChungArr[0]==null)
        return null;
        return skyChungArr;

    }

    const figureGroundChung = ()=>{
      let groundChungArr = [];
      let i=0;

      if(ground.indexOf("인")+1==ground.indexOf("신")||ground.indexOf("인")-1==ground.indexOf("신"))
      {
        groundChungArr[i] = <div>인신충</div>;
        i++;
      }

      if(ground.indexOf("사")+1==ground.indexOf("해")||ground.indexOf("사")-1==ground.indexOf("해"))
      {
        groundChungArr[i] = <div>사해충</div>;
        i++;
      }

      if(ground.indexOf("자")+1==ground.indexOf("오")||ground.indexOf("자")-1==ground.indexOf("오"))
      {
        groundChungArr[i] = <div>자오충</div>;
        i++;
      }

      if(ground.indexOf("묘")+1==ground.indexOf("유")||ground.indexOf("묘")-1==ground.indexOf("유"))
      {
        groundChungArr[i] = <div>묘유충</div>;
        i++;
      }

      if(ground.indexOf("진")+1==ground.indexOf("술")||ground.indexOf("진")-1==ground.indexOf("술"))
      {
        groundChungArr[i] = <div>진술충</div>;
        i++;
      }

      if(ground.indexOf("축")+1==ground.indexOf("미")||ground.indexOf("축")-1==ground.indexOf("미"))
      {
        groundChungArr[i] = <div>축미충</div>;
        i++;
      }

      if(groundChungArr[0]==null)
      return null;
      return groundChungArr;

    }

    const figureSomHyung = ()=>{
      const inSaSin = ["인","사","신"];
      const chuckSulMe = ["축","술","미"];

      const sample1 =ground.slice(1,4);
      const sample2 = ground.slice(2,5);

      const checkInSaSin1 = inSaSin.filter(x=>sample1.includes(x));
      const checkInSaSin2 = inSaSin.filter(x=>sample2.includes(x));

      if(checkInSaSin1.length==3||checkInSaSin2.length==3){
        return <div>인사신 삼형</div>;
      }


      const checkChuckSulMe1 = chuckSulMe.filter(x=>sample1.includes(x));
      const checkChuckSulMe2 = chuckSulMe.filter(x=>sample2.includes(x));

      if(checkChuckSulMe1.length===3||checkChuckSulMe2.length===3){
        return <div>축술미 삼형</div>;
      }
 
      return null;
      
    }

    const figureHyung = ()=>{
      let hyungResult = [];
      let i=0;

      if(!figureSomHyung()){
        //삼형이 하나라도 있으면 다른 형은 나올 수 없음


        //자묘형 찾기
        if(ground.includes("자")){
          const zaLeft = ground.indexOf("자")-1;
          const zaRight = ground.indexOf("자")+1;

          if(ground[zaLeft]=="묘"||ground[zaRight]=="묘")
         {
          hyungResult[i]=<div>자묘형</div>;
          i++;
         }
        }

        if(ground.includes("사")){
          const saLeft = ground.indexOf("사")-1;
          const saRight = ground.indexOf("사")+1;

          if(ground[saLeft]=="인"||ground[saRight]=="인")
          {
            hyungResult[i] = <div>인사형</div>;
            i++;
          }
        
          if(ground[saLeft]=="신"||ground[saRight]=="신")
          {
            hyungResult[i] = <div>사신형</div>;
            i++;
          }        
        
        }

        if(ground.includes("술")){
          const sulLeft = ground.indexOf("술")-1;
          const sulRight = ground.indexOf("술")+1;

          if(ground[sulLeft]=="축"||ground[sulRight]=="축")
          {
            hyungResult[i] = <div>축술형</div>;
            i++;
          }
        
          if(ground[sulLeft]=="미"||ground[sulRight]=="미")
          {
            hyungResult[i] = <div>술미형</div>;
            i++;
          }

        }

        if(hyungResult[0]==null)
        return null;
        return hyungResult;

      }



    }

  return (
    <div>
        {figureSkyChung()}
        {figureGroundChung()}
        {figureSomHyung()}
        {figureHyung()}
        </div>
  )
}

export default ShowChung
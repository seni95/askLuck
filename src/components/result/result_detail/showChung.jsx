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

  return (
    <div>
        {figureSkyChung()}
        {figureGroundChung()}
        </div>
  )
}

export default ShowChung
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

  return (
    <div>
        {figureSkyChung()}
        </div>
  )
}

export default ShowChung
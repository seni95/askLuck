import React from 'react'
import Data from '../../data/data'

const CalculateDecades = (props) => {
    
    
    const data = new Data();

  const gender=props.selectedGender;
  const yearSky = props.yearSky;
    const monthSky = props.monthSky;
    const monthGround = props.monthGround;

    const monthSkyIndex = data.sky.findIndex(i=>i.name==monthSky.name);

    let decadesSkyArr = [];

    const returnDecadesSky = () =>{
        console.log(monthSky);
        console.log(monthSkyIndex);

        if(gender=="남자"){

            if(yearSky.sign=="양"){
              //순행해야합니다.
           

            }else if(yearSky.sign=="음"){
                console.log("역행");
            }

        }else if(gender=="여자"){

        }


        return decadesSkyArr;
    }

 return (
  <div>
{returnDecadesSky()}
  </div>
  )
}

export default CalculateDecades
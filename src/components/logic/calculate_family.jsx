import React from 'react'
import Data from '../data/data'

const CalculateFamily = (props) => {

    const data = new Data();

    const daySky = props.daySky;
    const sky = props.sky;
    const ground = props.ground;

    const symbolArr = ["목","화","토","금","수"];

    const checkFamily = ()=>{
        const originSymbol = symbolArr.indexOf(daySky.symbol);

        const isSickSang = originSymbol+1<5? originSymbol+1:0;
        const isInSung = originSymbol-1<0? 4:originSymbol-1;
        let isZaSung = 0;
        if(originSymbol+2==6){
            isZaSung=1;
        }else if(originSymbol+2==5){
            isZaSung=0;
        }else{
            isZaSung = originSymbol+2;
        }

      
        if(sky!=undefined){

        if(sky.sign==daySky.sign)//음양이 같을 경우
        {
            if(sky.symbol==daySky.symbol)
            {
                return "비견";
            }else if(sky.symbol==symbolArr[isSickSang]){
                return "식신";
            }else if(sky.symbol==symbolArr[isInSung]){
                return "편인";
            }else if(sky.symbol==symbolArr[isZaSung]){
                return "편재";
            }else{
                return "편관"
            }

        }else if(sky.sign !=daySky.sign)//음양이 다를 경우
        {
            if(sky.symbol==daySky.symbol)
            {
                return "겁재";
            }else if(sky.symbol==symbolArr[isSickSang]){
                return "상관";
            }else if(sky.symbol==symbolArr[isInSung]){
                return "정인";
            }else if(sky.symbol==symbolArr[isZaSung]){
                return "정재";
            }else{
                return "정관";
            }
        }
    }else if(sky==undefined){


        if(ground.sign==daySky.sign)//음양이 같을 경우
        {
            if(ground.symbol==daySky.symbol)
            {
                return "비견";
            }else if(ground.symbol==symbolArr[isSickSang]){
                return "식신";
            }else if(ground.symbol==symbolArr[isInSung]){
                return "편인";
            }else if(ground.symbol==symbolArr[isZaSung]){
                return "편재";
            }else{
                return "편관"
            }

        }else if(ground.sign !=daySky.sign)//음양이 다를 경우
        {
            if(ground.symbol==daySky.symbol)
            {
                return "겁재";
            }else if(ground.symbol==symbolArr[isSickSang]){
                return "상관";
            }else if(ground.symbol==symbolArr[isInSung]){
                return "정인";
            }else if(ground.symbol==symbolArr[isZaSung]){
                return "정재";
            }else{
                return "정관";
            }
        }

    }
        // if(sky.symbol==daySky.symbol&&sky.sign==daySky.sign){
        //     return "비견";
        // }else if(sky.symbol==daySky.symbol&&sky.sign !=daySky.sign){
        //     return "겁재";
        // }else if(sky.symbol==symbolArr[isSickSang]&& sky.sign)
    }

  return (
    <div>
        {checkFamily()}
    </div>
  )
}

export default CalculateFamily
import React from 'react'
import Data from '../../data/data'
import styles from './calculate_decades.module.css'

const CalculateDecades = (props) => {


    const data = new Data();

    const gender = props.selectedGender;
    const yearSky = props.yearSky;
    const monthSky = props.monthSky;
    const monthGround = props.monthGround;

    let monthSkyIndex = data.sky.findIndex(i => i.name == monthSky.name);
    let monthGroundIndex = data.ground.findIndex(i => i.name == monthGround.name);


    let decadesSkyArr = [];
    let decadesGroundArr = [];
    let decadesResult = [];


    const goStraight = () => {
        let forkey = 0;
        //대운 순행 함수
        for (let i = 0; i < 20; i++) {

            monthSkyIndex = monthSkyIndex < 9 ? ++monthSkyIndex : 0;
            decadesSkyArr.push(
                <span key={forkey} className={styles.span} id={data.sky[monthSkyIndex].color}>
                    {data.sky[monthSkyIndex].code}
                </span>
            )
            forkey++;
        }


        for (let i = 0; i < 20; i++) {
            monthGroundIndex = monthGroundIndex < 11 ? ++monthGroundIndex : 0;
            decadesGroundArr.push(
                <span key={forkey} className={styles.span} id={data.ground[monthGroundIndex].color}>
                    {data.ground[monthGroundIndex].code}
                </span>
            )
            forkey++;

        }

        for (let i = 0; i < 20; i++) {
            decadesResult.push(<span className={styles.pillar}>
                {decadesSkyArr[i]}
                {decadesGroundArr[i]}
            </span>);

        }

    }

    const gobackwards=()=>{
        let forkey = 0;
        //대운 역행 함수
        for (let i = 0; i < 20; i++) {

            monthSkyIndex = monthSkyIndex > 0 ? --monthSkyIndex : 9;
            decadesSkyArr.push(
                <span key={forkey} className={styles.span} id={data.sky[monthSkyIndex].color}>
                    {data.sky[monthSkyIndex].code}
                </span>
            )
            forkey++;
        }


        for (let i = 0; i < 20; i++) {
            monthGroundIndex = monthGroundIndex > 0 ? --monthGroundIndex : 11;
            decadesGroundArr.push(
                <span key={forkey} className={styles.span} id={data.ground[monthGroundIndex].color}>
                    {data.ground[monthGroundIndex].code}
                </span>
            )
            forkey++;

        }

        for (let i = 0; i < 20; i++) {
            decadesResult.push(<span className={styles.pillar}>
                {decadesSkyArr[i]}
                {decadesGroundArr[i]}
            </span>);

        }

    }


    const returnDecadesSky = () => {
        if (gender == "남자") {
            if (yearSky.sign == "양") {
                goStraight();
            } else if (yearSky.sign == "음") {
                gobackwards();
            }

        } else if (gender == "여자") {

            if (yearSky.sign == "음") {
                goStraight();

            } else if (yearSky.sign == "양") {
                gobackwards();
            }

        }


        return decadesResult;
    }

    return (
        <div className={styles.container}>
            {returnDecadesSky()}
        </div>
    )
}

export default CalculateDecades
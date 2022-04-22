import React, { useState, useEffect } from 'react';
import Weather from '../weather/weather';
import { weatherApi } from './../../api/API';

const findDay = (day, dayName) => {
    let date = new Date(day.dt_txt).toLocaleString("ru", { weekday: "long" });
    return (date == dayName);
}

const createArr = (arr) => {
    return (
        arr.map((elem => {
            let time = new Date(elem.dt_txt).toLocaleString("ru", {
                month: "long",
                day: "numeric",
                // weekday: "long", 
                hour: "numeric",
                minute: "numeric"
            });
            return {
                time,
                temp: elem.main.temp,
                feels_like: elem.main.feels_like,
                weather: elem.weather[0]
            }
        })
        )
    )
}

const WeeksForecastContainer = (props) => {

    const [week, setWeek] = useState([]);

    useEffect(() => {
        weatherApi.forWeek(props.city).then(res => {
            console.log('data', res)
            const dailyData = res.filter(reading => reading.dt_txt.includes("12:00:00"))
            // let week = [
            //     { day: 'понедельник', data: createArr(res.filter((day) => findDay(day, 'понедельник'))) },
            //     { day: 'вторник', data: createArr(res.filter((day) => findDay(day, 'вторник'))) },
            //     { day: 'среда', data: createArr(res.filter((day) => findDay(day, 'среда'))) },
            //     { day: 'четверг', data: createArr(res.filter((day) => findDay(day, 'четверг'))) },
            //     { day: 'пятница', data: createArr(res.filter((day) => findDay(day, 'пятница'))) },
            //     { day: 'суббота', data: createArr(res.filter((day) => findDay(day, 'суббота'))) },
            //     { day: 'воскресенье', data: createArr(res.filter((day) => findDay(day, 'воскресенье'))) },
            // ]
            setWeek(dailyData);
        })

    }, [])

    console.log('week2', week)
    return (
        <div>/</div>
    )
}

export default WeeksForecastContainer;

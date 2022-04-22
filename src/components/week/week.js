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
            const dailyData = res.filter(reading => reading.dt_txt.includes("12:00:00"))
            setWeek(dailyData);
        })

    }, [])
    return (
        <div>/</div>
    )
}

export default WeeksForecastContainer;

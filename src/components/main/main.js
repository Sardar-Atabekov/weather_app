import React, { useEffect, useState } from 'react';
import Weather from "./../weather/weather";
import { weatherApi } from './../../api/API';
const Main = () => {
    const [data, setData] = useState([])
    const [cityName, setSityName] = useState("")
    const [isLoader, setIsLoader] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((data) => {
            weatherApi.byCoord(data.coords.latitude, data.coords.longitude).then(res => {
                setSityName(res.data.name);
            })

            weatherApi.forWeekGeo(data.coords.latitude, data.coords.longitude).then(res => {
                console.log('res', res)
                const dailyData = res.filter(reading => reading.dt_txt.includes("12:00:00"))
                setData(dailyData);
                setIsLoader(true);
            })
            console.log('geo', data)
        }, () => {
            alert("Ошибка! Вы не дали доступа к гео-позиции!")
        });
    }, []);


    console.log('data', data)
    return (
        <div className="app">
            <h1>Прогноз погоды на 5 дней</h1>
            <h2>{cityName}</h2>
            {
                isLoader && data.map(item => <Weather data={item} cityName={cityName} />)
            }
            <div className="days">
            </div>
        </div>
    );
}

export default Main;

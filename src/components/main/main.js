import React, { useEffect, useState } from 'react';
import Weather from "./../weather/weather";
import Week from "./../week/week"
import { weatherApi } from './../../api/API';
const Main = () => {
    const [isLoader, setIsLoader] = useState(false);
    const [data, setData] = useState(false)
    const [isSearching, setIsSearching] = useState(false);
    const [weekForecast, setWeekForecast] = useState({ isOpen: false, city: null });
    const [locations, setLocations] = useState([]);

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition((data) => {
    //         weatherApi.forWeek('Moscow').then(res => {
    //             console.log('res', res)
    //             setData(res.data);
    //             setIsLoader(true);
    //         })
    //         console.log('geo', data)
    //     }, () => {
    //         alert("Ошибка! Вы не дали доступа к гео-позиции!")
    //     });
    // }, []);

    // useEffect(() => {
    //     let elements = JSON.parse(localStorage.getItem('locations')) || [];
    //     elements.forEach(elem => getWeatherByName(elem));
    // }, [])

    useEffect(() => {
        localStorage.setItem('locations', JSON.stringify(locations.map(elem => elem.name)))
    }, [locations])

    // const getWeatherByName = (cityName) => {
    //     if (!locations.some(loc => loc.name == cityName)) {
    //         setIsLoader(true);
    //         weatherApi.byCityName(cityName)
    //             .then(res => {

    //                 let { temp, feels_like } = res.data.main;
    //                 let { description, main: icon } = res.data.weather[0];

    //                 setLocations(prevLocations => [{ temp, feels_like, name: cityName, description, icon, id: 1 }, ...prevLocations]);
    //                 setIsLoader(false);
    //             })
    //             .catch(err => {
    //                 alert(`Город ${cityName} не найден :(`)
    //             });
    //     } else alert(`Вы уже добавили город ${cityName}`)
    // }

    console.log('data', data);
    return (
        <div className="app">
            {
                // isLoader && <Weather data={data} />
                <Week city="Moscow" />
            }


            <div className="days">
            </div>
        </div>
    );
}

export default Main;

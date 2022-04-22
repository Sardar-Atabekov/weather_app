import React from 'react';
import "./weather.css";
// import cloudyDay from './../../img/cloudy-day.svg';
import cloudyDay from './../../img/icon/cloudy.png';
import smallCloudy from './../../img/icon/smallCloudy.png';

// import cloudyNight from './../../img/cloudy-night.svg';
// import thunder from './../../img/thunder.svg';
import thunder from './../../img/icon/thunderstorm.png';
// import drizzle from './../../img/drizzle.svg';
import drizzle from './../../img/icon/smallRainDay.png';

// import rainy from './../../img/rainy.svg';
import rainy from './../../img/icon/rainfall.png';
// import snow from './../../img/snowy.svg';
import snow from './../../img/icon/snow.png';
// import clearDay from './../../img/day.svg';
import clearDay from './../../img/icon/dayClear.png';

const Weather = ({ data }) => {
    let { weather } = data;
    let img;
    if (weather[0].main == "Clouds" && weather[0].icon == "04d") {
        img = smallCloudy;
    } else {
        switch (weather[0].main) {
            case "Clouds":
                img = cloudyDay;
                break;

            case "Thunderstorm":
                img = thunder;
                break;

            case "Drizzle":
                img = drizzle;
                break;

            case "Rain":
                img = rainy;
                break;

            case "Snow":
                img = snow;
                break;

            case "Clear":
                img = clearDay;
                break;

            default:
                img = clearDay;
                break;
        }
    }
    console.log('data', data);
    return (
        <div className='weather'>
            <div className='more-info'>
                <div className='main-info'>
                    <img alt={`${weather[0].main}`} src={img} className="weather-img" />
                    <span className='weather-temp'>
                        {Math.round(data.main.temp) + '°C'}
                    </span>
                </div>
            </div>
            <div className='city-block'>
                <span>{data.name}</span>
                <span>21:00</span>
                <span>{weather[0].description}</span>
            </div>
        </div>
    );
}

export default Weather;

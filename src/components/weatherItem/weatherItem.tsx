import { useAppSelector } from "../../hooks";
import { useState, useEffect } from "react";
import './weatherItem.css'
import images from "../images"


const WeatherItem = () => {

    const weatherItemSity = useAppSelector(state => state.todos.wetherSity)

    const [imageName, setImageName] = useState('5.png');

    useEffect(() => {
        let weather = ''
        switch (weatherItemSity && weatherItemSity.weather[0].description) {
            case 'few clouds':
                weather = '3.png';
                break
            case 'scattered clouds':
                weather = '3.png';
                break
            case 'clear sky':
                weather = '5.png';
                break
            case 'haze':
                weather = '1.png';
                break
            case 'light intensity drizzle':
                weather = '1.png'
                break
            case 'broken clouds':
                weather = '4.png';
                break
            case 'overcast clouds':
                weather = '4.png';
                break
            case 'light rain':
                weather = '4.png';
                break
        }

        setImageName(weather)
    }, [weatherItemSity])

    return (
        <div className="info-weather">
            <span className="sity">{weatherItemSity && weatherItemSity.name} </span>
            <span className="sity">{weatherItemSity && weatherItemSity.sys.country}</span>
            <div>{weatherItemSity && weatherItemSity.weather[0].description}</div>

            <img src={images[imageName]} alt="" />

            <div className="temp">{weatherItemSity && Math.floor(weatherItemSity.main.temp - 273.15)}°C</div>
            <div className="min-max">
                <div>Min: {weatherItemSity && Math.floor(weatherItemSity.main.temp_min - 273.15)}°C</div>
                <div>Max: {weatherItemSity && Math.floor(weatherItemSity.main.temp_max - 273.15)}°C</div>
            </div>
            <div>Pressure: {weatherItemSity && weatherItemSity.main.pressure}</div>
            <div>Wind: {weatherItemSity && weatherItemSity.wind.speed}m/s</div>
        </div>
    )
}

export default WeatherItem
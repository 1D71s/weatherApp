import { useAppSelector } from "../../hooks"
import './weatherItem.css'

const WeatherItem = () => {

    const weatherItemSity = useAppSelector(state => state.todos.wetherSity)

    return (
        <div className="info-weather">
            <span>{weatherItemSity && weatherItemSity.name}</span>
            <span>{weatherItemSity && weatherItemSity.sys.country}</span>
            <div>{weatherItemSity && weatherItemSity.weather[0].description}</div>
            <div>img</div>
            <div>Температура: {weatherItemSity && Math.floor(weatherItemSity.main.temp - 273.15)}</div>
            <div>min: {weatherItemSity && Math.floor(weatherItemSity.main.temp_min - 273.15)}</div>
            <div>max: {weatherItemSity && Math.floor(weatherItemSity.main.temp_max - 273.15)}</div>
            <div>Давление: {weatherItemSity && weatherItemSity.main.pressure}</div>
            <div>Ветер: {weatherItemSity && weatherItemSity.wind.speed}m/s</div>
        </div>
    )
}

export default WeatherItem
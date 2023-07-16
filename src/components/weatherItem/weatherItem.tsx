import { useAppSelector } from "../../hooks"

const WeatherItem = () => {

    const weatherItemSity = useAppSelector(state => state.todos.wetherSity)

    return (
        <div>
            <span>{weatherItemSity && weatherItemSity.name}</span>
            <span>{weatherItemSity && weatherItemSity.sys.country}</span>
            <div>{weatherItemSity && weatherItemSity.weather[0].description}</div>
            <div>Температура: {weatherItemSity && weatherItemSity.main.temp - 273.15}</div>
            <div>Давление: {weatherItemSity && weatherItemSity.main.pressure}</div>
        </div>
    )
}

export default WeatherItem
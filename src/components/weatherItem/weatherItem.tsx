import { useAppSelector } from "../../hooks"

const WeatherItem = () => {

    const weatherItemSity = useAppSelector(state => state.todos.wetherSity)


    return (
        <div>
            <div>{weatherItemSity.name}</div>
            <div>{weatherItemSity.weather[0].description}</div>
            <div>{}</div>
            <div>{}</div>
        </div>
    )
}

export default WeatherItem
import { useState } from 'react';
import './style.css';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchWeather } from './store/mySlice';
import WeatherItem from './components/weatherItem/weatherItem';


function App() {

  const [sity, setSity] = useState('Kyiv')

  const loading = useAppSelector(state => state.todos.loading)
  const info = useAppSelector(state => state.todos.wetherSity)


  const dispatch = useAppDispatch()

  const getWeather = () => {
    dispatch(fetchWeather(sity))
  }


  return (
    <div className="App">
      <input type="text" onChange={(e) => setSity(e.target.value)}/>
      <button onClick={getWeather}>find</button>

      {loading === true && <div>Load...</div>}

      {info && <WeatherItem/>}
    </div>
  );
}

export default App;

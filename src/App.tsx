import { useState } from 'react';
import './style.css';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchWeather } from './store/mySlice';
import WeatherItem from './components/weatherItem/weatherItem';
import LoaderSpiner from './components/loader/Loader';

function App() {

  const [sity, setSity] = useState('')

  const loading = useAppSelector(state => state.todos.loading)
  const info = useAppSelector(state => state.todos.wetherSity)
  const error = useAppSelector(state => state.todos.error)

  const dispatch = useAppDispatch()

  const getWeather = () => {
    dispatch(fetchWeather(sity))
  }

  return (
    <div className="container">
      <div className='search'>
        <input className='search-input' type="text" onChange={(e) => setSity(e.target.value)} placeholder='sity'/>
        <button className='search-btn' onClick={getWeather}>search</button>
      </div>

      {loading === true && <div>
          <LoaderSpiner/>
        </div>}
      
      {(info && !loading) && <WeatherItem/>}

      {(error && !info && !loading) && <div>Something went wrong...</div>}
    </div>
  );
}

export default App;

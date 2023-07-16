import { useState } from 'react';
import './style.css';
import { useAppDispatch } from './hooks';
import { fetchWeather } from './store/mySlice';


function App() {

  const [sity, setSity] = useState('')

  const dispatch = useAppDispatch()

  const getWeather = () => {
    dispatch(fetchWeather(sity))
  }


  return (
    <div className="App">
      <input type="text" onChange={(e) => setSity(e.target.value)}/>
      <button onClick={getWeather}>find</button>
    </div>
  );
}

export default App;

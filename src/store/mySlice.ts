import { createSlice, createAsyncThunk, PayloadAction, AnyAction } from "@reduxjs/toolkit";

const API_KEY = '713773961dbe7e3002728dd63422e077'

interface Sys {
    country: string;
    sunset: number;
}

interface Wind {
    speed: number;
}

interface Main {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
}

interface WeatherData {
    name: string;
    weather: { description: string }[];
    sys: Sys;
    main: Main;
    wind: Wind;
}

interface Todos {
    wetherSity: WeatherData | null;
    loading: boolean;
    error: string | null
}


const initialState: Todos = {
    wetherSity: null,
    loading: false,
    error: null
}



export const fetchWeather = createAsyncThunk<WeatherData, string, {rejectValue: string}>(
    'todos/fetchWeather',
    async function(sity, {rejectWithValue}) {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${sity}&appid=${API_KEY}`)

        if (!response.ok) {
            return rejectWithValue('Server Error')
        }

        const data = await response.json()

        return data
    }
)

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.wetherSity = null
                state.loading = true
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.loading = false
                state.wetherSity = action.payload
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.loading = false
            })
    }
})

export default todoSlice.reducer

function isError(action: AnyAction) {
    return action.type.endsWith('rejected')
}
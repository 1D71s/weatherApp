import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = '713773961dbe7e3002728dd63422e077'

interface Todos {
    wetherSity: string;
    loading: boolean
}

const initialState: Todos = {
    wetherSity: '',
    loading: false
}


export const fetchWeather = createAsyncThunk<string, string, {rejectValue: string}>(
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
                state.loading = true
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.loading = false
                state.wetherSity = action.payload
            })
    }
})

export default todoSlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

//weather city request
//action
export const fetchWeatherAction = createAsyncThunk(
  "weather/fetch",
  async (payload, { rejectWithValue /*getState, dispatch*/ }) => {
    //resposta, erro warning, acesso à store, dispatch da action

    const { city, unit } = payload
    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&&units=${unit}&appid=${process.env.REACT_APP_API_KEY}`
      )
      return data
    } catch (error) {
      if (!error?.response) {
        throw error
      }
      return rejectWithValue(error?.response?.data)
    }
  }
)

//slices
const weatherSlice = createSlice({
  name: "weather",
  initialState: { loading: true },
  extraReducers: (builder) => {
    //pending
    builder.addCase(fetchWeatherAction.pending, (state /*action*/) => {
      state.loading = true
    })
    //fulfilled
    builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
      state.weather = action?.payload
      state.loading = false
      state.error = undefined
    })
    //rejected
    builder.addCase(fetchWeatherAction.rejected, (state, action) => {
      state.loading = false
      state.weather = undefined
      state.error = action?.payload
    })
  },
})

export default weatherSlice.reducer

//-------------------------------------

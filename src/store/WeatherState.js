
import { configureStore } from "@reduxjs/toolkit";
import WeatherSlicer from "./WeatherSlicer";


const store = configureStore({
    reducer: {
        weatherSlicer: WeatherSlicer
    }
});

export default store;
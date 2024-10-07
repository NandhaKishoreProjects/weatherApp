import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    weatherDetails: [],
    isLoading: false,
    errorText: null
};


const weatherSlice = createSlice({
    name: 'weather',
    initialState: INITIAL_STATE,
    reducers: {
        addWeatherDetails(state, action) {
            state.weatherDetails =  action.payload.data;
            state.isLoading = false;    
            state.errorText = null;       
        },

        loadingIndicatorOn(state,action) {
            state.weatherDetails = [];
            state.isLoading = true;
            state.errorText = null;
        },
        reset(state, action) {
            state.isLoading = false;
            state.errorText = null;
        },
        noDataFound(state, action) {
            state.errorText = action.payload.errorText;
            state.isLoading = false;  
        }

    }
});

console.log(weatherSlice);

export const {
    addWeatherDetails,
    loadingIndicatorOn,
    reset,
    noDataFound
} = weatherSlice.actions;

export default weatherSlice.reducer;
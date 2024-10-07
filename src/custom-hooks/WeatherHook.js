import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getWeatherDetailsForCity } from "../services/weather-service";
import { useDispatch, useSelector } from "react-redux";
import { addWeatherDetails, loadingIndicatorOn, noDataFound, reset } from "../store/WeatherSlicer";
import store from "../store/WeatherState";



export function WeatherHook() {
    
 const [city, setCity] =  useState(null);
 const { isLoading: queryLoading, errorText }  = useSelector(store => store.weatherSlicer);
 const dispatch = useDispatch();
 const { data,  refetch } = useQuery({
    queryKey: [city],
    queryFn: () => getWeatherDetailsForCity(city),
    enabled: false,
  });
     
 useEffect(function() {

    async function fetchData() {
        let resData = await refetch();
        if(resData?.data) {
            dispatch(addWeatherDetails({ data: resData?.data }))
        } else {
            dispatch(noDataFound({errorText: 'No Data Found'}))
        }
       
    }
   
    if(city){
        dispatch(loadingIndicatorOn());

       fetchData();
      
    }
   

    return () => dispatch(reset())
 },[city]);
    
 return {
    city,
    setCity,
    queryLoading,
    errorText
 };

}
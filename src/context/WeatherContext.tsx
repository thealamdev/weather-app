import { createContext } from "react";
import type { WeatherData } from "../hooks/useWeather";

type WeatherContextData = {
    weather: WeatherData;
    isLoading: {
        state: boolean;
        message: string;
    }
}

const initialValue: WeatherContextData = {
    weather: {
        temp: 0,
        maxTemp: 0,
        minTemp: 0,
        location: '',
        humidity: 0,
        cloudy: '',
        windSpeed: 0,
        time: '',
        longitude: 0,
        latitude: 0,
    },
    isLoading: {
        state: false,
        message: ''
    }
}

const WeatherContext = createContext(initialValue);

export default WeatherContext;
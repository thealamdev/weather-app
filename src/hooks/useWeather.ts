import { useEffect, useState } from "react";

type WeatherData = {
    temp: number;
    maxTemp: number;
    minTemp: number;
    location: string;
    humidity: number;
    cloudy: string;
    windSpeed: number;
    time: string;
    longitude: number;
    latitude: number;
}

const useWeather = () => {
    const [weather, setWeather] = useState<WeatherData>({
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
    });

    const [isLoading, setLoading] = useState({
        state: false,
        message: ''
    });

    const fetchWeather = async (langitude: number, latitude: number) => {
        try {
            setLoading({ state: true, message: 'Fetching weather data...' });
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${langitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            const data = await response.json();
            
            setWeather({
                temp: data.main.temp,
                maxTemp: data.main.temp_max,
                minTemp: data.main.temp_min,
                location: data.name,
                humidity: data.main.humidity,
                cloudy: data.weather[0].description,
                windSpeed: data.wind.speed,
                time: new Date(data.dt * 1000).toLocaleString(),
                longitude: data.coord.lon,
                latitude: data.coord.lat,
            });
        } catch (error) {
            console.error('Error fetching weather data:', error);
        } finally {
            setLoading({ state: false, message: '' });
        }
    }

    useEffect(() => {
        setLoading({ state: true, message: 'Getting your location...' });
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                fetchWeather(longitude, latitude);
            })
        }
    }, [])

    return { weather, isLoading };
}

export default useWeather;
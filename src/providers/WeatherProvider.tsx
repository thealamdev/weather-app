import WeatherContext from '../context/WeatherContext';
import { useWeather } from '../hooks';

const WeatherProvider = ({ children }: { children: any }) => {
    const { weather, isLoading } = useWeather();
    console.log(weather)
    return (
        <WeatherContext.Provider value={{ weather, isLoading }}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherProvider;
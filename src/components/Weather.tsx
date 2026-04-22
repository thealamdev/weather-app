import heart from '../assets/heart.svg';
import cloud from '../assets/cloud.svg';
import pin from '../assets/pin.svg';
import tempIcon from '../assets/icons/temp-max.svg';
import tempMinIcon from '../assets/icons/temp-min.svg';
import humidityIcon from '../assets/icons/humidity.svg';
import cloudyIcon from '../assets/icons/cloud.svg';
import windIcon from '../assets/icons/wind.svg';
import { useWeather } from '../hooks';

export default function Weather() {

    const {weather, isLoading} = useWeather();

    console.log(weather, isLoading)
    return (
        <main>
            <section className="">
                <div className="container">
                    <div
                        className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
                        <div className="grid md:grid-cols-2 gap-10 md:gap-6">
                            <div className="md:col-span-2">
                                <div className="flex items-center justify-end space-x-6">
                                    <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
                                        <span>Add to Favourite</span>
                                        <img src={heart} alt="heart" />
                                    </button>

                                </div>
                            </div>
                            <div>
                                <div className="max-md:flex items-center justify-between md:-mt-10">
                                    <img src={cloud} alt="cloud" />
                                    <div className="max-md:flex items-center max-md:space-x-4">
                                        <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">{weather.temp}°</h1>
                                        <div className="flex items-center space-x-4 md:mb-4">
                                            <img src={pin} alt='pin' />
                                            <h2 className="text-2xl lg:text-[50px]">{weather.location}</h2>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm lg:text-lg">{weather.time}</p>
                            </div>
                            <div>
                                <p className="text-sm lg:text-lg font-bold uppercase mb-8">{weather.cloudy}</p>
                                <ul className="space-y-6 lg:space-y-6">
                                    <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                                        <span>Temp max</span>
                                        <div className="inline-flex space-x-4">
                                            <p>{weather.maxTemp}°</p>
                                            <img src={tempIcon} alt="temp-max" />
                                        </div>
                                    </li>
                                    <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                                        <span>Temp min</span>
                                        <div className="inline-flex space-x-4">
                                            <p>{weather.minTemp}°</p>
                                            <img src={tempMinIcon} alt="temp-min" />
                                        </div>
                                    </li>
                                    <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                                        <span>Humadity</span>
                                        <div className="inline-flex space-x-4">
                                            <p>{weather.humidity}%</p>
                                            <img src={humidityIcon} alt="humidity" />
                                        </div>
                                    </li>
                                    <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                                        <span>Cloudy</span>
                                        <div className="inline-flex space-x-4">
                                            <p>{weather.cloudy}%</p>
                                            <img src={cloudyIcon} alt="cloudy" />
                                        </div>
                                    </li>
                                    <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                                        <span>Wind</span>
                                        <div className="inline-flex space-x-4">
                                            <p>{weather.windSpeed}km/h</p>
                                            <img src={windIcon} alt="wind" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}

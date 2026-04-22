import './App.css'
import Header from './components/Header';
import Weather from './components/Weather';
import { WeatherProvider } from './providers';

function App() {
  return (
    <WeatherProvider>
      <div className="bg-body font-[Roboto] text-light bg-[url('./assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
        <Header />
        <Weather />
      </div>
    </WeatherProvider>
  )
}

export default App


import axios from "axios";
import { useEffect, useState } from "react";
import MainDisplay from "./components/MainDisplay";
import Sidebar from "./components/sidebar";
import Loading from "./components/loading";

const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "appid=2a44318a88c074e4bdbd09721e9f08b6";
const translations = {
  en: {
    anotherLocation: "Another location",
    weatherDetails: "Weather Details",
    cloudy: "Cloudy",
    humidity: "Humidity",
    wind: "Wind",
    rain: "Rain",
    loading: "Loading..."
  },
  ru: {
    anotherLocation: "Другой город",
    weatherDetails: "Детали погоды",
    cloudy: "Облачность",
    humidity: "Влажность",
    wind: "Ветер",
    rain: "Осадки",
    loading: "Загрузка..."
  }
};



interface WeatherResponse {
  coord: Coordinates;
  weather: WeatherCondition[];
  base: string;
  main: MainStats;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number; 
  sys: SystemInfo;
  timezone: number; 
  id: number; 
  name: string; 
  cod: number; 
}

interface Coordinates {
  lon: number;
  lat: number;
}

interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface MainStats {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

interface Clouds {
  all: number; 
}

interface SystemInfo {
  country: string;
  sunrise: number; 
  sunset: number; 
}

const App = () => {
  const [data, setData] = useState<WeatherResponse | null>(null);
  const [city, setCity] = useState("bishkek");
  const [lang, setLang] = useState<"ru" | "en">("ru");
  const t = translations[lang];

  useEffect(() => {
  
    axios.get(`${API_URL + city}&${API_KEY}&lang=${lang}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, [city, lang]); //язык

  if (!data) return <Loading />;

  return (
    <div className="app-container">
    
      <button 
        className="lang-switch" 
        onClick={() => setLang(lang === "ru" ? "en" : "ru")}
      >
        {lang === "ru" ? "EN" : "RU"}
      </button>

      <div className="overlay">
        <MainDisplay
          temp={Math.round(data.main.temp - 273.15)}
          city={data.name}
          description={data.weather[0].description}
          icon={data.weather[0].icon}
        />

        <Sidebar
          t={t} 
          setCity={setCity}
          clouds={data.clouds.all}
          humidity={data.main.humidity}
          wind={data.wind.speed}
          rain={data.weather?.[0].main || ""}
        />
      </div>
    </div>
  );
};

 
export default App;

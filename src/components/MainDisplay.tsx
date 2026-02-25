interface MainProps {
  temp: number;
  city: string;
  description: string;
  icon: string;
}

const MainDisplay = ({ temp, city, description, icon }: MainProps) => {



  return (
    <div className="main-display">
      <div className="logo">the.weather</div>
      <div className="weather-info">
        <h1 className="temp">{temp < 10 ? `0${temp}` : temp}°</h1>
        <div className="location-box">
          <h2 className="city">{city}</h2>
        </div>
        <div className="condition">
          <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="icon" />
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MainDisplay;
interface MainProps {
  temp: number;
  city: string;
  description: string;
  icon: string;
}

const MainDisplay = ({ temp, city, description, icon }: MainProps) => {

  const bgImage = "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2000&auto=format&fit=crop"
  const bgImgYasno = "https://gagauzinfo.md/storage/articles/26797/870-661384522f199_Summer_42.jpg"
  const pasmurno = "https://ulpravda.ru/pictures/news/big/87082_big.jpg"

  function setBgImg(text:string) {
    switch (text) {
      case "пасмурно":
        return pasmurno;
      case "ясно":
        return bgImgYasno;
      case "небольшой дождь":
        return "https://files.1mi.media/a75e90ae4cd6b4ee2c0f9c85fcd0f8a291aa6acd/c:1920:1080:nowe:0:-1/c6905dc50f0380c95e8b643b4359c787a6689bb9be84d8a5878b57faa791.jpg";
      default:
        return bgImage;
    }
  }


  return (
    <div className="main-display"
      style={{
        backgroundImage: `url(${setBgImg(description)})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="logo">the.weather</div>
      <div className="weather-info">
        <h1 className="temp">{temp < 10 ? `0${temp}` : temp}°</h1>
        <div className="location-box">
          <h2 className="city">{city}</h2>
        </div>
        <div className="condition">
          <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="icon" />
          <p>{description} </p>
        </div>
      </div>
    </div>
  );
};

export default MainDisplay;
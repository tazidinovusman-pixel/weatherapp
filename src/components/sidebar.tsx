import { useState } from "react";

interface SidebarProps {
  t: any;
  clouds: number;
  humidity: number;
  wind: number;
  rain: string;
  setCity?: (city: string) => void;
}

const Sidebar = ({
  t,
  clouds,
  humidity,
  wind,
  rain,
  setCity,
}: SidebarProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (setCity && inputValue.trim() !== "") {
      setCity(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="sidebar">
      <div className="search-section">
        <input
          type="text"
          placeholder={t.anotherLocation}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button className="search-btn" onClick={handleSearch}>
          <img 
            width={15} 
            src="https://cdn-icons-png.flaticon.com/128/19027/19027690.png" 
            alt="search icon" 
          />
        </button>
      </div>

      <div className="details">
        <h3>{t.weatherDetails}</h3>

        <div className="detail-row">
          <span>{t.cloudy}</span>
          <span>{clouds}%</span>
        </div>

        <div className="detail-row">
          <span>{t.humidity}</span>
          <span>{humidity}%</span>
        </div>

        <div className="detail-row">
          <span>{t.wind}</span>
          <span>{wind} km/h</span>
        </div>

        <div className="detail-row">
          <span>{t.rain}</span>
          <span>{rain}</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
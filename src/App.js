import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

const API_KEY = "79eb8ec2e81d4093ada08b2de06c34d3"
const Container =styled.div`
  display: flex;
  flex-direction:column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #505eaf;
  padding: 20px 10px;
  border-radius: 13px;
  width: 380px;
  background-color: white;
  font-family: 'Questrial', sans-serif; 
`;




function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

    const fetchWeather = async (e) =>{
    e.preventDefault();
    const response= 
      await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      setWeather(response.data)
      console.log(response)
    }
  return (
    <Container>
      
      {weather?<WeatherComponent weather={weather}/>:<CityComponent setCity={setCity} fetchWeather={fetchWeather}/>}
    </Container>
  );
}

export default App;

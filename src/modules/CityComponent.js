import styled from "styled-components";


const WeatherLogo=styled.img`
width: 140px;
height: 140px;
margin: 40px auto;
`
const ChooseCityLabel=styled.span`
color: black;
font-size: 18px;
margin: 10px auto;
`
const SearchBox=styled.form`
display: flex;
flex-direction: row;
border: #3d16e9 solid 1px;
border-radius: 2px;
color: #3d16e9;
font-size: 18px;
font-weight: bold;
margin: 20px auto;


& input{
    padding: 10px;
    font-size: 14px;
    border: none;
    outline:none;
    font-family: 'Questrial';
}

& button{
    padding: 10px;
    font-size: 14px;
    color: white;
    background-color: #3743ec;
    border: none;
    outline:none;
    font-weight: bold;
    cursor: pointer; 
    font-family: 'Questrial';
}

`;

const AppLabel =styled.div`
  color:black;
  font-size: 18px;
  font-weight: bold;
`;



const CityComponent =(props) => {
    const {setCity,fetchWeather}=props;
    return (
        <>
        <AppLabel>Weather App</AppLabel>
        <WeatherLogo src="/icons/perfect-day.gif"/>
        <ChooseCityLabel>Find the weather in your city</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
            <input type="text" 
             placeholder="City" 
             onChange={e=>setCity(e.target.value)}
            // onKeyPress={(e) => e.key === 'Enter' && fetchWeather()}
            />
            
            <button type={"submit"}>Search</button>
        </SearchBox>
        </>
    )
}

export default CityComponent;
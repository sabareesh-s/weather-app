import styled from "styled-components";


export const WeatherInfoIcons = {
    sunset: "/icons/temp.svg",
    sunrise: "/icons/temp.svg",
    humidity: "/icons/humidity.svg",
    wind: "/icons/wind.svg",
    visibility: "/icons/visibility.svg",
};

const WeatherCondition = styled.div`
display:flex;
flex-direction: column;
align-items: center;
width:100%;
justify-content:space-between;
margin: 15px auto;
font-size: 14px;


`

const Condition = styled.span`
margin: 2px auto;
font-size: 14px;

margin-top: 25px;
& span {
    font-size: 18px;
    text-transform: capitalize;

}
`

const WeatherLogo=styled.img`
width: 100px;
height: 100px;
margin: 5px auto;
border-radius: 13px;
background: #cecdfd;
`
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 5px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  
  
`;

const Location=styled.span`
font-size:28px;
font-weight: bold;
margin-bottom: 20px;
`
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }

`;

const BackButton = styled.div`
    display: flex;
    align-items: left;
    position: absolute;
    background-color: #a2a8fa; 
    border: none;
     color: white;
     padding: 5px 10px;
     text-align: left;
      text-decoration: none;
     display: inline-block;
    font-size: 14px;
    border-radius: 20px;
    flex-direction: row;
    margin-right: 310px;
    cursor: pointer; 

`

const WeatherInfoContainer=styled.div`
display: flex;
width: 90%;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;


`



const WeatherInfoComponent=(props)=>{
    const {name,value}=props;
    return(
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]}/>
            <InfoLabel>
                {value}
                 <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    )
}

const WeatherInfoLabel=styled.span`
font-size:14px;
font-weight: bold;
margin: 20px 25px 10px;
text-align: center;
width: 90%;

`

const WeatherComponent =(props) => {
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <>
        <BackButton onClick={() => window.location.reload(false)}> Back </BackButton>
        <WeatherCondition>
        
        <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>

        <WeatherLogo src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}/>
            
            <Condition>
                <span><strong>{`${Math.floor(weather?.main?.temp - 273)} °C`}</strong> {` , ${weather?.weather[0].description}`}</span>
                
            </Condition>
                <br></br> Min : {`${Math.floor(weather?.main?.temp_min - 273)} °C`}
                {" | "}Max : {`${Math.floor(weather?.main?.temp_max - 273)} °C`}
        
            
            
        </WeatherCondition>
      
        <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
        <WeatherInfoContainer>
            <WeatherInfoComponent name={isDay?"sunset":"sunrise"} 
            value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])} />
            <WeatherInfoComponent name="humidity" value={weather?.main?.humidity}/>
            <WeatherInfoComponent name="wind" value={
                `${weather?.wind?.speed} ,${weather?.wind?.deg}°`
                }/>
            <WeatherInfoComponent name="visibility" value={weather?.visibility}/>
        </WeatherInfoContainer>
        </>
    )
}
export default WeatherComponent;
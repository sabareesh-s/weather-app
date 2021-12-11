import styled from "styled-components";

const WeatherCondition = styled.div`
display:flex;
flex-direction: row;
align-items: center;
width:100%;
justify-content:space-between;
margin: 30px auto;
`

const Condition = styled.span`
margin:20px auto;
font-size: 14px;
& span {
    font-size: 28px;

}
`

const WeatherLogo=styled.img`
width: 100px;
height: 100px;
margin: 5px auto;
`
const Location=styled.span`
font-size:28px;
font-weight: bold;
`
const Location=styled.span`
font-size:28px;
font-weight: bold;
`

const WeatherInfoLabel=styled.span`
font-size:14px;
font-weight: bold;
margin: 20px 25px 10px;
text-align:start;
width: 90%;
`

const WeatherComponent =() => {
    return (
        <>
        <WeatherCondition>
            <Condition><span>30 C</span> | Cloudy</Condition>
            <WeatherLogo src="/icons/perfect-day.svg"/>
        </WeatherCondition>
        <Location>London, GB</Location>
        <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
        <WeatherInfoContainer>
            <WeatherInfoComponent/>
            <WeatherInfoComponent/>
            <WeatherInfoComponent/>
            <WeatherInfoComponent/>
        </WeatherInfoContainer>
        </>
    )
}
export default WeatherComponent;
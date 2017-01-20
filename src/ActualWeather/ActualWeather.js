import React from 'react'
import {connect} from 'react-redux'
import icons from './icons.json'
import 'weather-icons/css/weather-icons.css'
import {
  Row,
  Col
} from 'react-bootstrap'


const mapStateToProps = state => ({
  weatherCast: state.weatherData.weatherCast,
  weatherForecast: state.weatherForecastData.weatherForecast,
  weatherList: state.weatherData.weatherList
})


const getIcon = (props) => {
  let icon = ''
  let iconLabel = ''
  const prefix = 'wi wi-'
  const code = props.weather[0].id

  iconLabel = (icons[code].icon)
  if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
    icon = prefix + 'day-' + iconLabel;
  } else {
    icon = prefix + iconLabel;
  }

  return icon
}


function timeConverter(UNIX_timestamp) {
  const a = new Date(UNIX_timestamp * 1000)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const month = months[a.getMonth()]
  const date = a.getDate()
  const day = days[a.getDay()]
  const setTime = day + ' ' + date + ' ' + month
  return setTime;
}

const extractWeatherData = (allData) => ({
  city: allData.city,
  placeName: allData.name,
  placeDate: allData.dt,
  placeTemperature: (allData.main.temp),
  placeMainWeather: (allData.weather[0].main),
  placeWind: (allData.wind.speed),
  placeWindDirection: (allData.wind.deg),
  placeClouds: (allData.clouds.all),
  placeHumidity: (allData.main.humidity),
  placeCountryCode: (allData.sys.country),
  list: (allData.list),
  icon: getIcon(allData)
})


const ActualWeather = (props) => {

  if (props.weatherCast === null) {
    return (<p>Loading...</p>)
  }
  const {
      placeName,
      placeTemperature,
      placeMainWeather,
      placeWind,
      placeWindDirection,
      placeClouds,
      placeHumidity,
      icon
  } = extractWeatherData(props.weatherCast)

  return (
      <Col xs={12} className="actual-weather">
        <Col xs={12}>
          <h1>{placeName}</h1>
        </Col>

        <Col xs={9} className="main-weather">
          <Col xs={12}>
            <icon className={icon}/>
            <h2>{placeMainWeather}</h2>
          </Col>

          <Col xs={12}>
            <span> {placeTemperature}
              <icon className="wi wi-celsius"/>
            </span>
          </Col>
        </Col>

        <Col xs={3} className="secondary-weather">
          <Col xs={12}>
            <icon className="wi wi-strong-wind pull-left"/>
            <span>Wind speed {placeWind}m/s {placeWindDirection}</span>
          </Col>

          <Col xs={12}>
            <icon className="wi wi-cloudy pull-left"/>
            <span>Cloudiness {placeClouds}%</span>
          </Col>

          <Col xs={12}>
            <icon className="wi wi-smoke pull-left"/>
            <span>Humidity {placeHumidity}%</span>
          </Col>
        </Col>

        <Col xs={12} className="actual-weather">
          <h2>Forecast for 12 days</h2>
        </Col>
      </Col>

  )
}


const ActualWeatherForecast = (props) => {
  if (props.weatherForecast === null) {
    return (<p>Loading Weather Forecast...</p>)
  }
  return (
      <Row className="forecast">
        <div>
          {props.weatherForecast.list.map(
              forecast =>
                  <Col className='singleItem' xs={3} md={3} lg={2}>
                    <icon className={getIcon(forecast)}></icon>

                    <p>{Math.round(forecast.temp.day)}
                      <icon className="wi wi-celsius"/>
                    </p>

                    <p className="date">{timeConverter(forecast.dt)}</p>
                  </Col>
          )}
        </div>
      </Row>

  )
}

const ActualWeatherMinified = (props) => {
  const {weatherId} = props
  if (props.weatherList === null) {
    return (<p>Loading Weather...</p>)
  }
  const {
      placeTemperature,
      icon
  } = extractWeatherData(props.weatherList.list.find(item => item.id === weatherId))
  return (
      <p>
        <icon className={icon}/>
        {placeTemperature}
        <icon className="wi wi-celsius"/>
      </p>

  )
}


export default {
  actualWeather: connect(mapStateToProps)(ActualWeather),
  weatherMinified: connect(mapStateToProps)(ActualWeatherMinified),
  weatherForecast: connect(mapStateToProps)(ActualWeatherForecast)
}





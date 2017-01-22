import {FETCH_WEATHER_API,FETCH_WEATHER_FORECAST_API} from './actionTypes'

const api_key = 'dc2f2e72b22d9a90fd58cf8ed86be518'
const api_key2= 'f19cdc2f26baa8a85e9db4442636635b'

export const fetchWeather = (city_name) => dispatch => {
  fetch("http://api.openweathermap.org/data/2.5/weather?id=" + city_name + "&APPID=" + api_key + "&units=metric").then(
    (response) => { return response.json() }
  ).then(
    (weatherData) => {
      dispatch({type: FETCH_WEATHER_API, weatherCast: weatherData})
    }
  ).catch(
    (errorFetching) => {
      console.log('failed to fetch: ', errorFetching)
    }
  )
}

export const fetchWeatherForecast = (city_name) => dispatch => {
  fetch("http://api.openweathermap.org/data/2.5/forecast/daily?id=" + city_name + "&APPID=" + api_key2 + "&units=metric&cnt=12").then(
    (response) => { return response.json() }
  ).then(
    (weatherForecastData) => {
      dispatch({type: FETCH_WEATHER_FORECAST_API, weatherForecast: weatherForecastData})
    }
  ).catch(
    (errorFetching) => {
      console.log('failed to fetch: ', errorFetching)
    }
  )
}

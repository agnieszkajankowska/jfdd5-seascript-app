import {FETCH_WEATHER_API} from './actionTypes'
import {places} from '../../Database'

const api_key = 'dc2f2e72b22d9a90fd58cf8ed86be518'

let city_names = (
  places.map(
    place =>
    place.name
  )
)

const city_name = city_names[3]


export const fetchWeather = () => dispatch => {
  fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&APPID=" + api_key + "&units=metric").then(
    (response) => { return response.json() }
  ).then(
    (weatherData) => {
      console.log('parsed json', weatherData)
      dispatch({type: FETCH_WEATHER_API, weatherCast: weatherData})
    }
  ).catch(
    (errorFetching) => {
      console.log('failed to fetch: ', errorFetching)
    }
  )
}

export const fetchWeatherForecast = () => dispatch => {
  fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + city_name + "&APPID=" + api_key + "&units=metric&cnt=6").then(
    (response) => { return response.json() }
  ).then(
    (weatherForecastData) => {
      console.log('parsed json2', weatherForecastData)
      dispatch({type: FETCH_WEATHER_API, weatherForecast: weatherForecastData})
    }
  ).catch(
    (errorFetching) => {
      console.log('failed to fetch: ', errorFetching)
    }
  )
}

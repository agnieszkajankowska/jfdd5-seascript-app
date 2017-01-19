import {FETCH_WEATHER_API,FETCH_WEATHER_LIST_API,FETCH_WEATHER_FORECAST_API} from './actionTypes'

const api_key = 'dc2f2e72b22d9a90fd58cf8ed86be518'

export const fetchWeather = (city_name) => dispatch => {
  fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&APPID=" + api_key + "&units=metric").then(
    (response) => { return response.json() }
  ).then(
    (weatherData) => {
      console.debug('PARSED WEATHER', weatherData)
      dispatch({type: FETCH_WEATHER_API, weatherCast: weatherData})
    }
  ).catch(
    (errorFetching) => {
      console.log('failed to fetch: ', errorFetching)
    }
  )
}

export const fetchWeatherForecast = (city_name) => dispatch => {
  fetch("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city_name + "&APPID=" + api_key + "&units=metric&cnt=12").then(
    (response) => { return response.json() }
  ).then(
    (weatherForecastData) => {
      console.debug('PARSED FORECAST', weatherForecastData)
      dispatch({type: FETCH_WEATHER_FORECAST_API, weatherForecast: weatherForecastData})
    }
  ).catch(
    (errorFetching) => {
      console.log('failed to fetch: ', errorFetching)
    }
  )
}

// export const fetchWeatherList = (city_id) => dispatch => {
//   fetch("http://api.openweathermap.org/data/2.5/group?id=" + city_id + "&APPID=" + api_key + "&units=metric").then(
//       (response) => { return response.json() }
//   ).then(
//       (weatherListData) => {
//         console.debug('PARSED LIST', weatherListData)
//         dispatch({type: FETCH_WEATHER_LIST_API, weatherList: weatherListData})
//       }
//   ).catch(
//       (errorFetching) => {
//         console.log('failed to fetch: ', errorFetching)
//       }
//   )
// }

//http://api.openweathermap.org/data/2.5/forecast?q=gdansk&APPID=dc2f2e72b22d9a90fd58cf8ed86be518&units=metric&cnt=6

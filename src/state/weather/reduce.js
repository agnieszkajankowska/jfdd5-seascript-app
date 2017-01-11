import {FETCH_WEATHER_API, FETCH_WEATHER_LIST_API, FETCH_WEATHER_FORECAST_API} from './actionTypes'

const initialState = {
  weatherCast: null,
  weatherList: null,
  weatherForecast: null
}

export default (state = initialState, action = {}) => {
  switch(action.type){
    case FETCH_WEATHER_API:
      return {
        ...state,
        weatherCast: action.weatherCast
      }
    case FETCH_WEATHER_LIST_API:
      return{
        ...state,
        weatherList: action.weatherList
      }
    case FETCH_WEATHER_FORECAST_API:
      return{
        ...state,
        weatherForecast: action.weatherForecast
      }
    default:
      return state
  }
}





  // id:1,
  // name: 'Gdańsk',
  // nation: 'PL',
  // mainWeather: 'clouds',
  // temperature: 0,
  // windSpeed: 2.7,
  // windDirection: 270,
  // cloudiness: 20
  // humidity: 30

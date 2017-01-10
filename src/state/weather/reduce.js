import {FETCH_WEATHER_API} from './actionTypes'

const initialState = {
  weatherCast: null,
  weatherlist: [],
  weatherForecast: null
}

export default (state = initialState, action = {}) => {
  switch(action.type){
    case FETCH_WEATHER_API:
      return {
        ...state,
        weatherCast: action.weatherCast,
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

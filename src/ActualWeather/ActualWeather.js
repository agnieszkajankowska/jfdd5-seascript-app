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
  weatherForecast: state.weatherData.weatherForecast,
  weatherList: state.weatherData.weatherList
})

const mapDispatchToProps = state => ({})

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

const extractWeatherData = (allData) => ({
  placeName: allData.name,
  placeTempreature: (allData.main.temp),
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

  if(props.weatherCast === null){
    return(<p>Loading...</p>)
  }
  const {
    placeName,
    placeTempreature,
    placeMainWeather,
    placeWind,
    placeWindDirection,
    placeClouds,
    placeHumidity,
    placeCountryCode,
    icon
  } = extractWeatherData(props.weatherCast)

  return (
    <Col md={12}>
      <h2> Actual weather conditions </h2>
      <Col sm={12}>
        <h2>{placeName} {placeCountryCode}</h2>
      </Col>  
      <Col sm={12}>
        <icon className={icon}/>
        <h2>{placeMainWeather}</h2>
      </Col>

      <Col sm={12}>
        <h2>{placeTempreature}
          <icon className="wi wi-celsius"/>
        </h2>
      </Col>

      <Col sm={4}>
        <icon className="wi wi-strong-wind"/>
        <h2>{placeWind}m/s {placeWindDirection}</h2>
      </Col>

      <Col sm={4}>
        <icon className="wi wi-cloudy"/>
        <h2>{placeClouds}%</h2>
      </Col>

      <Col sm={4}>
        <icon className="wi wi-smoke"/>
        <h2>{placeHumidity}%</h2>
      </Col>
    </Col>

  )
}


const ActualWeatherMinified = (props) => {
  const { weatherId } = props
  if(props.weatherList === null){
    return(<p>Loading Weather...</p>)
  }
  const {
    placeTempreature,
    icon
  } = extractWeatherData(props.weatherList.list.find( item => item.id === weatherId ))
  return (
    <p>
      <icon className={icon}/> {placeTempreature}<icon className="wi wi-celsius"/>
    </p>

  )
}


//
// class ForecastWeatherDetailed extends React.Component {
//   render() {
//     let forecastTemp = ''
//     if (this.props.list !== undefined) {
//       console.log(this.props.list)
//       forecastTemp = this.props.list.map(forecast =>
//         <Col sm={2} key={this.props.list}>
//           {this.props.list[1].weather[0].main}
//         </Col>
//       )
//       console.log(this.props.list.weather[0].main)
//     }
//     let icon = ''
//     let iconLabel = ''
//     const prefix = 'wi wi-'
//     const code = (this.props.weather && this.props.weather[0].id)
//
//
//     if (code === undefined) {
//     } else {
//       iconLabel = (icons[code].icon)
//       if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
//         icon = prefix + 'day-' + iconLabel;
//       } else {
//         icon = prefix + iconLabel;
//       }
//     }
//     return (
//       <Col md={12}>
//         <h2> 5 days forecast </h2>
//         {forecastTemp}
//       </Col>
//     )
//   }
// }

export default {
  actualWeather: connect(mapStateToProps)(ActualWeather),
  weatherMinified: connect(mapStateToProps)(ActualWeatherMinified)
}





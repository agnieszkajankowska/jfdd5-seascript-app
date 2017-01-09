import React from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import { fetchWeather} from '../state/weather/actionCreators'
import {connect} from 'react-redux'
import {ActualWeather} from '../ActualWeather'
import './PlaceDetails.css'

const mapStateToProps = state => ({
  cityName: state.attractionAndPlaceData.place
})

const mapDispatchToProps = dispatch => ({
  fetchWeather: cityName => dispatch(fetchWeather(cityName))
})

class PlaceDetails extends React.Component {
  componentDidMount () {
    console.log('lelele')

      this.props.fetchWeather(this.props.params.placeName)

  }

  componentDidUpdate () {
    console.log('kkkkkkk')

      this.props.fetchWeather(this.props.params.placeName)

  }


  render() {
    return (
      <Grid className="place-Details">
        <Row>
          <ActualWeather.actualWeather/>
        </Row>
      </Grid>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetails)
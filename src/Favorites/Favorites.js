import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  chosenToFavoritesAttractions: state.chosenAttractionsToFavoritesData.chosenToFavoritesAttractions
})


const Favorites = props => {
  console.log(props.chosenToFavoritesAttractions)
  return (
    <div>
      <h1>Favorites</h1>
      <p>{props.chosenToFavoritesAttractions.map(
        attraction =>
          attraction.attraction.name)}
      </p>
    </div>
  )
}
export default connect(mapStateToProps)(Favorites)

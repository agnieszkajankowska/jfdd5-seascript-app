import React from 'react'
import Link from 'react-router'

const StepButton = props => (
  <Link to={props.for} >{props.children}</Link>
)

export default StepButton
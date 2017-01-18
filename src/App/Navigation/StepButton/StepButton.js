import React from 'react'
import {Link} from 'react-router'
import './StepButton.css'


class StepButton extends React.Component {
  constructor() {
    super()
  }

  render() {
    console.log('current step id ' + this.props.currentStepId);
    console.log('step id ' + this.props.stepId);
    const stepId = parseInt(this.props.stepId, 10);
    const currentId = parseInt(this.props.currentStepId, 10);
    console.log(currentId)

    const className = currentId === stepId ?
      'StepButtonActive' :
      (
        currentId > stepId ?
          'StepButtonPrevious' :
          'StepButtonNext'
      )

    const buttonView = currentId === stepId ?
      '' :
      (
        currentId > stepId ?
          '' :
          'disabled'
      )

    return (


      <Link to={this.props.for} className={className}>
        <button disabled={buttonView}>{this.props.children}</button>
      </Link>

    )
  }
}
export default StepButton
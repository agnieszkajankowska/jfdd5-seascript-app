import React from 'react'
import {Link} from 'react-router'
import './StepButton.css'


class StepButton extends React.Component {
  constructor() {
    super()
  }

  render() {
    const stepId = parseInt(this.props.stepId, 10);
    const currentId = parseInt(this.props.currentStepId, 10);

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
        <button disabled={buttonView} className="stepButton">
          {this.props.children}
        </button>
      </Link>

    )
  }
}
export default StepButton
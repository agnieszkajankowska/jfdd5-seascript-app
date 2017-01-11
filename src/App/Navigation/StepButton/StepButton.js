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
    var currentId = parseInt(this.props.currentStepId);
    console.log(currentId)

    currentId === 1 ? console.log('form wow') :
      (currentId  ===2 ? console.log('place list wow'):
          (currentId ===3 ? console.log('place compare wow'):
              (currentId ===4 ? console.log('favorites wow'):
                (console.log('inne słowo')
                )
              )
          )
      );
    
    return (


      <Link to={this.props.for} className='StepButtonActive'>
        <button>{this.props.children}</button>
      </Link>

    )
  }
}
export default StepButton
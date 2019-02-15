import React from 'react'
import {Link} from 'react-dom'

import Becs from './Becs'
import {NewBusinessPlan} from './BusinessPlan'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onRichard: false
    }

  }
  
  render(){
    return(
      <Fragment>
        <div className='app'>
          <h1>Please Fix Me - I is broked</h1>
        <div className='karl'></div>

        <div className='miju'>
        </div>

        <div className='becs'>
          <button>
            <Link to='/becs' component={Becs} />
          </button>
        </div>
        <NewBusinessPlan className='richard'></NewBusinessPlan>

      </Fragment>
    )
  }
}

export default App

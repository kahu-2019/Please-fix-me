import React, {Fragment} from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

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
          <Router>
            <div className='app'>
              <h1>Please Fix Me - I is broked</h1>
              <div className='karl'></div>

              <div className='miju'> </div>

              <div className='becs'>
                <Route path='/becs' component={Becs} />
              </div>
              <Link to='/becs'>Becs</Link>
              <NewBusinessPlan className='richard'></NewBusinessPlan>
            </div>
          </Router>
        </Fragment>
    )
  }
}

export default App

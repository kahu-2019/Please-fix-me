import React, {Fragment} from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Becs from './Becs'
import Miju from "./Miju"
import Richard from './Richard'

class App extends React.Component {
  render(){
    return(
        <Fragment>
          <Router>
            <div className='app'>
              <h1>Please Fix Me - I is broked</h1>
              <div className='karl'></div>

              <div className='miju'> 
                <Route path='/miju' component={Miju} />
              </div>
              <div className='becs'>
                <Route path='/becs' component={Becs} />
              </div>
              <div className='richard'>
                <Route path='/richard' component={Richard} />
              </div>
              <Link to='/miju'>Miju</Link>
              <Link to='/becs'>Becs</Link>
              <Link to='/richard'>Richard</Link>
            </div>
          </Router>
        </Fragment>
    )
  }
}

export default App;

import React from 'react'
import {Link} from 'react-dom'

import Becs from './Becs'

class App extends React.Component {
  
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

        <div className='richard'></div>
        </div>
      </Fragment>
    )
  }
}

export default App

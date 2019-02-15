import React from 'react'
import {NewBusinessPlan} from './BusinessPlan'

// This might need to be turned into a stateful (class-based) component

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onRichard: false
    }

  }

  render() {
    return(
      <div className='app'>
        <h1>Please Fix Me - I is broked</h1>
        <div className='karl'></div>
        <div className='miju'></div>
        <div className='becs'></div>
        <NewBusinessPlan className='richard'></NewBusinessPlan>
      </div>
    )
  }
}
 



export default App

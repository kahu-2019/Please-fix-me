import React from 'react'

import BusinessPlan from '../api/richard'

export default class Richard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      plan: undefined
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.getBusinessPlan()
  }

  handleClick(e) {
    e.preventDefault();
    this.getBusinessPlan()
  }

  getBusinessPlan() {
    BusinessPlan()
      .then((plan) => {
        this.setState({
          quote: JSON.parse(plan)
        })
      })
  }

  render() {
    return (
      <React.Fragment>
        <div className="richard-component">
          {this.state.quote && <div 
            className="grid-item-rick" 
            onClick={this.handleClick}
            style={{cursor: 'pointer'}}
            >
              <p>So basically, it's like a {this.state.quote.this} for {this.state.quote.that}</p>
            </div>
          }
          <button onClick={this.handleClick}>Click</button>
        </div>
      </React.Fragment>
    )
  }

}

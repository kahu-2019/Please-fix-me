import React from 'react'

import BusinessPlan from '../api/richard'

export class NewBusinessPlan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      plan: undefined
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    BusinessPlan()
      .then((plan) => {
        this.setState({
          quote: JSON.parse(plan)
        })
      }
      )
  }

  handleClick(e) {
    console.log(e)
    e.preventDefault();
    console.log('The link was clicked.');
  }

  render() {

    console.log(this.state)

    return (
      <React.Fragment>
        <div className="richard-component">
          {this.state.quote && <div className="grid-item-rick" onClick={this.handleClick}><p>So basically, it's like a {this.state.quote.this} for {this.state.quote.that}</p></div>}
        </div>
      </React.Fragment>
    )
  }

}

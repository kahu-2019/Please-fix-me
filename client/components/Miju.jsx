import React from "react";
import { connect } from "react-redux";
import request from "superagent";

class Miju extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      random: "",
      icon: ""
    };
  }

  componentDidMount() {
    this.loadFact()
  }

  loadFact() {
    request.get("https://api.chucknorris.io/jokes/random ").then(res => {
      this.setState({
        random: res.body.value,
        icon: res.body.icon_url
      });
    });
  }
  render() {
    return (
      <div onClick={this.loadFact.bind(this)}>
        <img src={this.state.icon} />
        {this.state.random}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage
  };
};

export default connect(mapStateToProps)(Miju);

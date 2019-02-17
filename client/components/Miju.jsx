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
    request.get("https://api.chucknorris.io/jokes/random ").then(res => {
      console.log(res);
      this.setState({
        random: res.body.value,
        icon: res.body.icon_url
      });
    });
  }
  render() {
    console.log(this.state.random);
    return (
      <div>
        <h1> Chuck Norris facts </h1>
        <img src={this.state.icon} />
        <p>{this.state.random}</p>
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

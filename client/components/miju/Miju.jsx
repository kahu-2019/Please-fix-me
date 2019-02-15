import React from "react";
import { connect } from "react-redux";
import request from "superagent";

class Miju extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      random: []
    };
  }

  componentDidMount() {
    request.get("https://api.chucknorris.io/jokes/random ").then(res => {
      console.log(res);
      this.setCunk({
        random: res.body
      });
    });
  }
  render() {
    return (
      <div>
        <h1> Chuck Norris facts </h1>
        <ul>
          {this.state.random.map(s => {
            return render(<li key={s.id}>{s.value}</li>);
          })}
        </ul>
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

import React from "react";

import request from "superagent";

class Miju extends React.Componet {
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
            return <li key={s.id}>{s.icon_url}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Miju;

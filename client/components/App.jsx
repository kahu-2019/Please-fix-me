import React from "react";
import { connect } from "react-redux";
import Miju from "./miju/Miju";

// This might need to be turned into a stateful (class-based) component
const App = () => (
  <div className="app">
    <h1>Please Fix Me - I is broked</h1>
    <div className="karl" />
    <div className="miju">
      {/* {this.state.random && this.state.random.value} */}
      <Miju />
      {/* <Link to="/miju" componet={Miju} /> */}
    </div>
    <div className="becs" />
    <div className="richard" />
  </div>
);

export default App;

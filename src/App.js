import React, { Component } from "react";
import "./App.css";
import Header from "./app/containers/Header";
import RouterURL from "./app/router/RouterURL";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RouterURL />
      </div>
    );
  }
}

export default App;

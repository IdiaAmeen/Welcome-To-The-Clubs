import React, { Component } from "react";
import "./Welcome.css";
export default class Welcome extends Component {
  state = {
    display: true,
  };
  handleClick = () => {
    this.setState(() => ({
      display: false,
    }));
  };
  render() {
    if (this.state.display === true) {
      return (
        <>
          <div className="out-modal">
            <div className="in-modal">
              <img
                src={require("./images/logopurple.png")}
                alt="Welcome To The Clubs"
              />
              <p> Virtual Clubrooms at your fingertips. Join the fun! </p>
              <button onClick={this.handleClick} id="got-it">
                Got it!
              </button>
            </div>
          </div>
        </>
      );
    } else {
      return null;
    }
  }
}

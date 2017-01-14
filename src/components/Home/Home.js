import React, { Component } from 'react'
import { Link } from "react-router"
import CabinInfo from "../CabinInfo/CabinInfo"


class Home extends Component {
  render() {
    return (
      <div>
        Hello
        <CabinInfo />
      </div>
    );
  }
}

export default Home

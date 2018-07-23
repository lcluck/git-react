import React, { Component } from 'react';

import "./index.css";

import Store from "../../redux";

class Myself extends Component {
  constructor(){
    super();
    this.state={
      
    }
  }
  render() {
    return (
    <div>Myself</div>
    )
  }
  componentDidMount(){
      Store.dispatch({
        type:"changeTitleForMaizuo", 
        payload:"猫眼电影" 
      })
  }
}

export default Myself;
import React, { Component } from 'react';

import "./index.css";

import Nowplaying from "./Nowplaying";

import Comingsoon from "./Comingsoon";

import Store from "../../redux";

class Movie extends Component {
  constructor(){
    super();
    this.state={
      playlist:[]
    }
  }
  render() {
    return (
    <div className="Movies">
      <div className="topbar">
    	    <Nowplaying></Nowplaying>
      		<Comingsoon></Comingsoon>
      </div>
    </div>  
    )
  }
  componentDidMount(){
      Store.dispatch({
        type:"changeTitleForMaizuo", 
        payload:"猫眼电影" 
      })
  }
}

export default Movie;
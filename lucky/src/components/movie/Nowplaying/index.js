import React, { Component } from 'react';

import "./index.css";

import axios from "axios";

class Nowplaying extends Component {
	constructor(){
    super();
    this.state={
      playlist:[]
    }
  }
  render() {
    return (
      <div id="nowplaying">
         <div className="switch-hot">
      	    <div className="hot-item">
      	    	正在上映
      	    </div>       	
         </div>
          <div className="pagg">
           
         </div> 
      </div>
    )
  }
  componentDidMount(){
  	 axios.get("/ajax/movieOnInfoList?token=").then(res=>{
  	 	console.log(res.data);
  	 	this.setState({
  	 		playlist:res.data.movieList
  	 	})
  	 })
  }
}

export default Nowplaying;

// http://m.maoyan.com/ajax/movieOnInfoList?token=
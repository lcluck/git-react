import React, { Component } from 'react';

import "./index.css";

import {connect} from "react-redux";

class Navbar extends Component {
   constructor(){
      super();

      this.state = {
        
      }
    }

  render() {
    return (
      <div>
      	 <nav>
      	 <div className="nav-left"></div>
      	 <h1>{this.props.mytitle}</h1>
      	 </nav>
      </div>
    );
  }
  
}

export default connect(
  (state)=>{
    return {
      mytitle:state
    }
  },

  null
  )(Navbar)

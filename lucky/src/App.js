import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Sidebar from "./components/Commont/Sidebar";

import Navbar from "./components/Commont/Navbar";

import {Provider} from "react-redux";



class App extends Component {
  constructor(){
      super();

      this.state = {
         isShow:true
      }
    } 

  render() {
    return (
      <div>
      <Navbar/>

      <section >
          {this.props.children}  	
      </section>

      <Sidebar myshow={this.state.isShow} myevent={()=>{
          this.setState({
            isShow:false
          })
      }}/>
      </div>
    )
  }
}

export default App;

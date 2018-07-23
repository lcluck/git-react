import React, { Component } from 'react';

import "./index.css";

import {NavLink} from "react-router-dom";


class Sidebar extends Component {
  render() {
    return (<div>
    {
      this.props.myshow?
      <div className="bottom-bar">
      <NavLink to="/movie" activeClassName="current" >
      	<div className="bottom-left" >
            <span className="nav-icons">
               <span className="iconfont icon-dianying"></span>
            </span>
            <span className="nav-text">电影</span>
      	</div>
      </NavLink>
      	
      <NavLink to="/cinema" activeClassName="current">
      	<div className="bottom-left" >
            <span className="nav-icons">
               <span className="iconfont icon-yingyuanxinxizhoubiansheshi"></span>
            </span>
            <span className="nav-text">影院</span>
      	</div>
      </NavLink>
    

      <NavLink to="/myself" activeClassName="current">

      	<div className="bottom-left" onClick={this.change.bind(this)}>
            <span className="nav-icons">
              <span className="iconfont icon-tubiaolunkuo-"></span> 
            </span>
            <span className="nav-text">我的</span>
      	</div>
      </NavLink>		
    
      </div>:null
    }
    </div>
    );
  }
  change(){
     console.log(this);
     this.props.myevent()
  }
}

export default Sidebar;
import React, { Component } from 'react';

import "./index.css";

import axios from "axios";

import Store from "../../redux";

// import {connect} from "react-redux";

class Cinema extends Component {
	constructor(props){
    super(props);
    this.state={
      cinemalist:[],
    }
  }
  render() {
    return (
      <div className="list-warp">
      	{
      		this.state.cinemalist.map((item)=>
                   <div className="warp-em" key={item.id} onClick={this.dian.bind(this,item.id)}>
                       
                        <div className="title-em">
                            <div className="title-line" >
                               <span className="title-line-one">{item.nm}</span>
                               <span className="picer">
                                    <span className="picer-one">{item.sellPrice}</span>
                                    <span className="picer-two">元起</span>  
                               </span>                       
                           </div>
                           <div className="location-block">
                        	   <div className="location-block-one">{item.addr}</div>
                               <div className="location-block-two">{item.distance}</div>


                           </div>
                        	
                        </div>
                   </div>
      			)
      	}
      </div>
    )
  }
  componentDidMount(){
  	 axios.get("/ajax/cinemaList?day=2018-07-17&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1531810361226&cityId=10").then(res=>{
  	 	console.log(res.data.cinemas);
  	 	this.setState({
  	 		cinemalist:res.data.cinemas
  	 	})
  	 })
      
    Store.dispatch({
        type:"changeTitleForMaizuo", 
      
        payload:"卖座电影" 
      })
  }
  dian(item){
    console.log(this.props);
    localStorage.setItem("id",item);
    this.props.history.push(`/show/${item}`);
  }
}

export default Cinema

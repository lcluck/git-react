import {createStore} from "redux";

	const reducer = (prevState="猫眼电影",data={})=>{
	
    let {type , payload} = data;

    switch(type){
    	case "changeTitleForMaizuo":
    		return payload
    
    	default:
    		return prevState
    }
}
	const store = createStore(reducer);
	export default store;
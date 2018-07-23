//引入App
import App from "../App" ;
//引入React
import React from "react" ;

import {BrowserRouter,Switch,Route} from "react-router-dom";

import Movie from "../components/movie";

import Cinema from "../components/cinema";

import Myself from "../components/myself";

import Show from "../components/show";

import {Provider} from "react-redux";

import Store  from "../redux";

const router =(
	<Provider store={Store}>
	<BrowserRouter>
<App><Switch>
            <Route path="/movie" component={Movie}/>
            <Route path="/cinema" component={Cinema}/>
            <Route path="/myself" component={Myself}/>
            <Route path="/show" component={Show}/> 
</Switch></App>
</BrowserRouter>
</Provider>
)

export default router ;

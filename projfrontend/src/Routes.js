import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/Home';
import Map1 from './components/Map1';




const Routes=()=>{
    
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Map" exact component={Map1}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;
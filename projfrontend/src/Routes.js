import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Map2 from './components/Map2';
import Register from './components/Register';
import VideoCall from './components/VideoCall';




const Routes=()=>{
    
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Map" exact component={Map2}/>
                <Route path="/Register" exact component={Register}/>
                <Route path="/Login" exact component={Login}/>
                <Route path="/Video" exact component={VideoCall}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from  '../pages/Main'
import About from  '../pages/About'
import Explore from  '../pages/Explore'
import Tips from  '../pages/Tips'
import Create from '../pages/Create'
import Login from '../pages/Login'

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/tips" component={Tips} />
        <Route exact path="/editor" component={Create} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route path="/signin" render={(props) => <Login {...props} signin="active" signup="null"/>} />
        <Route path="/signup" render={(props) => <Login {...props} signin="null" signup="active"/>} />
    </BrowserRouter>
);

export default Routes
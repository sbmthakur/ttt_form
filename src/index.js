import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Info from "./Info";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render((
           <BrowserRouter>
           <Switch>
             <Route exact path='/' component={App}/>
             <Route path='/data' component={Info}/>
             </Switch>
           </BrowserRouter>
       ), document.getElementById("root"));

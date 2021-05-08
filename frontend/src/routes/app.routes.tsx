import DashBoard from 'pages/DashBoard';
import Home from 'pages/Home';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact >
                    <Home/>
                </Route>

                <Route path="/dashboard" >
                    <DashBoard/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { Home, Detail } from './../pages';

function Router() {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/detail/:id'>
                <Detail />
            </Route>
        </Switch>
    );
}

export default Router
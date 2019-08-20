import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import routes from './routes'
import {routeItem} from '../models/route'

export default () => (
    <BrowserRouter>
        <Switch>
            {
                routes.map((route: routeItem, index: number) => (
                    <Route path={route.path} component={route.component} exact={route.exact} key={index}/>
                    // <Route {...route} key={index}></Route>
                ))
            }
        </Switch>
    </BrowserRouter>
)
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ImageView from './components/ImageView/ImageView';

import App from './App';

const Router = () => {
    return (
    <BrowserRouter>
    <Switch>
        <Route path="/" component={App} exact />
        <Route path="/image/:id" component={ImageView} />
        

    </Switch>
    </BrowserRouter>
    )
}

export default Router;
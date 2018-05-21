import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import NoView from './../src/views/no-view';

import AddView from './views/add-view';
import DetailView  from "./views/detail-view";
import HomeView from './views/home-view';


import 'antd/dist/antd.css';
import './index.css';


import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(

    <Router>
        <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/detail/:id" component={DetailView} />
            <Route path="/addcake" component={AddView} />
            <Route component={NoView} />
        </Switch>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import NoView from './../src/views/no-view'

import 'antd/dist/antd.css';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


class DetailView extends Component {


    render() {

        return (

            <div>a</div>
        )
    }
}

class AddCakeView extends Component {


    render() {

        return (

            <div>a</div>
        )
    }
}


ReactDOM.render(

    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/detail/:id" component={DetailView} />
            <Route path="/addcake" component={AddCakeView} />
            <Route component={NoView} />
        </Switch>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();

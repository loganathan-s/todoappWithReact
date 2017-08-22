import React, { Component } from 'react';
import {BACKEND, formatArrayOfHash} from '../helpers';
import Request from '../lib/ExternalRequest';

import { render } from 'react-dom';
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom'
import App from './App';
import NotFound from './NotFound';	
import { Provider } from 'react-redux';
import  store from '../lib/store';
import  ReduxConnection from './ReduxConnector';

class Root extends Component {
  componentWillMount(){
     const tasks = Request.get(`${BACKEND}/tasks`)
     .then(response => {
       store.dispatch({type: 'GET_TODO_DATA', payload: formatArrayOfHash(response) })
     })
     .catch(err => {
       return err.message
      });
  }

  render(){
     return (
      <Provider store={store} >
         <BrowserRouter>
          <div>
            <Switch>
             <Route exact path="/" component={ReduxConnection}/>
                <Route component={NotFound}/>
            </Switch>
           </div>
         </BrowserRouter>
       </Provider>
    )
  }
}

export default Root;
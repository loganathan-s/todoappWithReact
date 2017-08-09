import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom'
import App from './App';
import NotFound from './NotFound';	
//Stateless Function 
const Root = () => {
  return (
  	 <BrowserRouter>
  	  <div>
  	  	<Switch>
  	 	 	 <Route exact path="/" component={App}/>
     	  	  <Route component={NotFound}/>
     	  </Switch>
	  </div>
  	 </BrowserRouter>
  	)
}

export default Root;
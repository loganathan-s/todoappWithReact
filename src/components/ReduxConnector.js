import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import App from "./App";

function mapStateToProps(state){
 return {
   tasks: state.tasks,
   requests: state.requests
 }
}

function mapDispatchToProps(dispatch){
 return bindActionCreators(actionCreators, dispatch);
}

//Connect will inject the data to all the child compoents and self
const ReduxConnection = connect(mapStateToProps, mapDispatchToProps)(App);

export default ReduxConnection;
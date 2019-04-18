import React, { Component } from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';

import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {auth} from "./actions";
import podexplorer from "./reducers";

import Podexplorer from "./components/Podexplorer";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Library from "./components/Library";
import AddPodcast from "./components/AddPodcast";
import Logout from "./components/Logout";


let store = createStore(podexplorer, applyMiddleware(thunk));

class RootContainerComponent extends Component {

  // Load the user on page load
  componentDidMount() {
    this.props.loadUser();
  }

  // Directs user to Login if user is unauthenticated
  PrivateRoute = ({component: ChildComponent, ...rest}) => {
    return <Route {...rest} render={props => {
      if (this.props.auth.isLoading) {
        return <em>Loading...</em>;
      } else if (!this.props.auth.isAuthenticated) {
        return <Redirect to="/login" />;
      } else {
        return <ChildComponent {...props} />
      }
    }} />
  }

  // Router for frontend navigation
  render() {
    let {PrivateRoute} = this;
    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Podexplorer} />
          <PrivateRoute exact path="/logout" component={Logout} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/add" component={AddPodcast} />
          <Route exact path="/library" component={Library} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

// Provide the component properties with authentication from the state
const mapStateToProps = state => {
  return {
    auth: state.auth,
    user: state.auth.user,
  }
}

// Set user properties to current user
const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => {
      return dispatch(auth.loadUser());
    },
    logout: () => dispatch(auth.logout()),
  }
}

let RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainerComponent);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

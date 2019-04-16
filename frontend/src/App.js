import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Podcasts from "./components/Podcasts";
import NotFound from "./components/NotFound";
import { createStore } from "redux";
import podexplorer from "./reducers";

let store = createStore(podexplorer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={PonyNote} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

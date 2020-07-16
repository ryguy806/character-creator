import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './index.css';
import {App} from './App';
import {UserList} from './components/user/UserList'
import * as serviceWorker from './serviceWorker';
import {Character} from './components/character/Character';
import {Provider} from 'react-redux';
import {store} from './store'
import Starships from './components/Starship/Starships';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route 
          exact
          path="/"
          render={(props) => <App userType='admin' username='ryguy8806' {...props}/>}
        />
      </Switch>
      <Switch>
        <Route
          exact
          path="/userList"
          render={(props) => <UserList {...props}/>}
        />
      </Switch>
      <Switch>
        <Route
          exact
          path="/character"
          render={(props) => <Character {...props}/>}
        />
      </Switch>
      <Switch>
        <Route
          exact
          path="/starships"
          render={(props) => <Starships />}
        />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

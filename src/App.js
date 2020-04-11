import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Login from './components/login';
import Register from './components/register';
import Home from './components/home';

const client = new ApolloClient({
  uri: 'http://localhost:2000/graphql',
});

const checkAuth = (auth, component) => {
  if (auth) return component;

  return <Redirect to="/" />
};

function App() {
  const auth = false;
  return (
    <ApolloProvider client={client}>
  <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/home" render={() => checkAuth(auth, <Home />) } />
      </Switch>
  </Router>
  </ApolloProvider>
);
}

export default App;

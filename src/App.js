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
import { useCookies } from 'react-cookie';

import Login from './components/login';
import Register from './components/register';
import Home from './components/home';

const client = new ApolloClient({
  uri: 'http://localhost:2000/graphql',
});

const checkAuth = (token, component) => {
  console.log('authToken ', token);
  if (token) return component;

  return <Redirect to="/" />
};

function App() {
  const [authToken] = useCookies(['token']);
 
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
        <Route path="/home" render={() => checkAuth(authToken.token, <Home />) } />
      </Switch>
  </Router>
  </ApolloProvider>
);
}

export default App;

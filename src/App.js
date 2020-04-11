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

function App() {
  const auth = false;
  return (
    <ApolloProvider client={client}>
  <Router>
  
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/home" render={() => (
          auth === true ?
            <Home /> :
            <Redirect to="/" />
        )} />
      </Switch>
  </Router>
  </ApolloProvider>
);
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Login from './components/login';

const client = new ApolloClient({
  uri: 'http://localhost:2000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  </Router>
  </ApolloProvider>
);
}

export default App;

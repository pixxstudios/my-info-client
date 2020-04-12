import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'; 
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import {
    useHistory
  } from "react-router-dom";

const LOGIN_MUTATION = gql`
    mutation Login($email: String!, $password: String!){
        login(email: $email, password: $password) {
            email
        }
    }
`;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login] = useMutation(LOGIN_MUTATION);
    const history = useHistory();

    const handleOnSubmit = (e) => {
      e.preventDefault();
      login({ variables: {
          email,
          password 
      } }).then(({ data }) => {
        console.log(data);
        if (data.login.email && data.login.email !== '') {
          history.push('/home');
        } else {
          history.push('/');
        }
      }).catch((err) => {
        console.log('err ', err);
        history.push('/');
      });
  }

    return (
    <div className="container">
    <Form onSubmit={handleOnSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required/>
  </Form.Group>
  <Button variant="primary" type="submit">Login </Button>
  <Button onClick={() => history.push("/register")}>Register</Button>
</Form>
</div>
);
};

export default Login;
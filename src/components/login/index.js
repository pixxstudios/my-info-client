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
            id
            email
        }
    }
`;

const handleOnSubmit = (e, login, email, password) => {
    e.preventDefault();
    console.log('handleOnSubmit ', email, password);
    login({ variables: {
        email,
        password 
    } });
}

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login] = useMutation(LOGIN_MUTATION);
    const history = useHistory();

    return (
    <div className="container">
    <Form onSubmit={(e) => handleOnSubmit(e, login, email, password)}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Button onClick={() => history.push("/register")}>Register</Button>
</Form>
</div>
);
};

export default Login;
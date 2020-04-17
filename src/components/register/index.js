import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import {
  useHistory
} from "react-router-dom";

const REGISTER_MUTATION = gql`
    mutation Register($name: String!, $email: String!, $password: String!){
        register(name: $name, email: $email, password: $password) {
            email
        }
    }
`;

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [register] = useMutation(REGISTER_MUTATION);
    const history = useHistory();

    const handleOnSubmit = (e) => {
      e.preventDefault();
      register({ variables: {
          name,
          email,
          password 
      } }).then(({ data }) => {
        if (data.login.email && data.login.email !== '') {
          history.push('/');
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
    <Form.Label>Full name</Form.Label>
    <Form.Control type="text" placeholder="Full name" onChange={e => setName(e.target.value)} required />
    </Form.Group>

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
  <Button variant="primary" type="submit">
    Register
  </Button>
</Form>
</div>
);
};

export default Register;
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'; 

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    return (
    <div className="container">
    <Form onSubmit={() => {}}>

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
import React from 'react';

const Login = () => (
    <div className="container">
    <form>
  <div className="htmlForm-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="htmlhtmlForm-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="htmlForm-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="htmlForm-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
);

export default Login;
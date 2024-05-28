import React, { useState } from 'react';
import { getUser } from './admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignin = (event: React.FormEvent) => {
    event.preventDefault();
    const user = getUser();

    if (user.emailAddress === email && user.password === password) {
      alert("Successfully Log-In!");
      window.location.href = "../prodPanel";
    } else {
      setError("Account Didn't Match!");
    }
  };

  return (
    <div className="container">
      <h1 className="logo">Admin</h1>
      <div className="card">
        <h2 className="card-header">Admin Panel</h2>
        <form onSubmit={handleSignin}>
          <div className="form-group my-3 mx-5">
            <label htmlFor="username">Email Address</label>
            <input
              type="text"
              className="form-control"
              name="emailAdd"
              id="username"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group my-3 mx-5">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary my-3">
            Sign In
          </button>
          {error && (
            <div className="alert alert-danger d-flex align-items-center mt-3 p-2" role="alert">
              <div>{error}</div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
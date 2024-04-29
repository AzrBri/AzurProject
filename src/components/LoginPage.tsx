
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import NavbarPanel from './NavbarPanel';
import { AccPanel, User } from '../Admin/AccPanel';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // Array of registered users (mock data)
  const registeredUsers: User[] = [
    {
    id: 1, // Changed User_id to id
  type: 'User',// Changed Type to type
  fName: 'Brian', // Changed FName to fName
  lName: 'Mondia', // Changed LName to lName
  gender: 'Male', // Changed Gender to gender
  birthdate: '', // Changed Birthdate to birthdate
  age: 20, // Changed Age to age
  phoneNumber: '', // Changed Phone_number to phoneNumber
  emailAddress: 'brnmondia@gmail.com',
  password: 'BrianMondia_27' }
    // Add more users as needed
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validation logic here
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
    } else {
      // Check if the user is registered
      const foundUser = registeredUsers.find(user => user.emailAddress === email && user.password === password);
      if (foundUser) {
        // Successful login
        alert('Successfully Logged In!');
      } else {
        // Failed login
        setErrorMessage('Email or password is incorrect.');
      }
    }
  };

  return (
    <>
  <NavbarPanel />
    <div className="container mt-5 bg-light p-5 rounded-5">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email or Username</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="logemail"
                placeholder="Enter your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="logpassword"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" name="btnsubmit" className="btn btn-primary">Login</button>
            </div>
          </form>
          {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
          <div className="text-center mt-3">
            <a href="#">Forgot password?</a>
          </div>
          <div className="text-center mt-3">
            <p>Don't have an account? <Link to="/reg">Sign Up</Link></p>
          </div>
          <div className="text-center mt-3">
            <p>or login with</p>
            <button className="btn btn-outline-primary"><i className="bi bi-facebook"></i> Facebook</button>
            <button className="btn btn-outline-danger"><i className="bi bi-google"></i> Google</button>
            <button className="btn btn-outline-info"><i className="bi bi-twitter"></i> Twitter</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginPage;
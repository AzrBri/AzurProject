import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link } from 'react-router-dom';
import NavbarPanel from './NavbarPanel';
import { useAuth } from './AuthContext';


interface User {id: number;
  firstName: string;
  lastName: string;
  phoneN: string;
  gender: string;
  age: number;
  birthdate: string;
  email: string;
  password: string;
  
}

interface LoginPageProps {
  registeredUsers: User[];
}

const LoginPage: React.FC<LoginPageProps> = ({ registeredUsers }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { setLoggedIn } = useAuth();
  setLoggedIn(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
    } else {
      const foundUser = registeredUsers.find(
        (user) => user.email === email && user.password === password
      );
      if (foundUser) {
        alert('Successfully Logged In!');
        setLoggedIn(true);
        navigate('/home?logged_in=true');
      } else {
        setErrorMessage('Email or password is incorrect.');
      }
    }
  };

  return (
    <>
      <NavbarPanel />
      <div className="container mt-5 bg-light text-dark p-5 rounded-5">
        <div className="row">
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
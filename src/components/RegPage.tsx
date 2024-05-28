import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavbarPanel from './NavbarPanel';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  phoneN: string;
  gender: string;
  age: number;
  birthdate: string;
  email: string;
  password: string;
}

interface RegPageProps {
  registeredUsers: User[];
  setRegisteredUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const RegPage: React.FC<RegPageProps> = ({ registeredUsers, setRegisteredUsers }) => {
  const [user, setUser] = useState<User>({
    id: registeredUsers.length + 1,
    firstName: '',
    lastName: '',
    phoneN: '',
    gender: '',
    age: 0,
    birthdate: '',
    email: '',
    password: ''
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.password !== confirmPassword) {
      alert("Password Didn't Match, Try Again!");
    } else {
      setRegisteredUsers([...registeredUsers, user]);
      alert('Successfully Signed Up!');
      if (window.confirm('Do you want to log in now?')) {
        navigate('/login');
      }
    }
  };

  return (
    <>
      <NavbarPanel />
      <div className="container mt-5 bg-light text-dark p-5 rounded-5">
        <h2>Register</h2>
        <form id="form_reg" name="form_reg" onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control" minLength={2} maxLength={50} pattern="[A-Za-z]+" id="firstName" name="firstName" placeholder="Enter your first name" onChange={handleChange} required />
            </div>
            <div className="col">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" minLength={2} maxLength={50} pattern="[A-Za-z]+" id="lastName" name="lastName" placeholder="Enter your last name" onChange={handleChange} required />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="phoneN">Phone Number</label>
              <input className="form-control" type="tel" name="phoneN" id="phoneN" placeholder="09#-###-####" pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}" onChange={handleChange} required />
            </div>
            <div className="col"></div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="gender" className="form-label">Gender</label>
              <select className="form-select" id="gender" name="gender" onChange={handleChange} required>
                <option value="">Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="age" className="form-label">Age</label>
              <input type="number" className="form-control" id="age" name="age" placeholder="Enter your age" onChange={handleChange} required />
            </div>
            <div className="col">
              <label htmlFor="birthdate" className="form-label">Birthdate</label>
              <input type="date" className="form-control" id="birthdate" name="birthdate" onChange={handleChange} required />
            </div>
          </div>
          <div className="col mt-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email address" onChange={handleChange} required />
          </div>
          <div className="col mt-3">
            <label htmlFor="password" className="form-label" id="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="Choose a password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_!@#$%^&*])[A-Za-z0-9\d_!@#$%^&*]{8,}$" onChange={handleChange} required />
        </div>
        <div className="col mt-3">
            <label htmlFor="confirmPassword" className="form-label" id="password">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Retype your password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_!@#$%^&*])[A-Za-z0-9\d_!@#$%^&*]{8,}$" onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        
        <div id="passwordRequirements" className="mt-3 password-requirements"></div>
        <div id="requirements" className="mt-3">Password requirements:<br /><br />
          • At least 8 characters<br />
          • A lowercase letter<br />
          • An uppercase letter<br />
          • A number<br />
          • A symbol<br />
        </div>
        <button type="submit" id="btnSubmit" name="btnSubmit" className="btn btn-primary mt-3">Register</button>
      </form>
      <p className="mt-3">Already have an account? <Link to="/login">Log in here</Link></p>
    </div>
  
    </>
  );
};

export default RegPage;
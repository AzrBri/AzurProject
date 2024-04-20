import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';

interface User {
  id: number; // Changed User_id to id
  type: string; // Changed Type to type
  fName: string; // Changed FName to fName
  lName: string; // Changed LName to lName
  gender: string; // Changed Gender to gender
  birthdate: string; // Changed Birthdate to birthdate
  age: number; // Changed Age to age
  phoneNumber: string; // Changed Phone_number to phoneNumber
  emailAddress: string;
  password: string;
}

const AccountPanel: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState<Partial<User>>({});

  // Function to handle input change for adding new user
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  // Function to handle adding a new user
  const handleAddUser = () => {
    const user: User = {
      ...newUser as User,
      id: users.length + 1, // Generate a unique ID for the user
    };
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    // Clear input fields after adding user
    setNewUser({});
  };

 return (
  <>
   <Sidebar />
    <div className="card text-bg-dark container mt-5">
      <div className="card-header fw-bold fs-4">Accounts Panel</div>
      <div className="card-body">
        <h5 className="card-title"></h5>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addModal"
          >
            Add
          </button>
        </div>
        <div className="table-responsive">
          <table className="table table-dark table-striped table-hover mt-4">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Type</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Gender</th>
                <th scope="col">BirthDate</th>
                <th scope="col">Age</th>
                <th scope="col">PhoneNumber</th>
                <th scope="col">EmailAddress</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.type}</td>
                  <td>{user.fName}</td>
                  <td>{user.lName}</td>
                  <td>{user.gender}</td>
                  <td>{user.birthdate}</td>
                  <td>{user.age}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.emailAddress}</td>
                  <td>
                    <a href={`editAccount/${user.id}`}>
                      Edit
                    </a>{' '}
                    ||{' '}
                    <a
                      href={`delAccount/${user.id}`}
                      onClick={() =>
                        window.confirm('Are you sure you want to delete this record?')
                      }
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div className="modal fade" id="addModal" tabIndex={-1} aria-labelledby="addModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addModalLabel">Add Account</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" name="fName" onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" name="lName" onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="type" className="form-label">Type</label>
                <select className="form-select" id="type" name="type" onChange={handleInputChange}>
                  <option value="">Select</option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="phoneN" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phoneN" name="phoneNumber" onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">Gender</label>
                <select className="form-select" id="gender" name="gender" onChange={handleInputChange}>
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input type="number" className="form-control" id="age" name="age" onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="birthdate" className="form-label">Birthdate</label>
                <input type="date" className="form-control" id="birthdate" name="birthdate" onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="emailAddress" onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" onChange={handleInputChange} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={handleAddUser}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </>
);
}

export default AccountPanel;

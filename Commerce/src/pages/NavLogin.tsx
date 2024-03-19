import React, { FormEvent, useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function NavLogin() {
    const navigate = useNavigate();
  // State variables to hold email and password values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if email and password match the predefined values
    if (email === 'admin@gmail.com' && password === 'admin') {
     
      console.log('Login successful')
      setEmail('');
      setPassword('');
      setErrorMessage('');
      navigate('/privatelogin')
      
      
    } else {
      // Display error message if email or password is incorrect
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label>Email address</label>
                <input
                 
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="my-3">
                <label>Password</label>
                <input
                  
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {errorMessage && <p className="text-danger">{errorMessage}</p>}

              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NavLogin;

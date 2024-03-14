import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { auth, provider } from '../FireBase/Firebase';
import { signInWithPopup } from 'firebase/auth';
// import Product from "./Product";
import { useNavigate } from "react-router-dom";



const Login: React.FC = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setValue(user?.email || ''); 
        localStorage.setItem('Email', user?.email || '');
        navigate('/product');
      })
      .catch((error) => {
        // Handle errors here
        console.error(error.message);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="my-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </div>
              <div className="my-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>
                  New Here?{" "}
                  <Link to="/register" className="text-decoration-underline text-info">
                    Register
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit" disabled>
                  Login
                </button>
              </div>
              
               
                <button
                  className="my-2 mx-auto btn btn-danger"
                  type="button"
                  onClick={handleClick}
                >
                  SignIn with Google
                </button>
              
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;

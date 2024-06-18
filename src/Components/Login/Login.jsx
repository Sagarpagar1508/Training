import React from 'react'
import './login.css';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'sagarpagar' && password === 'adminsagar') {
      setSuccess(true);
      setError('');
    } else {
      setError('Invalid username or password');
      setSuccess(false);
    }
  };



  return (
    <section className="h-100 gradient-form m-0 p-0" >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">

                    <div className="text-center">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: '185px' }} alt="logo" />
                      <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                    </div>

                    <form onSubmit={handleLogin}>
                      <p>Please login to your account</p>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="email" id="form2Example11" className="form-control"
                          placeholder="Phone number or email address" onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className="form-label">Username</label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="password" id="form2Example22" className="form-control" onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label">Password</label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        {error && { error }}
                        {success && <Navigate to="/user" />}

                        <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
                          in</button>
                      </div>
                      <div style={{ marginLeft: '70px' }}><a className="text-muted" href="#!">Forgot password?</a></div>
                    </form>

                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

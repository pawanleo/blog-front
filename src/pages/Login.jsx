import React, { useState, useEffect } from 'react';
import axios from '../interceptors/customAxios';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'

const Login = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/dashboard');
    }

  }, []);

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const [errMsg, setErrMsg] = useState('');

  const login = () => {

    // const URL = 'http://localhost:8080/api/authentication/login';
    axios
      .post('/authentication/login', loginData)
      .then((res) => {

        if (res.data.data) {
          setErrMsg(res.data.message + ' ' + res.data.data);
        } else {

          setErrMsg(res.data.message + ' ' + 'redirection to Dashboard...');
          setTimeout(() => {
            navigate('/dashboard');
          }, 2000);

          localStorage.setItem('token', res.data.token);
        }
      })
      .catch((err) => console.log(err));
  };



  return (
    <div className='container-fluid login'>

      <div class="col-md-6 col-10 bg-light divInputs">
        <h3>Login Here</h3>
        <hr />
        <div class="mb-3">
          <label class="form-label">Username</label>
          <input
            onChange={handleChange}
            name="username"
            type="text"
            class="form-control"
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Password</label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            class="form-control"
          />
        </div>
        <div class="form-text text-danger">{errMsg}</div>
        <button onClick={login} type="click" class="btn btn-primary">
          Login
        </button>
      </div>
    </div>
  )
}

export default Login

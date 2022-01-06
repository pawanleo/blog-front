import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../css/Login.css"

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
      if (localStorage.getItem('token')) {

      }
  
    },[]);
  
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
  
     
      axios
        .post('http://localhost:9001/api/authentication/login', loginData)
        .then((res) => {
  
          if (res.data.data) {
            setErrMsg(res.data.message + ' ' + res.data.data);
          } else {
  
            setErrMsg(res.data.message +' '+'redirecting');
            setTimeout(() => {
              navigate('/');
            }, 1500);
  
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
        <br/>
        <br/>
        <span>  If Not Registered   </span>
      
        <br/>
        <Button variant="dark" onClick={()=>navigate('/signup')}>Register</Button>
      </div>
    </div>
    )
}

export default Login

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../css/Signup.css"
function SignUp() {


    
    const navigate = useNavigate();

    useEffect(() => {
        // checking token present or not
        if (!localStorage.getItem('token')) {
        
        }
    }, []);

    const [input, setInput] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    // storing backend err message
    const [errMsg, setErrMsg] = useState('');

    const signUp = () => {
     
        axios
            .post('http://localhost:9001/api/authentication/signup', input)
            .then((res) => {
               
                setErrMsg(res.data.message);
                navigate("/")
            })
            .catch((err) => console.log(err));
    };
    return (
        <div>
                 <div className='container-fluid signup'>

<div class="col-md-6 col-10 bg-light divInputs">
    <h3>Signup Here</h3>
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
        <label class="form-label">Full Name</label>
        <input
            onChange={handleChange}
            name="name"
            type="text"
            class="form-control"
        />
    </div>

    <div class="mb-3">
        <label class="form-label">Email address</label>
        <input
            onChange={handleChange}
            name="email"
            type="email"
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
    <button onClick={signUp} type="submit" class="btn btn-primary">
        Signup
    </button>
</div>
</div>
        </div>
    )
}

export default SignUp

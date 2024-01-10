import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});


  function handleLogin(e) {
    e.preventDefault();
        
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((response) => {

      if (response.ok) {
        response.json()
        .then((userData) => {
            dispatch(loginSuccess(userData));
            navigate('/home');
        })

      } else {
        response.json().then((error) => setErrors(error));
      }
    })
  };

  const inputStyle = {
    width: '50%',  // Adjust the width as needed
    padding: '10px', // Add padding for better appearance
    borderRadius: '5px', // Add border radius for rounded corners
    // Add any other styles you need
  };


  return (
    <div>
      <h3>Login</h3>
      <Form onSubmit={handleLogin} >

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>{' '}
          <input 
            placeholder="Enter Username" 
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>{' '}
            <input 
              placeholder="Password" 
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
        </Form.Group>

        <Form.Group>
          {/* {Array.isArray(errors) && errors.map((error) => (<div key={error}>{error}</div>))} */}
          {Object.values(errors).map((error, index) => ( <div key={index}>{error}</div> ))}
        </Form.Group>

        <Button variant="primary" type="submit"> Submit </Button>
      </Form>
    </div>
  );
};

export default LoginForm;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, loginSuccess } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
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
        // const errorLis = user.errors.map(e => <li key={e}>{e}</li>)
        // setErrorList(errorLis)
      }
    })
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
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>{' '}
            <input 
              placeholder="Password" 
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, logout, selectUser, loginSuccess } from '../features/authSlice';
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



  // useEffect(() => {
  //   // auto-login
  //   console.log("user in effect", user)
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json()
  //       .then((user) => {
  //         dispatch(setUser(user))
  //         navigate('/profile')
  //       });
  //     }
  //   });
  // }, []);

  console.log("user", user)

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
            console.log("hello user", userData)
            // dispatch(setUser(user));
            // Dispatching login success
            dispatch(loginSuccess(userData));
            navigate('/profile');
        })

      } else {
        response.json().then((error) => setErrors(error));
        // const errorLis = user.errors.map(e => <li key={e}>{e}</li>)
        // setErrorList(errorLis)
      }
    })
  };

  // const handleLogout = () => {
  //   fetch("/logout", { method: "DELETE" })
  //   .then(() => {
  //       console.log("check that logged out")
  //       dispatch(logout())
  //   })
  // };

  return (
    // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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

import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { signupSuccess } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorList, setErrorList] = useState([])


    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password
          }),
        })
        .then((r) => r.json())
        .then((newUser) => {
            if(!newUser.errors){
                // dispatch(setUser(user))
                // Dispatching signup success
                dispatch(signupSuccess(newUser));
                navigate('/profile')
            } else {
                const errorLis = newUser.errors.map(e => <li key={e}>{e}</li>)
                setErrorList(errorLis)
            }
        })
    }

  return (
    <div>
        <h3>Create New Account</h3>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Username</Form.Label>{' '}
                <Form.Control 
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}                    
                    placeholder="Enter Username" 
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>{' '}
                <Form.Control 
                    placeholder="Password" 
                    type="text"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            {errorList}
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    </div>
  )
}
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
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [errorList, setErrorList] = useState([])




    function handleSubmit(e) {
        e.preventDefault();

            // Check if password and password confirmation match
        if (password !== confirmPassword) {
        // Use return to prevent further execution and re-renders
        setErrorList(["Passwords do not match"]);
        return;
        }

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
                navigate('/home')
            } else {
                const errorLis = newUser.errors.map(e => <li key={e}>{e}</li>)
                setErrorList(errorLis)
            }
        })
    }

  return (
    <div >
        <h3 >Create New Account</h3>
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
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Confirm Password</Form.Label>{' '}
                <Form.Control
                    placeholder="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </Form.Group>
            <ul>
            {errorList}
            </ul>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    </div>
  )
}
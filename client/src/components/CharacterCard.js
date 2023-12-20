import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUser, selectUser } from '../features/authSlice';
import Button from 'react-bootstrap/Button';


export default function CharacterCard( { info } ) {
    const { alignment, character_class, id, image, name, race } = info
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     // auto-login
    //     console.log("user in effect", user)
    //     fetch("/me").then((r) => {
    //       if (r.ok) {
    //         r.json()
    //         .then((user) => {
    //           dispatch(setUser(user))
    //         });
    //       }
    //     });
    //   }, []);

 

  return (
    <div className="card">
        
            <img src={image} alt="Avatar" style={{ width: '100%' }}/>
            <div className="container">
                <h4><b>Name: {name}</b></h4>
                <p><b> Race: {race}</b></p>
                <p><b> Class: {character_class}</b></p>
                <p><b> Alignment: {alignment}</b></p>
                <Button variant="primary">Edit {name}</Button>
            </div>
  
    </div>
  )
}

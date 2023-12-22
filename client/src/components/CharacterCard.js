import React from 'react'
import Button from 'react-bootstrap/Button';


export default function CharacterCard( { info } ) {
    const { alignment, character_class, image, name, race } = info



  return (
    <div className="card">
        
            <img src={image} alt="Avatar" style={{ width: '100%' }}/>
            <div className="container">
                <h4><b>Name: {name}</b></h4>
                <p><b> Race: {race}</b></p>
                <p><b> Class: {character_class}</b></p>
                <p><b> Alignment: {alignment}</b></p>
                <Button variant="primary">Edit {name}</Button> &nbsp;
                <Button variant="primary">Delete {name}</Button>
            </div>
  
    </div>
  )
}

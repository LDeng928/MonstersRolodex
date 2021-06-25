import React from 'react';
import { Card } from '../card/card.component';
import './card-list.style.css';

// This is a functional component. 
// Assign a function to const CardList
export const CardList = props => {
    console.log(props);
    return  <div className="card-list">
        {         
            props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
            ))}
        </div>;
     
}
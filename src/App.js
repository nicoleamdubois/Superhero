import { useEffect, useState } from 'react';
import './App.css';

const SuperheroData = (props) => {
const superhero = props.superhero
  return (
    <div>
        <h2>superhero.name</h2>
        <p>Alter Ego</p>
        <p>superhero.alterEgo</p>
        <p>Superpowers:</p>
        <ul>
          {superhero.superpowers.map((superpower)=>{
            return <li>{superpower}</li>;
          })}
          <li>Superhuman strength</li>
          <li>Invulnerabiity</li>
        </ul>
        <p>Durability:</p>
        <p>superhero.durability</p>
        </div>

  )
}

function App() {

 let ironMan =  {
  "name": "Ironman",
  "su[erpower": ["Superhuman strength", "Invulnerability"],
  "alterego": "Tony Stark",
  "durability": "Indestructible"
}

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Superheroes</h1>
       </header>
       <SuperheroData superhero = {ironMan}/>
       )
             
</div>
  );
}

export default SuperheroData;
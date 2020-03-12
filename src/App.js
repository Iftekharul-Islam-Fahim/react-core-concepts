import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  /**
   Create multiple components from an array of objects
   */

   const detectives = ["Misir Ali", "Professor Shonku", "Sherlock Holmes", "Prodosh Chandra Mitra", "Byomkesh Bakshi", "Kakababu"];
   const friends = [
     {name: "Maruf Hassan", id: "53"},
     {name: "Shofi Uddin", id: "22"},
     {name: "Shahadat", id: "21"},
     {name: "Shahid", id: "12"}
   ];

   //const friendNames = friends.map(friend => friend.name);
   //console.log(friendNames);

   //const detectiveNames = detectives.map(detective => detective)
   //console.log(detectiveNames);


    /**
   Create multiple components from an array of objects
   */

  var agent = {name: "James Bond", id: 7};
  var myStyle = {
    color: 'cyan',
    backgroundColor: 'white'
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
  <h1 className="" style={myStyle}>My Heading : {agent.name + " " + agent.id}</h1>

  <Counter></Counter>
  <Users></Users>
        <p style={{color: 'steelBlue', backgroundColor: 'cyan'}}>My First React Paragraph</p>
        
        {/* <ul>
          <li>{detectives[0]}</li>
          <li>{detectives[1]}</li>
          <li>{detectives[2]}</li>
          <li>{detectives[3]}</li>
        </ul> */}

        {/*make it dynamic*/}

        <ul>
          {
            detectives.map(detective => <li>{detective}</li>)
          }
        </ul>
        <ol>
          {
            friends.map(friend => <li>{friend.name}</li>)
          }
        </ol>

          {
            friends.map(friend => <Motorbike model={friend.name} brand={friend.id}></Motorbike>)
          }
        
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  //dynamic data loading using useEffect()
  useEffect(() => {
    //console.log("calling effect");
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUsers(data))
  }, []);
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      {
        console.log(users)
      }
      <ul>
        {
          users.map(user => <li>Name: {user.name}, Email: {user.email}, Phone: {user.phone}</li>)
        }
      </ul>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return(
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

function Motorbike(props){
  const motorbikeStyle = {
    backgroundColor: 'cyan',
    border: '5px solid orange',
    margin: '10px',
    color: 'orange'
  };
  return(
    <div style={motorbikeStyle}>
      <h1>Model: {props.model}</h1>
      <h3>Brand: {props.brand}</h3>
      <h4>Motorbike</h4>
    </div>
  );
}

export default App;

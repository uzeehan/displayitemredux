import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <h1>List of Users</h1>
      <UserList />
      <hr />
      
    </div>
  );
}

export default App;

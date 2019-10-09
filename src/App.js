import React from 'react';
import './App.css';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <div className="App">
      <h1>List of Users</h1>
      <UserList />
      <hr />
      <UserDetail />
    </div>
  );
}

export default App;

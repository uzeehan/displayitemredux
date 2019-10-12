import React from 'react';
import './App.css';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import 'bootstrap/dist/css/bootstrap.min.css';


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

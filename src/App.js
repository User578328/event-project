import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import './styles.css';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {!user ? (
        <>
          <Login setUser={setUser} />
          <Register setUser={setUser} />
        </>
      ) : (
        <Dashboard user={user} />
      )}
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './LoginForm.css';

const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setUser(user);
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="login-btn" onClick={handleLogin}>Login</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Login;

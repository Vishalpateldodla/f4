import React, { useState } from 'react';

function Authentication() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'ok') {
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.id);
          window.location.href = '/profile';
        } else {
          alert(data.error);
        }
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Authentication;

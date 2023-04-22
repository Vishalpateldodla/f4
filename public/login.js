import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Send a POST request with the username and password
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          // Save the token and ID to localStorage
          localStorage.setItem('token', data.token);
          localStorage.setItem('id', data.id);
          // Redirect to the profile page
          window.location.href = '/profile';
        } else {
          // Display the error message returned by the API
          alert(data.message);
        }
      });
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        /><br/><br/>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        /><br/><br/>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;

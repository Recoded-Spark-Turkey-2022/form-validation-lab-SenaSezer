
import './App.css';
import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = { 
      username,
      email,
      password,
      phone,
     
    }
    console.log(formData);
  }
  return (
    <div className="App">
      <h3>Please fill out the form!</h3>
     <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
 <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="phone"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input type="submit" value="Confirm password" />
    </form>
    </div>
  );
}

export default App;

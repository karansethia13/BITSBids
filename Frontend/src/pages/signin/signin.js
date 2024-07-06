import React, { useState } from 'react';
import "./signin.css";

const SigninPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement login logic here, such as making an API call to authenticate the user
    alert('Login submitted!');
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    alert('Google login initiated!');
  };

  const handleNewAccount = () => {
    // Redirect to account creation page
    window.location.href = '/signup';
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-header">Welcome Back</h2>
        <p className="login-subheader">Please login to your account to start shopping.</p>

        <form onSubmit={handleSubmit}>
          <label className="login-label" htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label className="login-label" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <div className="login-checkbox">
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label className="login-checkbox-label" htmlFor="rememberMe">RememberMe</label>
          </div>

          <a className="login-forgot-password" href="/">Forgot Password?</a>

          <button className="login-button" type="submit">Login</button>

          <button className="login-google-button" onClick={handleGoogleLogin}>
            <i className="fab fa-google"></i>
            Login with Google
          </button>
        </form>

        <div className="new-account-section">
          <p className="new-account-text">New Customer?</p>
          <button className="new-account-button" onClick={handleNewAccount}>Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
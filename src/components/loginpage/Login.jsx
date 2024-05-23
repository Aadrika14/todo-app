// Login.jsx
import React, { useState } from 'react';
import styles from './Login.module.css'; // Import your CSS file for styling
import { FaEnvelope, FaLock } from 'react-icons/fa';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, such as sending the credentials to a server
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.loginContainer}>
        <h4 className={styles.welcomeBack}>Welcome Back</h4>
        <h2 className={styles.loginHeading}>Log in to your account</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            
            <div className={styles.inputWrapper}>
              <FaEnvelope className={styles.icon} />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                placeholder="Username or Email"
                required
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            
            <div className={styles.inputWrapper}>
              <FaLock className={styles.icon} />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div className={styles.forgotPassword}>
            <a href="/forgot-password" className={styles.links}>Forgot your password?</a>
          </div>
          <button type="submit" className={styles.submitButton}>LOG IN</button>
          <div className={styles.createAccount}>
            <span>Don't have an account? </span>
            <a href="/create-account" className={styles.link}>Create account</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from 'react';
import styles from './register.module.css'; // Import your CSS file for styling
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your register logic here, such as sending the credentials to a server
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.registerContainer}>
        <h4 className={styles.welcome}>Welcome</h4>
        <h2 className={styles.registerHeading}>Create your account</h2>
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
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.inputWrapper}>
              <FaUser className={styles.icon} />
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.input}
                placeholder="Username"
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
          <button type="submit" className={styles.submitButton}>REGISTER</button>
          <div className={styles.loginAccount}>
            <span>Already have an account? </span>
            <a href="/login" className={styles.link}>Log in</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

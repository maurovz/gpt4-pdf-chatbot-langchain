// pages/auth/register.tsx
import React, { useState } from 'react';
import styles from './styles/register.module.css';
import { authInstance } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        await createUserWithEmailAndPassword(authInstance, email, password); 
        // Redirect the user to the login page or a protected route after successful registration
      } catch (error: any) {
        alert(error.message);
      }
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
  
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            className={styles.input}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
  
          <label htmlFor="confirmPassword" className={styles.label}>
            Confirm Password:
          </label>
          <input
            className={styles.input}
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
  
          <button className={styles.button} type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
  
};

export default Register;

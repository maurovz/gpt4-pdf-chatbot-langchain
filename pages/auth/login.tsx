// pages/auth/login.tsx
import React, { useState } from 'react';
import styles from './styles/login.module.css';
import { authInstance } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(authInstance, email, password);
      // Redirect the user to the homepage or a protected route after successful login
      router.push('/');
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="email">Email:</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            className={styles.input}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className={styles.button} type="submit">
            Login
            </button>
          <p className={styles.linkText}>
            Don't have an account?{' '}
            <Link legacyBehavior href="register">
              <a className={styles.link}>Sign up</a>
            </Link>
          </p>
          
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/home'); // Redirect to home page after successful login
        } catch (error) {
            console.error('Login error:', error);
            // Handle login error here (e.g., display an error message)
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
                <a href="/signup">Don't have an account? Sign up</a>
            </form>
        </div>
    );
}

export default Login;

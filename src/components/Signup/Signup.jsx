import React, { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/login'); // Redirect to login page after successful signup
        } catch (error) {
            console.error('Sign up error:', error);
            // Handle signup error here (e.g., display an error message)
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form className="signup-form">
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
                <button type="button" onClick={handleSignUp}>
                    Sign Up
                </button>
                <a href="/login">Already have an account? Login</a>
            </form>
        </div>
    );
}

export default SignUp;

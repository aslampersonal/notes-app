import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import NoteTakingApp from './NoteTakingApp';
import Login from './components/Login/Login';
import SignUp from './components/Signup/Signup';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/home" element={<NoteTakingApp />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

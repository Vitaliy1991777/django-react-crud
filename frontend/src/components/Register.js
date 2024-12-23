import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register/', {
                username,
                email,
                password,
            });
            setMessage(response.data.message);
            setError('');
            setUsername('');
            setEmail('');
            setPassword('');
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data.error || 'Произошла ошибка');
            } else {
                setError('Произошла ошибка. Попробуйте позже.');
            }
        }
    };

    return (
        <div className="container">
            <h2 className="text-center">Регистрация</h2>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="username">Имя пользователя:</label>
                    <input
                        id="username"
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль:</label>
                    <input
                        id="password"
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                    Зарегистрироваться
                </button>
            </form>
        </div>
    );
};

export default Register;

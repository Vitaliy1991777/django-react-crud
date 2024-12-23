// import React, { useState } from 'react';
// import axios from 'axios';


// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://127.0.0.1:8000/api/token/', {
//                 username,
//                 password,
//             });
//             // Сохранение токенов в localStorage
//             localStorage.setItem('accessToken', response.data.access);
//             localStorage.setItem('refreshToken', response.data.refresh);
//             setError('');
//             alert('Успешный вход!');
//         } catch (err) {
//             setError('Неверный логин или пароль');
//         }
//     };

//     return (
//         <div>
//             <h2>Вход</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <form onSubmit={handleLogin}>
//                 <div>
//                     <label>Имя пользователя:</label>
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Пароль:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <button type="submit">Войти</button>
//             </form>
//         </div>
//     );
// };

// export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://127.0.0.1:8000/api/token/', {
//                 username,
//                 password,
//             });
//             // Сохранение токенов в localStorage
//             localStorage.setItem('accessToken', response.data.access);
//             localStorage.setItem('refreshToken', response.data.refresh);
//             setError('');
//             alert('Успешный вход!');
//         } catch (err) {
//             if (err.response && err.response.status === 401) {
//                 setError('Неверный логин или пароль');
//             } else {
//                 setError('Произошла ошибка. Попробуйте позже.');
//             }
//         }
//     };

//     return (
//         <div>
//             <h2>Вход</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <form onSubmit={handleLogin}>
//                 <div>
//                     <label htmlFor="username">Имя пользователя:</label>
//                     <input
//                         id="username"
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Пароль:</label>
//                     <input
//                         id="password"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Войти</button>
//             </form>
//         </div>
        
//     );
// };

// export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';
// import '../App.css';


// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault(); // Предотвращаем перезагрузку страницы
//         try {
//             const response = await axios.post('http://127.0.0.1:8000/api/token/', {
//                 username,
//                 password,
//             });
//             // Сохраняем токены в localStorage
//             localStorage.setItem('accessToken', response.data.access);
//             localStorage.setItem('refreshToken', response.data.refresh);

//             setError(''); // Очищаем сообщение об ошибке
//             alert('Успешный вход!');
//         } catch (err) {
//             // Обрабатываем ошибку 401 (неверные учетные данные)
//             if (err.response && err.response.status === 401) {
//                 setError('Неверный логин или пароль');
//             } else {
//                 setError('Произошла ошибка. Попробуйте позже.');
//             }
//         }
//     };

//     return (
//         <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
//             <h2 style={{ textAlign: 'center' }}>Вход</h2>
//             {error && (
//                 <p style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>
//                     {error}
//                 </p>
//             )}
//             <form onSubmit={handleLogin}>
//                 <div style={{ marginBottom: '10px' }}>
//                     <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Имя пользователя:</label>
//                     <input
//                         id="username"
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                         style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
//                     />
//                 </div>
//                 <div style={{ marginBottom: '10px' }}>
//                     <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Пароль:</label>
//                     <input
//                         id="password"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     style={{
//                         width: '100%',
//                         padding: '10px',
//                         backgroundColor: '#007bff',
//                         color: '#fff',
//                         border: 'none',
//                         borderRadius: '4px',
//                         cursor: 'pointer',
//                         fontWeight: 'bold',
//                     }}
//                 >
//                     Войти
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/', {
                username,
                password,
            });
            // Сохраняем токены в localStorage
            localStorage.setItem('accessToken', response.data.access);
            localStorage.setItem('refreshToken', response.data.refresh);

            setError(''); // Очищаем сообщение об ошибке
            alert('Успешный вход!');
            navigate('/tasks'); // Перенаправляем на страницу задач
        } catch (err) {
            // Обрабатываем ошибку 401 (неверные учетные данные)
            if (err.response && err.response.status === 401) {
                setError('Неверный логин или пароль');
            } else {
                setError('Произошла ошибка. Попробуйте позже.');
            }
        }
    };

    return (
        <div className="container">
            <h2 className="text-center">Вход</h2>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleLogin}>
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
                <button type="submit" className="btn btn-block">
                    Войти
                </button>
            </form>
        </div>
    );
};

export default Login;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const TaskList = () => {
//     const [tasks, setTasks] = useState([]);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchTasks = async () => {
//             try {
//                 const token = localStorage.getItem('accessToken');
//                 const response = await axios.get('http://127.0.0.1:8000/api/tasks/', {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });
//                 setTasks(response.data);
//             } catch (err) {
//                 setError('Не удалось загрузить задачи');
//             }
//         };

//         fetchTasks();
//     }, []);

//     return (
//         <div>
//             <h2>Список задач</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <ul>
//                 {tasks.map((task) => (
//                     <li key={task.id}>
//                         <strong>{task.title}:</strong> {task.description}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default TaskList;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../App.css';

// const TaskList = () => {
//     const [tasks, setTasks] = useState([]);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchTasks = async () => {
//             try {
//                 const token = localStorage.getItem('accessToken');
//                 if (!token) {
//                     setError('Требуется авторизация. Пожалуйста, войдите в систему.');
//                     return;
//                 }

//                 const response = await axios.get('http://127.0.0.1:8000/api/tasks/', {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });
//                 setTasks(response.data);
//                 setError('');
//             } catch (err) {
//                 if (err.response && err.response.status === 401) {
//                     setError('Срок действия токена истёк. Пожалуйста, войдите снова.');
//                 } else {
//                     setError('Не удалось загрузить задачи. Попробуйте позже.');
//                 }
//             }
//         };

//         fetchTasks();
//     }, []);

//     return (
//         <div>
//             <h2>Список задач</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {tasks.length > 0 ? (
//                 <ul>
//                     {tasks.map((task) => (
//                         <li key={task.id}>
//                             <strong>{task.title}:</strong> {task.description}
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 !error && <p>Задачи отсутствуют.</p>
//             )}
//         </div>
//     );
// };

// export default TaskList;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const token = localStorage.getItem('accessToken');
                if (!token) {
                    setError('Требуется авторизация. Пожалуйста, войдите в систему.');
                    return;
                }

                const response = await axios.get('http://127.0.0.1:8000/api/tasks/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setTasks(response.data);
                setError('');
            } catch (err) {
                if (err.response && err.response.status === 401) {
                    setError('Срок действия токена истёк. Пожалуйста, войдите снова.');
                } else {
                    setError('Не удалось загрузить задачи. Попробуйте позже.');
                }
            }
        };

        fetchTasks();
    }, []);

    return (
        <div className="task-list">
            <h2 className="text-center">Список задач</h2>
            {error && <p className="error-message">{error}</p>}
            {tasks.length > 0 ? (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <strong>{task.title}:</strong> {task.description}
                        </li>
                    ))}
                </ul>
            ) : (
                !error && <p>Задачи отсутствуют.</p>
            )}
        </div>
    );
};

export default TaskList;

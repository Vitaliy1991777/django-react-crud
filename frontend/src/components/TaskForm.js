import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ task, onSave }) => {
    const [title, setTitle] = useState(task ? task.title : '');
    const [description, setDescription] = useState(task ? task.description : '');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('accessToken');

        if (!token) {
            setError('Требуется авторизация. Пожалуйста, войдите в систему.');
            return;
        }

        try {
            if (task) {
                // Редактирование существующей задачи
                await axios.put(
                    `http://127.0.0.1:8000/api/tasks/${task.id}/`,
                    { title, description },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
            } else {
                // Создание новой задачи
                await axios.post(
                    'http://127.0.0.1:8000/api/tasks/',
                    { title, description },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
            }

            setTitle('');
            setDescription('');
            setError('');
            onSave();
        } catch (err) {
            setError('Не удалось сохранить задачу. Попробуйте позже.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <h3>{task ? 'Редактировать задачу' : 'Создать задачу'}</h3>
            {error && <p className="error-message">{error}</p>}
            <div className="form-group">
                <label htmlFor="title">Название:</label>
                <input
                    id="title"
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Описание:</label>
                <textarea
                    id="description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
            </div>
            <button type="submit" className="btn btn-success">
                {task ? 'Сохранить изменения' : 'Добавить задачу'}
            </button>
        </form>
    );
};

export default TaskForm;

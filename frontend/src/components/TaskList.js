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
//         <div className="task-list">
//             <h2 className="text-center">Список задач</h2>
//             {error && <p className="error-message">{error}</p>}
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


// import React, { useState } from 'react';
// import '../App.css';

// const TaskList = () => {
//     const [tasks, setTasks] = useState([
//         { id: 1, title: 'Подготовить отчет', description: 'Срок: 25 декабря' },
//         { id: 2, title: 'Купить продукты', description: 'Список: хлеб, молоко, сыр' },
//     ]);
//     const [showModal, setShowModal] = useState(false);
//     const [selectedTask, setSelectedTask] = useState(null);

//     const handleDelete = (taskId) => {
//         setTasks(tasks.filter(task => task.id !== taskId));
//     };

//     const handleEdit = (task) => {
//         setSelectedTask(task);
//         setShowModal(true);
//     };

//     const handleModalClose = () => {
//         setSelectedTask(null);
//         setShowModal(false);
//     };

//     return (
//         <div className="task-list">
//             <h2 className="text-center">Список задач</h2>
//             <div className="tasks-container">
//                 {tasks.map(task => (
//                     <div key={task.id} className="task-item">
//                         <div className="task-content">
//                             <h4>{task.title}</h4>
//                             <p>{task.description}</p>
//                         </div>
//                         <div className="task-actions">
//                             <button className="btn-edit" onClick={() => handleEdit(task)}>Изменить</button>
//                             <button className="btn-delete" onClick={() => handleDelete(task.id)}>Удалить</button>
//                         </div>
//                     </div>
//                 ))}
//                 <button className="btn-add">+ Новая задача</button>
//             </div>

//             {showModal && selectedTask && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         <h3>Изменение задачи</h3>
//                         <p><strong>Название:</strong> {selectedTask.title}</p>
//                         <p><strong>Описание:</strong> {selectedTask.description}</p>
//                         <button className="btn-close" onClick={handleModalClose}>Закрыть</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TaskList;


// import React, { useState } from 'react';
// import '../App.css';

// const TaskList = () => {
//     const [tasks, setTasks] = useState([
//         { id: 1, title: 'Подготовить отчет', description: 'Срок: 25 декабря' },
//         { id: 2, title: 'Купить продукты', description: 'Список: хлеб, молоко, сыр' },
//     ]);
//     const [showModal, setShowModal] = useState(false);
//     const [selectedTask, setSelectedTask] = useState(null);
//     const [isEditing, setIsEditing] = useState(false);
//     const [newTask, setNewTask] = useState({ title: '', description: '' });

//     const handleDelete = (taskId) => {
//         setTasks(tasks.filter(task => task.id !== taskId));
//     };

//     const handleEdit = (task) => {
//         setSelectedTask(task);
//         setIsEditing(true);
//         setShowModal(true);
//     };

//     const handleTaskClick = (task) => {
//         setSelectedTask(task);
//         setIsEditing(false);
//         setShowModal(true);
//     };

//     const handleModalClose = () => {
//         setSelectedTask(null);
//         setShowModal(false);
//         setNewTask({ title: '', description: '' });
//     };

//     const handleSave = () => {
//         if (isEditing && selectedTask) {
//             setTasks(tasks.map(task => (task.id === selectedTask.id ? selectedTask : task)));
//         } else if (!isEditing && newTask.title && newTask.description) {
//             const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
//             setTasks([...tasks, { ...newTask, id: newId }]);
//         }
//         handleModalClose();
//     };

//     const handleNewTask = () => {
//         setNewTask({ title: '', description: '' });
//         setSelectedTask(null);
//         setIsEditing(false);
//         setShowModal(true);
//     };

//     return (
//         <div className="task-list">
//             <h2 className="text-center">Список задач</h2>
//             <div className="tasks-container">
//                 {tasks.map(task => (
//                     <div
//                         key={task.id}
//                         className="task-item"
//                         onClick={() => handleTaskClick(task)}
//                         style={{ cursor: 'pointer' }}
//                     >
//                         <div className="task-content">
//                             <h4>{task.title}</h4>
//                             <p>{task.description}</p>
//                         </div>
//                         <div className="task-actions">
//                             <button
//                                 className="btn-edit"
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     handleEdit(task);
//                                 }}
//                             >
//                                 Изменить
//                             </button>
//                             <button
//                                 className="btn-delete"
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     handleDelete(task.id);
//                                 }}
//                             >
//                                 Удалить
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//                 <button className="btn-add" onClick={handleNewTask}>+ Новая задача</button>
//             </div>

//             {showModal && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         {isEditing || selectedTask ? (
//                             <>
//                                 <h3>{isEditing ? 'Изменение задачи' : selectedTask?.title}</h3>
//                                 <input
//                                     type="text"
//                                     placeholder="Название"
//                                     value={isEditing ? selectedTask.title : newTask.title}
//                                     onChange={(e) =>
//                                         isEditing
//                                             ? setSelectedTask({ ...selectedTask, title: e.target.value })
//                                             : setNewTask({ ...newTask, title: e.target.value })
//                                     }
//                                 />
//                                 <textarea
//                                     placeholder="Описание"
//                                     value={isEditing ? selectedTask.description : newTask.description}
//                                     onChange={(e) =>
//                                         isEditing
//                                             ? setSelectedTask({ ...selectedTask, description: e.target.value })
//                                             : setNewTask({ ...newTask, description: e.target.value })
//                                     }
//                                 ></textarea>
//                                 <button onClick={handleSave} className="btn-save">Сохранить</button>
//                             </>
//                         ) : (
//                             <>
//                                 <h3>Просмотр задачи</h3>
//                                 <p>{selectedTask?.title}</p>
//                                 <p>{selectedTask?.description}</p>
//                             </>
//                         )}
//                         <button className="btn-close" onClick={handleModalClose}>Закрыть</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TaskList;


// import React, { useState } from 'react';
// import '../App.css';

// const TaskList = () => {
//     const [tasks, setTasks] = useState([
//         { id: 1, title: 'Подготовить отчет', description: 'Срок: 25 декабря' },
//         { id: 2, title: 'Купить продукты', description: 'Список: хлеб, молоко, сыр' },
//     ]);
//     const [showModal, setShowModal] = useState(false);
//     const [selectedTask, setSelectedTask] = useState(null);
//     const [isEditing, setIsEditing] = useState(false);
//     const [newTask, setNewTask] = useState({ title: '', description: '' });

//     const handleDelete = (taskId) => {
//         setTasks(tasks.filter((task) => task.id !== taskId));
//     };

//     const handleEdit = (task) => {
//         setSelectedTask(task);
//         setIsEditing(true);
//         setShowModal(true);
//     };

//     const handleTaskClick = (task) => {
//         setSelectedTask(task);
//         setIsEditing(false);
//         setShowModal(true);
//     };

//     const handleModalClose = () => {
//         setSelectedTask(null);
//         setShowModal(false);
//         setNewTask({ title: '', description: '' });
//     };

//     const handleSave = () => {
//         if (isEditing && selectedTask) {
//             setTasks(
//                 tasks.map((task) =>
//                     task.id === selectedTask.id ? selectedTask : task
//                 )
//             );
//         } else if (!isEditing && newTask.title.trim() && newTask.description.trim()) {
//             const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
//             setTasks([...tasks, { ...newTask, id: newId }]);
//         }
//         handleModalClose();
//     };

//     const handleNewTask = () => {
//         setNewTask({ title: '', description: '' });
//         setSelectedTask(null);
//         setIsEditing(false);
//         setShowModal(true);
//     };

//     return (
//         <div className="task-list">
//             <h2 className="text-center">Список задач</h2>
//             <div className="tasks-container">
//                 {tasks.map((task) => (
//                     <div
//                         key={task.id}
//                         className="task-item"
//                         onClick={() => handleTaskClick(task)}
//                         style={{ cursor: 'pointer' }}
//                     >
//                         <div className="task-content">
//                             <h4>{task.title}</h4>
//                             <p>{task.description}</p>
//                         </div>
//                         <div className="task-actions">
//                             <button
//                                 className="btn-edit"
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     handleEdit(task);
//                                 }}
//                             >
//                                 Изменить
//                             </button>
//                             <button
//                                 className="btn-delete"
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     handleDelete(task.id);
//                                 }}
//                             >
//                                 Удалить
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//                 <button className="btn-add" onClick={handleNewTask}>
//                     + Новая задача
//                 </button>
//             </div>

//             {showModal && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         {isEditing ? (
//                             <>
//                                 <h3>Изменение задачи</h3>
//                                 <input
//                                     type="text"
//                                     placeholder="Название"
//                                     value={selectedTask?.title}
//                                     onChange={(e) =>
//                                         setSelectedTask({
//                                             ...selectedTask,
//                                             title: e.target.value,
//                                         })
//                                     }
//                                 />
//                                 <textarea
//                                     placeholder="Описание"
//                                     value={selectedTask?.description}
//                                     onChange={(e) =>
//                                         setSelectedTask({
//                                             ...selectedTask,
//                                             description: e.target.value,
//                                         })
//                                     }
//                                 ></textarea>
//                             </>
//                         ) : (
//                             <>
//                                 <h3>{selectedTask ? 'Просмотр задачи' : 'Новая задача'}</h3>
//                                 {selectedTask ? (
//                                     <>
//                                         <p>{selectedTask.title}</p>
//                                         <p>{selectedTask.description}</p>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <input
//                                             type="text"
//                                             placeholder="Название"
//                                             value={newTask.title}
//                                             onChange={(e) =>
//                                                 setNewTask({
//                                                     ...newTask,
//                                                     title: e.target.value,
//                                                 })
//                                             }
//                                         />
//                                         <textarea
//                                             placeholder="Описание"
//                                             value={newTask.description}
//                                             onChange={(e) =>
//                                                 setNewTask({
//                                                     ...newTask,
//                                                     description: e.target.value,
//                                                 })
//                                             }
//                                         ></textarea>
//                                     </>
//                                 )}
//                             </>
//                         )}
//                         <button onClick={handleSave} className="btn-save">
//                             {isEditing ? 'Сохранить' : 'Добавить'}
//                         </button>
//                         <button className="btn-close" onClick={handleModalClose}>
//                             Закрыть
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TaskList;

// import React, { useEffect, useState } from 'react';
// import axios from '../api/axios'; // Импорт axiosInstance
// import '../App.css';

// const TaskList = () => {
//     const [tasks, setTasks] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [selectedTask, setSelectedTask] = useState(null);
//     const [isEditing, setIsEditing] = useState(false);
//     const [newTask, setNewTask] = useState({ title: '', description: '' });
//     const [error, setError] = useState('');

//     // Загрузка задач при загрузке компонента
//     useEffect(() => {
//         fetchTasks();
//     }, []);

//     const fetchTasks = async () => {
//         try {
//             const response = await axios.get('/tasks/');
//             setTasks(response.data);
//         } catch (err) {
//             setError('Не удалось загрузить задачи. Попробуйте позже.');
//         }
//     };

//     const handleDelete = async (taskId) => {
//         try {
//             await axios.delete(`/tasks/${taskId}/`);
//             setTasks(tasks.filter((task) => task.id !== taskId));
//         } catch (err) {
//             setError('Не удалось удалить задачу.');
//         }
//     };

//     const handleEdit = (task) => {
//         setSelectedTask(task);
//         setIsEditing(true);
//         setShowModal(true);
//     };

//     const handleTaskClick = (task) => {
//         setSelectedTask(task);
//         setIsEditing(false);
//         setShowModal(true);
//     };

//     const handleModalClose = () => {
//         setSelectedTask(null);
//         setShowModal(false);
//         setNewTask({ title: '', description: '' });
//         setError('');
//     };

//     const handleSave = async () => {
//         try {
//             if (isEditing && selectedTask) {
//                 const response = await axios.put(`/tasks/${selectedTask.id}/`, selectedTask);
//                 setTasks(
//                     tasks.map((task) =>
//                         task.id === selectedTask.id ? response.data : task
//                     )
//                 );
//             } else if (!isEditing && newTask.title.trim() && newTask.description.trim()) {
//                 const response = await axios.post('/tasks/', newTask);
//                 setTasks([...tasks, response.data]);
//             }
//             handleModalClose();
//         } catch (err) {
//             setError('Не удалось сохранить задачу. Попробуйте позже.');
//         }
//     };

//     const handleNewTask = () => {
//         setNewTask({ title: '', description: '' });
//         setSelectedTask(null);
//         setIsEditing(false);
//         setShowModal(true);
//     };

//     return (
//         <div className="task-list">
//             <h2 className="text-center">Список задач</h2>
//             {error && <p className="error-message">{error}</p>}
//             <div className="tasks-container">
//                 {tasks.map((task) => (
//                     <div
//                         key={task.id}
//                         className="task-item"
//                         onClick={() => handleTaskClick(task)}
//                         style={{ cursor: 'pointer' }}
//                     >
//                         <div className="task-content">
//                             <h4>{task.title}</h4>
//                             <p>{task.description}</p>
//                         </div>
//                         <div className="task-actions">
//                             <button
//                                 className="btn-edit"
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     handleEdit(task);
//                                 }}
//                             >
//                                 Изменить
//                             </button>
//                             <button
//                                 className="btn-delete"
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     handleDelete(task.id);
//                                 }}
//                             >
//                                 Удалить
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//                 <button className="btn-add" onClick={handleNewTask}>
//                     + Новая задача
//                 </button>
//             </div>

//             {showModal && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         {isEditing ? (
//                             <>
//                                 <h3>Изменение задачи</h3>
//                                 <input
//                                     type="text"
//                                     placeholder="Название"
//                                     value={selectedTask?.title}
//                                     onChange={(e) =>
//                                         setSelectedTask({
//                                             ...selectedTask,
//                                             title: e.target.value,
//                                         })
//                                     }
//                                 />
//                                 <textarea
//                                     placeholder="Описание"
//                                     value={selectedTask?.description}
//                                     onChange={(e) =>
//                                         setSelectedTask({
//                                             ...selectedTask,
//                                             description: e.target.value,
//                                         })
//                                     }
//                                 ></textarea>
//                             </>
//                         ) : (
//                             <>
//                                 <h3>Новая задача</h3>
//                                 <input
//                                     type="text"
//                                     placeholder="Название"
//                                     value={newTask.title}
//                                     onChange={(e) =>
//                                         setNewTask({
//                                             ...newTask,
//                                             title: e.target.value,
//                                         })
//                                     }
//                                 />
//                                 <textarea
//                                     placeholder="Описание"
//                                     value={newTask.description}
//                                     onChange={(e) =>
//                                         setNewTask({
//                                             ...newTask,
//                                             description: e.target.value,
//                                         })
//                                     }
//                                 ></textarea>
//                             </>
//                         )}
//                         <button onClick={handleSave} className="btn-save">
//                             {isEditing ? 'Сохранить' : 'Добавить'}
//                         </button>
//                         <button className="btn-close" onClick={handleModalClose}>
//                             Закрыть
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TaskList;


import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axios';
import '../App.css';

const TaskList = () => {
   const [tasks, setTasks] = useState([]);
   const [showModal, setShowModal] = useState(false);
   const [selectedTask, setSelectedTask] = useState(null);
   const [isEditing, setIsEditing] = useState(false);
   const [newTask, setNewTask] = useState({ title: '', description: '' });

   useEffect(() => {
       fetchTasks();
   }, []);

   const fetchTasks = async () => {
       try {
           const response = await axiosInstance.get('tasks/');
           setTasks(response.data);
       } catch (error) {
           console.error('Ошибка при загрузке задач:', error);
       }
   };

   const handleDelete = async (taskId) => {
       try {
           await axiosInstance.delete(`tasks/${taskId}/`);
           setTasks(tasks.filter((task) => task.id !== taskId));
       } catch (error) {
           console.error('Ошибка при удалении задачи:', error);
       }
   };

   const handleEdit = (task) => {
       setSelectedTask(task);
       setIsEditing(true);
       setShowModal(true);
   };

   const handleTaskClick = (task) => {
       setSelectedTask(task);
       setIsEditing(false);
       setShowModal(true);
   };

   const handleModalClose = () => {
       setSelectedTask(null);
       setShowModal(false);
       setNewTask({ title: '', description: '' });
   };

   const handleSave = async () => {
       try {
           if (isEditing && selectedTask) {
               const response = await axiosInstance.put(`tasks/${selectedTask.id}/`, selectedTask);
               setTasks(tasks.map((task) =>
                   task.id === selectedTask.id ? response.data : task
               ));
           } else {
               const response = await axiosInstance.post('tasks/', newTask);
               setTasks([...tasks, response.data]);
           }
           handleModalClose();
       } catch (error) {
           console.error('Ошибка при сохранении задачи:', error);
       }
   };

   const handleNewTask = () => {
       setNewTask({ title: '', description: '' });
       setSelectedTask(null);
       setIsEditing(false);
       setShowModal(true);
   };

   return (
       <div className="task-list">
           <h2 className="text-center">Список задач</h2>
           <div className="tasks-container">
               {tasks.map((task) => (
                   <div
                       key={task.id}
                       className="task-item"
                       onClick={() => handleTaskClick(task)}
                       style={{ cursor: 'pointer' }}
                   >
                       <div className="task-content">
                           <h4>{task.title}</h4>
                           <p>{task.description}</p>
                       </div>
                       <div className="task-actions">
                           <button
                               className="btn-edit"
                               onClick={(e) => {
                                   e.stopPropagation();
                                   handleEdit(task);
                               }}
                           >
                               Изменить
                           </button>
                           <button
                               className="btn-delete"
                               onClick={(e) => {
                                   e.stopPropagation();
                                   handleDelete(task.id);
                               }}
                           >
                               Удалить
                           </button>
                       </div>
                   </div>
               ))}
               <button className="btn-add" onClick={handleNewTask}>
                   + Новая задача
               </button>
           </div>

           {showModal && (
               <div className="modal">
                   <div className="modal-content">
                       {isEditing ? (
                           <>
                               <h3>Изменение задачи</h3>
                               <input
                                   type="text"
                                   placeholder="Название"
                                   value={selectedTask?.title}
                                   onChange={(e) =>
                                       setSelectedTask({
                                           ...selectedTask,
                                           title: e.target.value,
                                       })
                                   }
                               />
                               <textarea
                                   placeholder="Описание"
                                   value={selectedTask?.description}
                                   onChange={(e) =>
                                       setSelectedTask({
                                           ...selectedTask,
                                           description: e.target.value,
                                       })
                                   }
                               />
                           </>
                       ) : (
                           <>
                               <h3>{selectedTask ? 'Просмотр задачи' : 'Новая задача'}</h3>
                               {selectedTask ? (
                                   <>
                                       <p>{selectedTask.title}</p>
                                       <p>{selectedTask.description}</p>
                                   </>
                               ) : (
                                   <>
                                       <input
                                           type="text"
                                           placeholder="Название"
                                           value={newTask.title}
                                           onChange={(e) =>
                                               setNewTask({
                                                   ...newTask,
                                                   title: e.target.value,
                                               })
                                           }
                                       />
                                       <textarea
                                           placeholder="Описание"
                                           value={newTask.description}
                                           onChange={(e) =>
                                               setNewTask({
                                                   ...newTask,
                                                   description: e.target.value,
                                               })
                                           }
                                       />
                                   </>
                               )}
                           </>
                       )}
                       <button onClick={handleSave} className="btn-save">
                           {isEditing ? 'Сохранить' : 'Добавить'}
                       </button>
                       <button className="btn-close" onClick={handleModalClose}>
                           Закрыть
                       </button>
                   </div>
               </div>
           )}
       </div>
   );
};

export default TaskList;
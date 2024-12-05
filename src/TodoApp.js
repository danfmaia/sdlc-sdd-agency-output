import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        data-testid="task-input"
      />
      <button onClick={handleAddTask} data-testid="add-button">Add</button>
      <ul data-testid="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
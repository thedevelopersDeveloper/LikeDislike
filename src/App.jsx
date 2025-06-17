import { useState } from 'react';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;

    const newTask = {
      text: task,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setTask('');
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const toggleDone = (index) => {
    const updated = tasks.map((t, i) =>
      i === index ? { ...t, done: !t.done } : t
    );
    setTasks(updated);
  };

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Your task..."
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button onClick={addTask}>Create Task</button>
      </form>

      <ul>
        {tasks.map((taskObj, i) => (
          <li key={i} style={{ textDecoration: taskObj.done ? 'line-through' : 'none' }}>
            {taskObj.text}{' '}
            <button onClick={() => toggleDone(i)}>
              {taskObj.done ? 'Undo' : 'Done'}
            </button>{' '}
            <button onClick={() => deleteTask(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;

import React, { useRef, useState } from 'react';

export default function TodoList() {

    //using react hooks for reusable code
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [updateTask, setUpdateTask] = useState(null);
    const [editedTask, setEditedTask] = useState('');
    const timeoutRef = useRef();


    //functions
    function addTask() {

        if(!newTask) {
            alert('Enter a task');
            return;
        }

        const task = {
            //assign each task a unique id
            id: Math.floor(Math.random() * 1000),
            value: newTask
        };

        setTasks(oldList => [...oldList, task]);
        //set task back to empty string
        setNewTask("");
    }

    function deleteTask(id) {
        const newTaskArray = tasks.filter(task => task.id !== id);
        setTasks(newTaskArray);
    }

    function editTask(id, value) {
        setUpdateTask(id);
        setEditedTask(value);
    }

    //reassigns value to edited task and sets timeout for save to display
    const updatingTask = () => {
        clearTimeout(timeoutRef.current);

        const newTimeout = setTimeout(() => {
          setTasks((prevTasks) =>
            prevTasks.map((task) =>
              task.id === updateTask ? { ...task, value: editedTask } : task
            )
          );
          setUpdateTask(null);
        }, 500);
      
        timeoutRef.current = newTimeout;
      };



  return (
    <div>
      <h1>To-Do List</h1>
      <input type="text" placeholder='Enter new task' value={newTask} onChange={e => setNewTask(e.target.value)} />
      <button onClick={() => addTask()}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {updateTask === task.id ? (
              <>
                <input type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)}/>
                <button onClick={updatingTask}>Save</button>
              </>
            ) : (
              <>
                {task.value}
                <button onClick={() => editTask(task.id, task.value)}>Edit Task</button>
                <button onClick={() => deleteTask(task.id)}>Remove Task</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
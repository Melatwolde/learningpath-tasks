import React, { useState } from 'react';
import TaskInput from '../components/userinput';
import TaskList from '../components/task';
import style from '../style/user.module.css'

const Main: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>([]);

    const addTask = (task: string) => {
        setTasks([...tasks, task]);
    };
    // const Done = (index: number) => {
      
    // };
    const editTask = (index: number, newTask: string) => {
        const updatedTasks = tasks.map((task, i) => (i === index ? newTask : task));
        setTasks(updatedTasks);
    };
    

    const deleteTask = (index: number) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className={style.container}>
            <div className="header">
                <h2>Todo List</h2>
                <TaskInput onAddTask={addTask} />
            </div>
            <TaskList tasks={tasks} onEditTask={editTask} onDeleteTask={deleteTask} />
        </div>
    );
};

export default Main;
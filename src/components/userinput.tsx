import React, { useState } from 'react';
import style from '../style/user.module.css'
interface TaskInputProps {
    onAddTask: (task: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
    const [task, setTask] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    };

    const handleSubmit = () => {
        if (task.trim()) {
            onAddTask(task.trim());
            setTask('');
        }
    };
    return (
        <div className={style["input-container"]}>
            <input
                type="text"
                value={task}
                onChange={handleChange}
                placeholder="Add a new task"
            />
            <button onClick={handleSubmit}>Add Task</button>
        </div>
    );
};

export default TaskInput;
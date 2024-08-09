import React from 'react';
import style from '../style/user.module.css'

interface TaskListProps {
    tasks: string[];
    onEditTask: (index: number, newTask: string) => void;
    onDeleteTask: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEditTask, onDeleteTask }) => {
    return (
        <div className={style["task-list"]}>
            {tasks.map((task, index) => (
                <div key={index} className={style["task"]}>
                    <div className="task-content">{task}</div>
                    <button
                        className={style["edit-btn"]}
                        onClick={() => {
                            const newContent = prompt('Edit task:', task);
                            if (newContent) {
                                onEditTask(index, newContent);
                            }
                        }}
                    >
                        Edit
                    </button>
                    <button
                        className={style["delete-btn"]}
                        onClick={() => onDeleteTask(index)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
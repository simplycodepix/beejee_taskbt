import React from 'react';
import Task from '../Task';

const TaskList = ({ tasks }) => {
    const { data } = tasks;
    return (
        <div className="task-list">
            {data.map((task, i) => <Task key={i} task={task} />)}
        </div>
    )
};

export default TaskList;
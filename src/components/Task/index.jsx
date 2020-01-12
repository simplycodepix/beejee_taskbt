import React, { useState } from 'react';
import { connect } from 'react-redux';
import TaskEditForm from '../TaskEditForm';
import { editTask } from '../../store/actions/taskActions';

import './index.css';

const TaskRow = ({ title, value }) => (
    <div className="task-row">
        {title && <div className="task-row-title">{title}</div>}
        {value && <div className="task-row-value">{value}</div>}
    </div>
);

const TaskEditButton = ({ isActive, setEdit }) => (
    <div className="task-edit" onClick={() => setEdit(!isActive)}>
        {isActive ? 'Cancel Edit' : 'Edit'}
    </div>
);

const Task = ({ task, authenticated, requestTaskEdit }) => {
    const { id, username, email, text, status } = task;
    const [edit, setEdit] = useState(false);
    const [edited, setEdited] = useState(false);

    const handleFormSubmit = (e, formData) => {
        e.preventDefault();

        requestTaskEdit(formData);
        setEdit(false);
        if (text !== formData.text || status !== formData.status) 
            setEdited(true);
    }

    return (
        <div className="task">
            {authenticated && <TaskEditButton isActive={edit} setEdit={setEdit} />}
            <div className="task-content">
                {username && <TaskRow title="Имя: " value={username} />}
                {email && <TaskRow title="Email: " value={email} />}
                {text && <TaskRow title="Текст: " value={text} />}
                <TaskRow title="Статус: " value={status === 10 ? 'Выполнено' : 'Не выполнено' } />
                {edited && <TaskRow title="Отредактировано" />}

                {edit && <TaskEditForm 
                            handleFormSubmit={handleFormSubmit} 
                            id={id} 
                            status={status} 
                            text={text} />}
            </div>
            {/* <Link to={`/task/${id}`} className="task-link"></Link> */}
        </div>
    );
};

const mapStateToProps = (state) => ({
    authenticated: state.session.authenticated
});

const mapDispatchToProps = (dispatch) => ({
    requestTaskEdit: (data) => dispatch(editTask(data))
});

const ConnectedTask = connect(mapStateToProps, mapDispatchToProps)(Task);

export default ConnectedTask;
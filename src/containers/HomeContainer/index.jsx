import React, { useEffect } from 'react';
import TaskList from "../../components/TaskList";
import CreateTaskForm from '../../components/CreateTaskForm';

import './index.css';

import { connect } from 'react-redux';
import { loadTasks, createTask, clearMessages } from '../../store/actions/taskActions';
import Header from '../../components/Header';
import TasksFilter from '../../components/TasksFilter';
import { logoutUser } from '../../store/actions/authActions';
import { selectErrorText } from '../../store/selectors/error/errorSelector';
import { removeErrors } from '../../store/actions/errorActions';

const HomeContainer = ({
    tasks,
    requestLoadTasks,
    requestCreateTask,
    authenticated,
    requestLogoutUser,
    clearMessages,
    requestErrorMessage,
    removeErrors
}) => {
    useEffect(() => {
        requestLoadTasks();
    }, []);

    return (
        <div className="home-page">
            <Header authenticated={authenticated} requestLogoutUser={requestLogoutUser} />
            <TasksFilter />
            <div className="home-page-content">
                <div className="home-page-tasks">
                    <TaskList tasks={tasks} />
                </div>
                <div className="home-page-form">
                    <CreateTaskForm
                        success={tasks.messageSuccess}
                        requestErrorMessage={requestErrorMessage}
                        createTask={requestCreateTask}
                        clearMessages={clearMessages}
                        removeErrors={removeErrors}
                    />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    authenticated: state.session.authenticated,
    tasks: state.tasks,
    requestErrorMessage: (type) => selectErrorText(state, type)
});

const mapDispatchToProps = (dispatch) => ({
    requestLoadTasks: () => dispatch(loadTasks()),
    requestCreateTask: (data) => dispatch(createTask(data)),
    requestLogoutUser: () => dispatch(logoutUser()),
    clearMessages: () => dispatch(clearMessages()),
    removeErrors: () => dispatch(removeErrors())
});

const ConnectedHomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export default ConnectedHomeContainer;
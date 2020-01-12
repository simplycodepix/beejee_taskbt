import React, { useEffect, useState } from 'react';
import TaskList from "../../components/TaskList";
import CreateTaskForm from '../../components/CreateTaskForm';

import './index.css';

import { connect } from 'react-redux';
import { loadTasks, createTask } from '../../store/actions/taskActions';
import Header from '../../components/Header';
import TasksFilter from '../../components/TasksFilter';
import { logoutUser } from '../../store/actions/authActions';

const HomeContainer = ({ tasks, requestLoadTasks, requestCreateTask, authenticated, requestLogoutUser }) => {
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
                    <CreateTaskForm success={tasks.messageSuccess} errors={tasks.errors} createTask={requestCreateTask} />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    authenticated: state.session.authenticated,
    tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
    requestLoadTasks: () => dispatch(loadTasks()),
    requestCreateTask: (data) => dispatch(createTask(data)),
    requestLogoutUser: () => dispatch(logoutUser())
});

const ConnectedHomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export default ConnectedHomeContainer;
import React, { useState } from 'react';
import { connect } from 'react-redux';

import './index.css';
import { setFilters } from '../../store/actions/taskActions';

const TasksPagination = ({ task_count, onChange, value }) => {
    const numPages = Math.ceil(task_count / 3);

    const getPages = () => {
        let pages = [];

        for (let i = 1; i <= numPages; i++) {
            pages.push(<option key={i} value={i}>Page {i}</option>);
        }

        return pages;
    }

    return (
        <select name="page" id="page" onChange={onChange} value={value}>
            {getPages()};
        </select>
    )
}

const TasksFilter = ({ filters, setFilter, task_count }) => {
    const [filterData, setFilterData] = useState(filters);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;

        const newFilterData = { ...filterData, [name]: value }

        setFilterData(newFilterData);
        setFilter(newFilterData);
    }

    return (
        <div className="filters">
            <select name="sort_field" id="sort_field" value={filterData.sort_field} onChange={handleFilterChange}>
                <option value="id">id</option>
                <option value="username">username</option>
                <option value="email">email</option>
                <option value="status">status</option>
            </select>

            <select name="sort_direction" id="sort_direction" value={filterData.sort_direction} onChange={handleFilterChange}>
                <option value="asc">asc</option>
                <option value="desc">desc</option>
            </select>

            <TasksPagination task_count={task_count} onChange={handleFilterChange} value={filterData.page} />
        </div>
    )
};

const mapStateToProps = (state) => ({
    filters: state.tasks.filter,
    task_count: state.tasks.task_count
});

const mapDispatchToProps = (dispatch) => ({
    setFilter: (data) => dispatch(setFilters(data))
})

const ConnectedTasksFilter = connect(mapStateToProps, mapDispatchToProps)(TasksFilter);

export default ConnectedTasksFilter;
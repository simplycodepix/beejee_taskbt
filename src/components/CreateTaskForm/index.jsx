import React, { useState } from 'react';
import Button from '../Button';
import Form from '../Form';
import { CREATE_TASK_FAILED } from '../../store/types';

import './index.css';

const CreateTaskForm = ({ 
    createTask, 
    clearMessages, 
    removeErrors, 
    requestErrorMessage, 
    success 
}) => {
    const initialFormData = { username: '', email: '', text: '' };
    const [formData, setFormData] = useState(initialFormData);
    const errors = requestErrorMessage(CREATE_TASK_FAILED);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (Object.keys(errors).length > 0 || success) {
            clearMessages();
            removeErrors();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        createTask(formData);
        setFormData(initialFormData);
    };

    return (
        <Form onSubmit={handleSubmit}>
            {success && <div className="success">{success}</div>}

            <div className="form-group">
                <input type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder="Username" />
                {errors.username && <div className="error">{errors.username}</div>}
            </div>
            <div className="form-group">
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
                {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="form-group">
                <textarea name="text" value={formData.text} onChange={handleInputChange} placeholder="Text" />
                {errors.text && <div className="error">{errors.text}</div>}
            </div>
            <Button>
                Create Task
            </Button>
        </Form>
    )
};

export default CreateTaskForm;
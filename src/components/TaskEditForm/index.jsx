import React, { useState } from 'react';
import Button from '../Button';
import Form from '../Form';

const TaskEditForm = ({ id, status, text, handleFormSubmit }) => {
    const initialFormData = { id, status, text, edited: false };
    const [formData, setFormData] = useState(initialFormData);

    if (!id && !status && !text) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <Form onSubmit={(e) => handleFormSubmit(e, formData)}>
            <div className="form-group">
                <textarea name="text" value={formData.text} onChange={handleChange} placeholder="Text" />
            </div>
            <div className="form-group">
                <select name="status" id="status" value={formData.status} onChange={handleChange}>
                    <option value="0">Не выполнено</option>
                    <option value="10">Выполнено</option>
                </select>
            </div>
            <Button>
                Save Task
            </Button>
        </Form>
    );
}

export default TaskEditForm;
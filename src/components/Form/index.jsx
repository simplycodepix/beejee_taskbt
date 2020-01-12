import React from 'react';

import './index.css';

const Form = ({ onSubmit, children }) => (
    <div className="form-wrap">
        <form onSubmit={onSubmit} className="form">
            {children}
        </form>
    </div>
);

export default Form;
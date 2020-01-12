import React from 'react';

import './index.css';

const Button = ({ children }) => (
    <div className="form-group">
        <button className="button" type="submit">
            {children}
        </button>
    </div>
);

export default Button;
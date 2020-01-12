import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from "../../components/Form";
import Button from "../../components/Button";
import { authUser } from '../../store/actions/authActions';
import { Redirect } from 'react-router';

import './index.css';

const LoginContainer = ({ authenticated, requestAuthUser, formErrors }) => {
    const initialFormData = { username: '', password: '' };
    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        requestAuthUser(formData)
    }

    if (authenticated) return <Redirect to='/' />;

    return (
        <div className="login-page">
            <h2 className="login-page-title">
                Login Page
            </h2>
            <Form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder="Username" />
                    {formErrors.username && <div className="error">{formErrors.username}</div>}
                </div>
                <div className="form-group">
                    <input type="password" name="password" value={formData.email} onChange={handleInputChange} placeholder="Password" />
                    {formErrors.password && <div className="error">{formErrors.password}</div>}
                </div>
                <Button>
                    Login
                </Button>
            </Form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    authenticated: state.session.authenticated,
    formErrors: state.session.errors
});

const mapDispatchToProps = (dispatch) => ({
    requestAuthUser: (data) => dispatch(authUser(data))
});

const ConnectedLoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

export default ConnectedLoginContainer;
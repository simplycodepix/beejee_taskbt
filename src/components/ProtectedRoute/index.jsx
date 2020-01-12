import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

const PrivateRoute = ({ component, authenticated, ...rest }) => {
    const routeComponent = (props) => (
        !authenticated
            ? <Redirect to={{ pathname: '/' }} />
            : React.createElement(component, props)
    );
    return <Route {...rest} render={routeComponent} />;
};

const mapStateToProps = (state) => ({
    authenticated: state.session.authenticated
});

const ConnectedPrivateRoute = connect(mapStateToProps)(PrivateRoute);

export default ConnectedPrivateRoute;
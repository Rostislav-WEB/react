
import React from 'react'
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { compose } from 'redux';

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectContainer extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to="/login/" />
            }
            return <Component {...this.props} />
        }
    }
    return compose(
        connect(mapStateToPropsForRedirect)
    )(RedirectContainer)
    
}

import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<h2>Loading...</h2>);
        }
        return (
            <div>
                <h2>Hello - user detail</h2>
                <p>{this.props.user.firstName} {this.props.user.lastName}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps)(UserDetail);

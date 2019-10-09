import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectUser from '../actions/index';


class UserList extends Component {

    // createUserList (userlist) {
    //     return (
    //         this.props.userlist.map((user) => {
    //             return (
    //                 <h3>{user.age}</h3>
    //             )
    //         })
    //     )
    // };
    render() {
        return (
            <div>
                <h2>UserList goes here...</h2>
                {
                    // this.createUserList()
                    this.props.userlist.map((user) => {
                        return (
                            <li key={user.id} onClick={() => {
                                this.props.selectUser(user)
                            }}>{user.firstName} {user.lastName} - {user.age} (age)</li>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        userlist: state.users
    }
};

function mapDispatchToProps (dispatch) {
    return bindActionCreators({selectUser: selectUser}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
import React, { Component } from 'react';
import { connect } from 'react-redux';


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
                            <h4>{user.firstName} {user.lastName} - {user.age} (age)</h4>
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

export default connect(mapStateToProps)(UserList);
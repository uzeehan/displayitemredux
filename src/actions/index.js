const selectUser = (user) => {
    console.log('clicked state in action: ', user.age);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export default selectUser;
import { combineReducers } from 'redux';
import UserReducer from './reducer-users';
import ActiveUser from './reducer-single-user';

const allReducers = combineReducers ({
    users: UserReducer,
    user: ActiveUser
});
console.log('main reducer:...................', ActiveUser);

export default allReducers;
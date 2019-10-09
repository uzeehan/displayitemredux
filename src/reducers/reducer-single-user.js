export default function (state=null, action) {
    switch (action.type) {
        case 'USER_SELECTED': {
            console.log('user selected log.....................', action.data);
            return action.payload;
        }
        
        default:
            return state;
    }
}
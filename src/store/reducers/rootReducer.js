const initState = {
    isLogin: false,
    isModal: false,
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'login':
            state = { ...state, isLogin: true };
            break;
        case 'logout':
            state = { ...state, isLogin: false };
            break;
        case 'open_modal':
            state = { ...state, isModal: true };
            break;
        case 'close_modal':
            state = { ...state, isModal: false };
            break;
        default:
            return state;
    }
    return state;
};

export default rootReducer;

const defaultDispatchs = (dispatch) => {
    return {
        onLogIn: () => dispatch({ type: 'login' }),
        onLogOut: () => dispatch({ type: 'logout' }),
        openModal: () => {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '8px';
            dispatch({ type: 'open_modal' });
        },
        closeModal: () => dispatch({ type: 'close_modal' }),
        onFollow: (payload) => dispatch({ type: 'set-follow', payload }),
    };
};

export default defaultDispatchs;

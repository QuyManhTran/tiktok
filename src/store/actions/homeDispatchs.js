const homeDispatchs = (dispatch) => {
    return {
        onGlobalMute: (payload) => {
            dispatch({ type: 'set_mute', payload });
        },
        onGlobalVolume: (payload) => {
            dispatch({ type: 'set_volume', payload });
        },
        onGlobalPrevValume: (payload) => {
            dispatch({ type: 'set_prev_volume', payload });
        },
    };
};

export default homeDispatchs;

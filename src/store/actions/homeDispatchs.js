const homeDispatchs = (dispatch) => {
    return {
        onGlobalMute: (payload) => {
            dispatch({ type: 'set_mute', payload });
        },
        onGlobalVolume: (payload) => {
            dispatch({ type: 'set_volume', payload });
        },
        onGlobalPrevVolume: (payload) => {
            dispatch({ type: 'set_prev_volume', payload });
        },
        setData: (payload) => {
            dispatch({ type: 'set_home_data', payload });
        },
        setPage: (payload) => {
            dispatch({ type: 'set_page', payload });
        },
        setCurrentVideo: (payload) => {
            dispatch({ type: 'set_current_video', payload });
        },
    };
};

export default homeDispatchs;

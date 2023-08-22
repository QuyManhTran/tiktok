const initState = {
    isAutoMute: true,
    syncVolume: 0,
    prevSyncVolume: 1,
    isDefaultOutOfScreen: false,
};

const videoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'set_mute':
            state = { ...state, isAutoMute: action.payload };
            break;
        case 'set_volume':
            state = { ...state, syncVolume: action.payload };
            break;
        case 'set_prev_volume':
            state = { ...state, prevSyncVolume: action.payload };
            break;
        case 'open_modal':
            console.log('oke roi');
            break;
        default:
            return state;
    }
    return state;
};

export default videoReducer;

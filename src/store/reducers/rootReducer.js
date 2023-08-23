const TIKTOK_LOCAL_STORAGE = 'TikTok';
const dataLocalStorage = JSON.parse(localStorage.getItem(TIKTOK_LOCAL_STORAGE));
const current = {
    ...dataLocalStorage,
    isModal: false,
    isAutoMute: true,
    isDefaultOutOfScreen: false,
    prevSyncVolume: dataLocalStorage.syncVolume === 0 ? 1 : dataLocalStorage.syncVolume,
    syncVolume: 0,
};
const defaultInit = {
    isLogin: false,
    isModal: false,
    isAutoMute: true,
    syncVolume: 0,
    prevSyncVolume: 1,
    isDefaultOutOfScreen: false,
};
const initState = dataLocalStorage ? current : defaultInit;

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'login':
            state = { ...state, isLogin: true };
            localStorage.setItem(TIKTOK_LOCAL_STORAGE, JSON.stringify(state));
            break;
        case 'logout':
            state = { ...state, isLogin: false };
            localStorage.setItem(TIKTOK_LOCAL_STORAGE, JSON.stringify(state));
            break;
        case 'open_modal':
            state = { ...state, isModal: true };
            localStorage.setItem(TIKTOK_LOCAL_STORAGE, JSON.stringify(state));
            break;
        case 'close_modal':
            state = { ...state, isModal: false };
            localStorage.setItem(TIKTOK_LOCAL_STORAGE, JSON.stringify(state));
            break;
        case 'set_mute':
            state = { ...state, isAutoMute: action.payload };
            break;
        case 'set_volume':
            state = { ...state, syncVolume: action.payload };
            localStorage.setItem(TIKTOK_LOCAL_STORAGE, JSON.stringify(state));
            break;
        case 'set_prev_volume':
            state = { ...state, prevSyncVolume: action.payload };
            localStorage.setItem(TIKTOK_LOCAL_STORAGE, JSON.stringify(state));
            break;
        default:
            return state;
    }
    return state;
};

export default rootReducer;

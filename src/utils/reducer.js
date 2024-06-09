import { reducerCases } from "./constants";

export const initialState = {
    token: null,
    playlists: [],
    user: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case reducerCases.SET_TOKEN:
            {
                return {
                    ...state,
                    token: action.token
                };
            }
        case reducerCases.SET_PLAYLISTS:
            {
                return {
                    ...state,
                    playlists: action.playlists
                };
            }
        case reducerCases.SET_USER:
            {
                return {
                    ...state,
                    user: action.user
                };
            }
        default:
            return state;
    }
};

export default reducer;
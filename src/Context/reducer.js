import {
    CURRENT_DATA,
    DATA_TO_UPDATE,
    SET_DATA,
    SET_LOADING,
} from "./action.type";

export default function reducer(state, action) {
    switch (action.type) {
        case SET_DATA:
            return action.payload == null
                ? { ...state, allData: [] }
                : { ...state, allData: action.payload };
        case SET_LOADING:
            return { ...state, loading: action.payload };
        case DATA_TO_UPDATE:
            return;
        case CURRENT_DATA:
            return;
        default:
            return;
    }
}

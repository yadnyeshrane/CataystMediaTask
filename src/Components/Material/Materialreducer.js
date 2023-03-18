import {
    FETCH_MATERIAL_SUCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_REQUEST,
} from "../../HSconstant";
const initalData = {
    loading: false,
    data: [],
    error: "",
};

const MaterialReducer = (state = initalData, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_MATERIAL_SUCESS:
            return {
                loading: false,
                data: action.payload,
                error: "",
            };
        case FETCH_PRODUCTS_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload,
            };

        default:
            return state;
    }
};

export default MaterialReducer;

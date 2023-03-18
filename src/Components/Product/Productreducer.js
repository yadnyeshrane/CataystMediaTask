import {
    ADDtOCART_SUCESS,
    FETCH_FEATURED_PRODUCTS_SUCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCESS,
    FILTER_MATERIAL_PRODUCT,
} from "../../HSconstant";
const initalData = {
    loading: false,
    data: [],
    featuredproduct: [],
    error: "",
    carctcount: 0,
    filteredProduct: [],
};
const Productreducer = (state = initalData, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_PRODUCTS_SUCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: "",
            };

        case ADDtOCART_SUCESS:
            return { ...state, carctcount: state.carctcount + 1 };

        case FETCH_FEATURED_PRODUCTS_SUCESS:
            return {
                ...state,
                loading: false,
                error: "",
                featuredproduct: state.data.filter((ai) =>
                    action.payload.some((datas) => datas.productId === ai.id)
                ),
            };
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                featuredproduct: [],
                error: action.payload,
            };

        case FILTER_MATERIAL_PRODUCT:
            return {
                ...state,
                filteredProduct: state.data.filter(
                    (productData) => productData.materialId === action.payload
                ),
            };
        default:
            return state;
    }
};

export default Productreducer;

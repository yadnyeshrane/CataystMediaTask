import axios from "axios";
import {
    ADDtOCART_SUCESS,
    FETCH_FEATURED_PRODUCTS_SUCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCESS,
    FILTER_MATERIAL_PRODUCT,
    token,
    URL,
} from "../../HSconstant";

export const fetchuserRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST,
    };
};

export const addtocart = (cartcount) => {
    return {
        type: ADDtOCART_SUCESS,
        payload: cartcount,
    };
};
export const fethuserSucess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCESS,
        payload: products,
    };
};
export const fethfeaturedProduct = (product) => {
    return {
        type: FETCH_FEATURED_PRODUCTS_SUCESS,
        payload: product,
    };
};

export const fetchuserFialure = (err) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: err,
    };
};
export const filterMaterialProduct = (id) => {
    return {
        type: FILTER_MATERIAL_PRODUCT,
        payload: id,
    };
};
export const fetchProductList = () => {
    return (dispatch) => {
        const header = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
        dispatch(fetchuserRequest);
        axios
            .get(`${URL}/products`, { headers: header })
            .then((response) => {
                const productsData = response.data.products;
                dispatch(fethuserSucess(productsData));
            })
            .catch((err) => {
                dispatch(fetchuserFialure(err.message));
            });
    };
};
export const fetchFeaturedProductList = () => {
    return (dispatch) => {
        const header = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
        dispatch(fetchuserRequest);
        axios
            .get(`${URL}/featured`, { headers: header })
            .then((response) => {
                const productsData = response.data.featured;
                dispatch(fethfeaturedProduct(productsData));
            })
            .catch((err) => {
                dispatch(fetchuserFialure(err.message));
            });
    };
};

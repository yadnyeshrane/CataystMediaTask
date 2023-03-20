import axios from "axios";
import { FETCH_COLOR_SUCESS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, token, URL } from "../../HSconstant";
const fecthColorRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST,
    };
};
 export const fethuserColorSucess = (data) => {
    
    return {
        type: FETCH_COLOR_SUCESS,
        payload: data,
    };
};
export  const fetchColorFialure = (err) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: err,
    };
};
export const fetchColorList = () => {
    return (dispatch) => {
        const header = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
        dispatch(fecthColorRequest);
        axios
            .get(`${URL}/colors`, { headers: header })
            .then((response) => {
                const Colorproduct = response.data.colors;
                dispatch(fethuserColorSucess(Colorproduct));
            })
            .catch((err) => {
                dispatch(fetchColorFialure(err.message));
            });
    };
};
import axios from "axios";
import { FETCH_MATERIAL_SUCESS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, token, URL } from "../../HSconstant";
const fecthMaterialRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST,
    };
};
 export const fethuserMaterialSucess = (data) => {
    
    return {
        type: FETCH_MATERIAL_SUCESS,
        payload: data,
    };
};
export  const fetchMaterialFialure = (err) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: err,
    };
};
export const fetchMaterialList = () => {
    return (dispatch) => {
        const header = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
        dispatch(fecthMaterialRequest);
        axios
            .get(`${URL}/material`, { headers: header })
            .then((response) => {
                const materialproduct = response.data.material;
                dispatch(fethuserMaterialSucess(materialproduct));
            })
            .catch((err) => {
                dispatch(fetchMaterialFialure(err.message));
            });
    };
};
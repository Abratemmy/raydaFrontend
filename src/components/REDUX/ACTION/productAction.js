import * as api from "../../API/index";
import { GETPRODUCT } from "../CONSTANT/actionTypes";



export const getAllProduct = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProducts();
        dispatch({ type: GETPRODUCT, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

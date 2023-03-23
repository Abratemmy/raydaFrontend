import { GETPRODUCT, DELETEPRODUCT, UPDATEPRODUCT, CREATEPRODUCT } from "../CONSTANT/actionTypes";

const initialState = { items: [] }
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETPRODUCT:
            return action.payload;
        case CREATEPRODUCT:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATEPRODUCT:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETEPRODUCT:
            return {
                items: state.items.filter((item) =>
                    item._id !== action.payload
                )
            };
        default:
            return state;
    }
}
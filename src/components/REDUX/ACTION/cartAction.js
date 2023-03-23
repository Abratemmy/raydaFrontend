import { ADD_TO_CART } from "../CONSTANT/actionTypes";
import axios from "axios"
import { useSelector } from "react-redux"

export const addItemToCart = (title, cartData) => async (dispatch) => {
    const { data } = await axios.get(`https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b/${title}`)
    console.log("data", data)
    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data?.data?.title,
            name: data?.data?.title,
            image: data?.data?.image,
            bid: data?.data?.bid,
            // quantity
        }
    })


    localStorage.setItem('cartItems', JSON.stringify(cartData.cartItems))
    console.log("state", cartData)
}

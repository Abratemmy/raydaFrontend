import axios from "axios"

const PRODUCTAPI = axios.create({ baseURL: 'https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b' })


export const fetchProducts = () => PRODUCTAPI.get('');
import { Cart } from "./cart";



//ONLY ONE CART FOR EACH CUSTOMER
export let CARTS: Cart[] = [
  { id: 0, cust_id: 0, f_id_list:[] },
  { id: 1, cust_id: 1, f_id_list:[] },
  { id: 2, cust_id: 2, f_id_list:[] }

];
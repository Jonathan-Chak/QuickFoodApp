import { Item } from "./item";

export interface Cart {
    id: number;
    cust_id:number;
    f_id_list:number[];
}

//ONLY ONE CART FOR EACH CUSTOMER
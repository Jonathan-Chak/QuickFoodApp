import { ITEMS } from "./mock-items";

export interface Order {
    id: number;
    c_id:number;
    f_id_list:number[];
    total:number;
}
export function CalcTotal(order:Order)
{
    order.total = 0;
      for(let ite = 0; ite < order.f_id_list.length; ite++)// for each Item in Item Id List
      {
        for(let mIte = 0; mIte < ITEMS.length ; mIte++) //loop through all existing menu items
        {
          if(ITEMS[mIte].id == order.f_id_list[ite])// if ID matches
          {
            order.total += ITEMS[mIte].price;
          }
        }
      }
      order.total.toFixed(2);
}
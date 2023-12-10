import { Component } from '@angular/core';
import { CommonModule,NgFor } from '@angular/common';
import { Order,CalcTotal } from '../order';
import  { ORDERS } from '../mock-orders';
import { ITEMS } from '../mock-items';
import { getLoggedInUsername,getLoggedInId } from '../AuthService';

@Component({
  selector: 'app-order-records',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './order-records.component.html',
  styleUrl: './order-records.component.css'
})
export class OrderRecordsComponent {

  cust_id = Number(getLoggedInId());
  
  filtered_order_list:Order[] = [] //orders belonging to this cust_id
  filtered_order_names:string[][] = []// food names instead of food id
 
  constructor()
  {
    for(let i = 0; i < ORDERS.length; i++)
    {
      if(ORDERS[i].c_id == this.cust_id)
      {
        CalcTotal(ORDERS[i]);
        this.filtered_order_list.push(ORDERS[i]);
      }
    }


    //find name instead of ID and push to seperate array
    for(let ord = 0; ord < this.filtered_order_list.length; ord++)//for each Order in Order List
    {
      let arr = [];
      for(let ite = 0; ite < this.filtered_order_list[ord].f_id_list.length; ite++)// for each Item in Item Id List
      {
        let nameToAdd='';
        for(let mIte = 0; mIte < ITEMS.length ; mIte++) //loop through all existing menu items
        {
          if(ITEMS[mIte].id == this.filtered_order_list[ord].f_id_list[ite])// if ID matches
          {
            nameToAdd = ITEMS[mIte].name+" $"+ ITEMS[mIte].price;
          }
        }
        arr.push(nameToAdd);
      }
      this.filtered_order_names.push(arr);
    }
  }


}

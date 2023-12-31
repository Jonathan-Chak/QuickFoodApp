import { Component,Input } from '@angular/core';
import { CommonModule,NgFor,NgSwitch } from '@angular/common';
import { Cart } from '../cart';
import { CARTS } from '../mock-carts';
import { getLoggedInUsername,getLoggedInId } from '../AuthService';
import { USERS } from '../mock-user';
import { ITEMS } from '../mock-items';
import { Item } from '../item';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})


export class CartComponent {
  userId:number = Number(getLoggedInId());
  userCart:Cart = CARTS[this.userId];
  cartItemNames:string[]=[];
  total:number =0;
  menuItems = ITEMS;

  constructor()
  {
    //find name instead of ID and push to seperate array
      for(let ite = 0; ite < this.userCart.f_id_list.length; ite++)// for each Item in Item Id List
      {
        let nameToAdd='';
        for(let mIte = 0; mIte < ITEMS.length ; mIte++) //loop through all existing menu items
        {
          if(ITEMS[mIte].id == this.userCart.f_id_list[ite])// if ID matches
          {
            nameToAdd = ITEMS[mIte].name;
          }
        }
        this.cartItemNames.push(nameToAdd);
      }
      this.CalcTotal();
  }
  public RemoveItem(item:string)
  {
        const index = this.cartItemNames.indexOf(item, 0);
        if (index > -1) {
          this.cartItemNames.splice(index, 1);
        }
        let idToDel:number = -1;
        for(let i = 0; i < ITEMS.length;i++)
        {
          if(ITEMS[i].name == item)
          {
            idToDel = ITEMS[i].id;
          }
        }
        const index1 = this.userCart.f_id_list.indexOf(idToDel, 0);
        if (index1 > -1) {
          this.userCart.f_id_list.splice(index1, 1);
        }
        this.CalcTotal();
  }
  public RemoveAll()
  {
    this.userCart.f_id_list = [];
    this.cartItemNames = [];
    this.CalcTotal();
  }
  checkout(): void {
    
    console.log('Checkout clicked!');
    
  }

  CalcTotal()
  {
    this.total = 0;
      for(let ite = 0; ite < this.userCart.f_id_list.length; ite++)// for each Item in Item Id List
      {
        for(let mIte = 0; mIte < ITEMS.length ; mIte++) //loop through all existing menu items
        {
          if(ITEMS[mIte].id == this.userCart.f_id_list[ite])// if ID matches
          {
            this.total += ITEMS[mIte].price;
          }
        }
      }
      this.total.toFixed(2);
  }
}
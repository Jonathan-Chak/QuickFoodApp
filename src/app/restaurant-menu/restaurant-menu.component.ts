import { Component } from '@angular/core';
import { CommonModule,NgFor } from '@angular/common';
import { getMenuNumber,setMenuNumber } from '../menunum';
import { RESTAURANTS } from '../mock-restaurants';
import { Restaurant } from '../restaurant';
import { ITEMS } from '../mock-items';
import { Item } from '../item';
import { CartComponent } from '../cart/cart.component'; 
import { CARTS } from '../mock-carts';
import { getLoggedInId } from '../AuthService';

@Component({
  selector: 'app-restaurant-menu',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './restaurant-menu.component.html',
  styleUrl: './restaurant-menu.component.css'
})

export class RestaurantMenuComponent {
  restaurants = RESTAURANTS;
  public localMenuNum = getMenuNumber();
  restaurantName = "";
  menuNames: string[] = [];
  menuPrices: number[] = [];
  menu: Item[] = [];


constructor()
{
  this.checkNumber();
    this.loadMenu();
}
  public checkNumber()
  {
    for(let i = 0; i < this.restaurants.length; i++)
    {
      if(this.restaurants[i].id == Number(this.localMenuNum))
      {
        this.restaurantName = this.restaurants[i].name;
      }
    }
  }
  public loadMenu()
  {
    this.menuNames = [];
    this.menuPrices = [];
    for(let i = 0; i < ITEMS.length; i++)
    {
      if(this.restaurantName == ITEMS[i].restaurant)
      {
        this.menuNames.push(ITEMS[i].name);
        this.menuPrices.push(ITEMS[i].price);
        this.menu.push(ITEMS[i]);
      }
    }
  }
  public AddItem(item:Item)
  {
    CARTS[Number(getLoggedInId())].f_id_list.push(item.id);
  }


}

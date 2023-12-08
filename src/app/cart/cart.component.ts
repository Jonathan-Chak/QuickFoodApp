import { Component,Input } from '@angular/core';
import { CommonModule,NgSwitch } from '@angular/common';
import { Cart } from '../cart';
import { CARTS } from '../mock-carts';
import { getCookieAuth } from '../AuthService';
import { USERS } from '../mock-user';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})


export class CartComponent {
  cartid = 1;
  cart = CARTS[this.cartid]
  username = getCookieAuth();

  constructor()
  {
    for(let i = 0; i < USERS.length; i++)
    {
      if(USERS[i].username == this.username)
      {
        this.cartid = USERS[i].id;
      }
    }
    this.cart = CARTS[this.cartid];
  }

  
}
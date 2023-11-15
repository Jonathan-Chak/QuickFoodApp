import { Component,Input } from '@angular/core';
import { CommonModule,NgSwitch } from '@angular/common';
import { Cart } from '../cart';
import { CARTS } from '../mock-carts';

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
  updateCart(){
    if(this.cartid < 8){
      this.cartid = this.cartid +1;
    }
    else{
      this.cartid = 1;
    }
    this.cart = CARTS[this.cartid];
  }
}
import { Component } from '@angular/core';
import { CommonModule,NgFor } from '@angular/common';
import { Restaurant } from '../restaurant';
import { RESTAURANTS } from '../mock-restaurants';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { event } from 'jquery';
import { getMenuNumber,setMenuNumber } from '../menunum';


@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})


export class RestaurantListComponent {
  restaurants = RESTAURANTS;

  public goToMenu1()
  {
    setMenuNumber(1);
    window.location.href="/menu";
  }
  public goToMenu2()
  {
    setMenuNumber(2);
    window.location.href="/menu";
  }
  public goToMenu3()
  {
    setMenuNumber(3);
    window.location.href="/menu";
  }
  public goToMenu4()
  {
    setMenuNumber(4);
    window.location.href="/menu";
  }
  public goToMenu5()
  {
    setMenuNumber(5);
    window.location.href="/menu";
  }
  
}

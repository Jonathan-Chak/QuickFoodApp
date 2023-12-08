import { Component } from '@angular/core';
import { CommonModule,NgFor } from '@angular/common';
import { Restaurant } from '../restaurant';
import { RESTAURANTS } from '../mock-restaurants';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent {
  restaurants = RESTAURANTS;

  public goToMenu(event: Event): void {
    console.log(event.target);
    
  }
}

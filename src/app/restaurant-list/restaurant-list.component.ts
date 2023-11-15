import { Component } from '@angular/core';
import { CommonModule,NgFor } from '@angular/common';
import { Restaurant } from '../restaurant';
import { RESTAURANTS } from '../mock-restaurants';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent {
  restaurants = RESTAURANTS;
}

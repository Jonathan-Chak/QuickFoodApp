import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { routes } from './app.routes';
import { CartComponent } from './cart/cart.component';

@Component({
  standalone: true,
  imports:[RouterOutlet,RouterLink],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuickFood';
}

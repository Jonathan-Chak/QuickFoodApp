import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { routes } from './app.routes';
import { CartComponent } from './cart/cart.component';
import { getLoggedInUsername, getLoggedInRole } from './AuthService';

@Component({
  standalone: true,
  imports:[RouterOutlet,RouterLink,CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuickFood';
  loggedIn = false;
  loggedInRole ="";
  loggedInName ="";
  constructor()
  {
    if(getLoggedInUsername() != "")
    {
      this.loggedIn = true;
      this.loggedInRole = getLoggedInRole();
      this.loggedInName = getLoggedInUsername();
    }
  }

  logout()
  {
    document.cookie = "LoggedInAs=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"; //empty the auth field
    window.location.href = "/restaurants";//redirects

  }
}

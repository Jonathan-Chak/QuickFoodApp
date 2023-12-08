import { Routes } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { CartComponent } from './cart/cart.component';
import { Component } from '@angular/core';
import { OrderRecordsComponent } from './order-records/order-records.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';

export const routes: Routes = [
    {path: 'restaurants', component: RestaurantListComponent},
    {path: 'cart', component: CartComponent},
    {path: 'records', component: OrderRecordsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'tracking', component: OrderTrackingComponent},
    {path: 'menu', component:RestaurantMenuComponent}
];

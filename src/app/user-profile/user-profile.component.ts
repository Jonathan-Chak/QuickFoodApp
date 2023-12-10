import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USERS } from '../mock-user';
import { getLoggedInUsername, getLoggedInRole,getLocalPassword,getLocalUsername,getLoggedInId } from '../AuthService';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  loggedInName = "";
  loggedInRole = "";
  password="";
  userid = 99;
  
  constructor()
  {
    if(getLoggedInUsername() != "")//if logged in
    {
      this.loggedInRole = getLoggedInRole();
      this.loggedInName = getLoggedInUsername();

      if(this.loggedInName == getLocalUsername())
      {
        this.userid = Number(getLoggedInId());
        this.password = getLocalPassword();
      }
      else
      {
        for(let i = 0; i < USERS.length; i++)
        {
          if(this.loggedInName == USERS[i].username)
          {
            this.userid = USERS[i].id;
            this.password = USERS[i].password;
          }
        }
      }
    }
  }
}

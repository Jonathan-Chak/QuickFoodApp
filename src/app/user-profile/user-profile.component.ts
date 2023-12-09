import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USERS } from '../mock-user';
import { getCookieAuth, getCookieRole,getCookiePassword,getCookieUsername } from '../AuthService';

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
    if(getCookieAuth() != "")//if logged in
    {
      this.loggedInRole = getCookieRole();
      this.loggedInName = getCookieAuth();

      if(this.loggedInName == getCookieUsername())
    {
      this.userid = -1;
    }
    else{
      for(let i = 0; i < USERS.length; i++)
      {
        if(this.loggedInName == USERS[i].username)
          {
            this.userid = USERS[i].id;
            this.password = USERS[i].password;
          }
      }
      //gets local password
      this.password = getCookiePassword();
    }

      
    }
  }
}

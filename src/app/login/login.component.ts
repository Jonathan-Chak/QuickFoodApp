import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USERS } from '../mock-user';
import { getCookieAuth } from '../AuthService';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = "";
  password = "";
  report = "";

  public onUsernameChange(event: Event): void {
    console.log(event.target);
    const value = (event.target as any).value;
    this.username = value;
  }
  public onPasswordChange(event: Event): void {
    console.log(event.target);
    const value = (event.target as any).value;
    this.password = value;
  }

  //Read Cookie


  public getCookieUsername() {
    let name = "localUsername" + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  public getCookiePassword() {
    let name = "localPassword" + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  public onSubmit(){
    let hit = false; //check if there are any hits
    let userId = -1;

    
    
    if(this.username == this.getCookieUsername() 
    && this.password == this.getCookiePassword())
    {
      hit = true;
      document.cookie = "LoggedInAs="+this.username;
    }

    for(let i = 0; i < USERS.length; i++)
    {
      if(this.username == USERS[i].username 
        && this.password == USERS[i].password)
        {
          hit = true;
          document.cookie = "LoggedInAs="+this.username; //Writes to cookie Auth
        }
    }
    if(hit)
    {
      this.report = "Log In Successful as user: " + getCookieAuth();
        setTimeout(myURL, 1000);//wait 1 second
        function myURL() {
          window.location.href = "/restaurants";//redirects
        }
     }
      
    else
    {
      this.report = "Log In Failed";
    }
  }

  public onReset()
  {
    this.username = "";
    this.password = "";
    this.report = "";
  }
}

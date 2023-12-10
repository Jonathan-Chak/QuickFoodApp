import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USERS } from '../mock-user';
import { getLoggedInUsername,getLoggedInRole,getLocalUsername,getLocalPassword,getLocalRole } from '../AuthService';

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

  

  public onSubmit(){
    let hit = false; //check if there are any hits
    let userId = -1;

    if(this.username == getLocalUsername() 
    && this.password == getLocalPassword())
    {
      hit = true;
      document.cookie = "LoggedInAs="+this.username;// Local
      document.cookie = "LoggedInRole="+getLocalRole();
      document.cookie = "LoggedInId="+"-1";//set local id to -1
    }

    for(let i = 0; i < USERS.length; i++)
    {
      if(this.username == USERS[i].username 
        && this.password == USERS[i].password)
        {
          hit = true;
          document.cookie = "LoggedInAs="+this.username; // Mock
          document.cookie = "LoggedInRole="+USERS[i].role;
          document.cookie = "LoggedInId="+USERS[i].id;
        }
    }
    if(hit)
    {
      this.report = "Log In Successful as user: " + getLoggedInUsername();
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

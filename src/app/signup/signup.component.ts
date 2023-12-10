import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USERS } from '../mock-user';
import { getLocalUsername,getLocalPassword,getLoggedInUsername,getLoggedInRole } from '../AuthService';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username = "";
  password = "";
  phone = "_phonePlaceHolder_";
  email = "_emailPlaceHolder_";
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
  public onPhoneChange(event: Event): void {
    console.log(event.target);
    const value = (event.target as any).value;
    this.phone = value;
  }
  public onEmailChange(event: Event): void {
    console.log(event.target);
    const value = (event.target as any).value;
    this.email = value;
  }

  public onSubmit()
  {
    if(this.username !="" && this.password !="")//check if fields not empty
    {
      let hit = false;
      for(let i = 0; i < USERS.length; i++)
      {
        if(this.username == USERS[i].username)//check if name match mock-user list
          {
            hit = true;
          }
      }
      if(this.username !=getLocalUsername() && hit == false) //check if username is not repeated then literally replaces it
      {
        var date = new Date();
        date.setTime(date.getTime() + (2 * 24 * 60 * 60 * 1000));
        document.cookie = "localUsername="+this.username + "; expires=" + date;
        document.cookie = "localPassword="+this.password + "; expires=" + date;
        document.cookie = "localRole="+"user" + "; expires=" + date; //set role to user
        this.report = "Registered as " + this.username;
      }
      else
      {
        this.report = "Username taken";
      }

    }
    else
    {
      this.report = "Please fill in required fields"
    }

  }

  public onReset()
  {
    this.username = "";
    this.password = "";
    this.phone = "_phonePlaceHolder_";
    this.email = "_emailPlaceHolder_";
    this.report = "";
  }
}

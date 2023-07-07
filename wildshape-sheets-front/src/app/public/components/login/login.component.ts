import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public email : string = "";
  public password : string = "";

  constructor(public http : HttpClient, public router : Router){}

  login(username:string, password:string){
    if(this.email === "" || this.password === ""){
      console.log("incomplete login")
    } else {
      let loginDto = {
        email : this.email,
        password : this.password
      };
      this.http.post("https://localhost:7156/api/Authentication", loginDto).subscribe(token => {
        console.log("token: " + token);
        this.router.navigate(["/"]);
      });
    }
  }

}

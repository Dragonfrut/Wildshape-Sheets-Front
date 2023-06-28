import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public email: string = "";
  public username: string = "";
  public password: string = "";

  constructor(public http : HttpClient, public router : Router){}

  register(username:string, email:string, password:string){
    if(this.username === "" || this.email === "" || this.password === ""){
      console.log("incomplete form")
    } else {
      let newUser = {
        username : this.username,
        email : this.email,
        password : this.password
      };
      this.http.post("https://localhost:7156/api/User", newUser).subscribe(data => {
        console.log("data: " + data);
        this.router.navigate(['/']);

      });
    }


  }
}

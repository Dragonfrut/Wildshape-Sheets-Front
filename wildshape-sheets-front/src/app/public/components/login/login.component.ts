import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticatedResponse } from 'src/Models/AuthenticatedResponse';
import { LoginModel } from 'src/Models/loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  invalidLogin: boolean | undefined
  credentials: LoginModel = {email:'', password:''}

  constructor(public http : HttpClient, public router : Router){}

  login = (form: NgForm) => {
    if(form.valid) {
      this.http.post<AuthenticatedResponse>("https://localhost:7156/api/Authentication", this.credentials, {
        headers: new HttpHeaders({"Content-Type": "application/json"})
      })
      .subscribe({
        next: (response: AuthenticatedResponse) => {
          const token = response.token;
          localStorage.setItem("jwt", token);
          this.invalidLogin = false;
          this.router.navigate(["/"]);
        },
        error: (err: HttpErrorResponse) => this.invalidLogin = true
      })
    }
  }

}

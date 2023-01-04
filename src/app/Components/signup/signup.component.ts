import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private auth: AuthService, public router: Router) {}

  errorMsg = '';

  ngOnInit(): void {}
  onCreate(newUser: NgForm) {
    console.log(newUser.value);
    const email = newUser.value.email;
    const password = newUser.value.password;
    const displayName = newUser.value.displayName
    console.log(email + ' ' + password);
    this.auth
      .signup(email, password,displayName)
      .then((res) => {
        this.router.navigate(['login']);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        this.errorMsg = errorMessage.slice(10,-1);
      });
  }
}

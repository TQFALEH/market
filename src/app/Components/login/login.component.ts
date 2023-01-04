import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMsg = '';

  constructor(private auth: AuthService,public router: Router) {}

  ngOnInit(): void {}
  onSignIn(User: NgForm) {
    console.log(User.value);
    console.log(User.value);
    const email = User.value.email;
    const password = User.value.password;
    console.log(email + ' ' + password);
    this.auth.signin(email, password).then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      this.router.navigate(['']);
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      this.errorMsg = errorMessage;
    });
  }
}

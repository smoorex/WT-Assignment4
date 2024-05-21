// src/app/signup/signup.component.ts
import { Component } from '@angular/core';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    username: '',
    password: '',
    email: ''
  };

  constructor(private signupService: SignupService) {}

  onSubmit(): void {
    this.signupService.signup(this.user).subscribe(
      response => {
        console.log('User signed up successfully', response);
        // Handle success (e.g., redirect to login page or show success message)
      },
      error => {
        console.error('Error during signup', error);
        // Handle error (e.g., show error message)
      }
    );
  }
}

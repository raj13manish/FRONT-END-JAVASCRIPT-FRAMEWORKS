import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onLogin() {
    // Basic login validation (without redirection)
    if (this.username === 'admin' && this.password === 'admin') {
      alert('Login successful');
    } else {
      alert('Invalid credentials');
    }
  }
}

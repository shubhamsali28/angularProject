import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private router: Router) { }

  // to check if the user is logged in
  checkLogin() {
    return localStorage.getItem('isLoggedIn');
  }

  login(authForm) {
    if (authForm.username === 'admin' && authForm.password === 'admin') {
      this.router.navigate(['/welcome']);
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    } else {
      alert('Invalid credentials');
      return false;
    }
  }
}

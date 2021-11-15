// Firebase
// email: user@mail.com
// password: 123456

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  login(user) {
    return this.httpClient.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
      user)
    .pipe(
      tap(this.setToken)
    );
  }

  private setToken(res) {
    if (res) {
      const expDate = new Date(new Date().getTime() + +res.expiresIn * 1000);

      localStorage.setItem('exp-token', expDate.toString());
      localStorage.setItem('token', res.idToken);
    } else {
      localStorage.clear();
    }
  }

  logout() {
    this.setToken(null);
  }

  get token() {
    const expDate = new Date(
      localStorage.getItem('exp-token')
    );

    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('token');
  }

  isAuth() {
    return !!this.token;
  }
}

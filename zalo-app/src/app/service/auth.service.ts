import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
    const savedAuth = localStorage.getItem('isAuth');
    if (savedAuth === 'true') {
      this.isAuth.next(true);
    }
  }

  isAuth = new BehaviorSubject(false);

  login(username: string, password: string) {
    // API here
    if (username === 'admin' && password === '123') {
      localStorage.setItem('isAuth', 'true');
      this.isAuth.next(true);
      console.log(this.isAuth.asObservable());
    } else {
      localStorage.setItem('isAuth', 'false');
      this.isAuth.next(false);
    }
    return this.isAuth.asObservable();
  }

  logout() {
    // API & setCookie null here
  }
}

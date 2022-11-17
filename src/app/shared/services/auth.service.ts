import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private httpClient: HttpClient) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const user = currentUser ? new User(currentUser) : null;
    this.currentUserSubject = new BehaviorSubject<User>(user);
     this.currentUser = this.currentUserSubject.asObservable();
   }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  isLogin() {
    const user = localStorage.getItem('access_token');
    return !(user === null);
  }
  
   signup(userObj): Observable<User> {
    return this.httpClient.post<User>(`${environment.BASE_USERS_URL}Accounts/signup`, userObj);
  }

  login(email: string, password: string): Observable<User>{
    return this.httpClient.post<User>(`${environment.BASE_USERS_URL}Accounts/login`, {email, password} ).pipe(
      map(user => {
         if(user && user.jwtToken) {
          localStorage.setItem('currentUser', JSON.stringify(user));
         }
         return user;
      })
    );
  }

  verifyToken(userObj): Observable<User>{
    return this.httpClient.post<User>(`${environment.BASE_USERS_URL}Accounts/verify-email`, userObj);
  }

  forgotPassword(userObj): Observable<User>{
    return this.httpClient.post<User>(`${environment.BASE_USERS_URL}Accounts/forgot-password`, userObj);
  }

  resetPassword(userObj): Observable<User>{
    return this.httpClient.post<User>(`${environment.BASE_USERS_URL}Accounts/reset-password`, userObj);
  }
  
  countryList() {
    return this.httpClient.get(`${environment.BASE_URL}v1/CountryIndex`);
  }

  getToken() {
   return localStorage.getItem('access_token');
  }

  getUserProfile(id){
    return this.httpClient.get<User>(`${environment.BASE_USERS_URL}Accounts/${id}`);
  }

  updateUserProfile(id, userObj): Observable<User>{
    return this.httpClient.put<User>(`${environment.BASE_USERS_URL}Accounts/${id}`, userObj);
  }
  
  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('currentUser');
    localStorage.clear();
    this.currentUserSubject.next(null);
  }
}

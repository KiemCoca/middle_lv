import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    public httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
        })
    };

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        let data = {
            Username: username,
            Password: password
        }

        return this.http.post<any>(`https://foodfunday.com.vn/api/login/CheckLogin`, data, this.httpOptions)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                console.log(user);
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }
    
    loginAdmin(username: string, password: string) {
        let data = {
            Username: username,
            Password: password
        }

        return this.http.post<any>(`https://foodfunday.com.vn/api/login/CheckAdminLogin`, data, this.httpOptions)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                console.log(user);
                debugger
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    register(user: User) {
        return this.http.post<any>(`https://foodfunday.com.vn/api/users/PostUser`, user, this.httpOptions)
            .pipe(map(user => {
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user';
import { map } from 'rxjs/operators';
declare var $: any;

@Injectable({ providedIn: 'root' })
export class UserService {
    public httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
        })
    };
    
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/users`);
    }

    getById(id: number) {
        return this.http.get(`/users/` + id);
    }

    register(user: User) {
        return this.http.post(`/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`/users/` + id);
    }

    changecolor(username: string, color: string){
        let data = {
            Username: username,
            Color: color
        }
        return this.http.post<any>(`https://foodfunday.com.vn/api/users/ChangeThameColor`, data, this.httpOptions)
        .pipe(map(user => {
            var div = $("#changeable-colors").attr('href', "./assets/css/colors/" + color + ".css");
            return user;
        }));
    }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user';
import { map } from 'rxjs/operators';
declare var $: any;

@Injectable({ providedIn: 'root' })
export class SummaryService {
    public httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
        })
    };
    
    constructor(private http: HttpClient) { }

    getAboutUs(){
        return this.http.get<any>(`https://foodfunday.com.vn/api/AboutUs/GetAboutUs`, this.httpOptions)
        .pipe(map(data => {
            return data;
        }));
    }

    getSpecialMenu(){
        return this.http.get<any>(`https://foodfunday.com.vn/api/Products/GetSpecialProducts`, this.httpOptions)
        .pipe(map(data => {
            return data;
        }));
    }
}
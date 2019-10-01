import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user';
import { map } from 'rxjs/operators';
declare var $: any;

@Injectable({ providedIn: 'root' })
export class SummaryService {

    private urlApi = "https://foodfunday.com.vn/api";
    public httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
        })
    };
    
    constructor(private http: HttpClient) { }

    getAboutUs(){
        return this.http.get<any>(this.urlApi + `/AboutUs/GetAboutUs`, this.httpOptions)
        .pipe(map(data => {
            return data;
        }));
    }

    getSpecialMenu(){
        return this.http.get<any>(this.urlApi + `/Products/GetSpecialProducts`, this.httpOptions)
        .pipe(map(data => {
            return data;
        }));
    }

    getMenuTitle(){
        return this.http.get<any>(this.urlApi + `/Products/GetMenuCategory`, this.httpOptions)
        .pipe(map(data => {
            return data;
        }));
    }

    getMenuCategory(cateName){
        return this.http.get<any>(this.urlApi + `/Products/GetMenuForCategory?categoryName=` + cateName, this.httpOptions)
        .pipe(map(data => {
            return data;
        }));
    }

    getTeams(){
        return this.http.get<any>(this.urlApi + `/teams/GetTeams`, this.httpOptions)
        .pipe(map(data => {
            return data;
        }));
    }
}
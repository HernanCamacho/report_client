import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserEmployee } from '../models/user_employee';
import { GLOBAL } from './GLOBAL';

@Injectable()
export class UserEmpService{
    public url: string;

	constructor(public _http: HttpClient){
		this.url = GLOBAL.url;
	}

    saveUserEmp(userEmp: UserEmployee): Observable<any>{
        let params = JSON.stringify(userEmp);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'users-employees', params, {headers: headers});
    }

    // getDeparments():Observable<any>{
    //     let headers = new HttpHeaders().set('Content-Type', 'application/json');
	// 	return this._http.get(this.url+'departments', {headers: headers});
    // }

}

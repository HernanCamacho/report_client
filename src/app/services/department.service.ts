import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Deparment } from '../models/deparment';
import { GLOBAL } from './GLOBAL';

@Injectable()
export class DeparmentService{
    public url: string;

	constructor(public _http: HttpClient){
		this.url = GLOBAL.url;
	}

    // saveReport(report: Report): Observable<any>{
    //     let params = JSON.stringify(report);
    //     let headers = new HttpHeaders().set('Content-Type', 'application/json');
    //
    //     return this._http.post(this.url+'reports', params, {headers: headers});
    // }

    getDeparments():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.get(this.url+'departments', {headers: headers});
    }

}

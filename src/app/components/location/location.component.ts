import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { Report } from '../../models/report';

import { ReportService } from '../../services/report.service';

import { GLOBAL } from '../../services/GLOBAL';

@Component({
    selector: 'location',
    templateUrl: './location.component.html',
    providers: [ReportService]
})

export class LocationComponent implements OnInit{
    public title: string;
    public latitude: number;
    public longitude: number;
    public report: Report;
    public url: string;
    public response: Report[];
    public success: string;
    public rp_length: number;
    public department: string;

    constructor(
        private _route:  ActivatedRoute,
		private _router: Router,
        private _reportService: ReportService
    ){
        this.title = 'Mapa';
        this.success = 'stand-by';
        this.report = new Report("","","","","","");
        this.url = GLOBAL.url;
    }

    ngOnInit(){
        this.getUserLocation();
        this.getReports();
    }

    getUserLocation(){
        if(navigator){
            navigator.geolocation.getCurrentPosition( pos =>{
                console.log(pos);
                this.longitude = +pos.coords.longitude;
                this.latitude = +pos.coords.latitude;
                console.log('longitude: ' + this.longitude + ' latitude: ' + this.latitude);
            });
        }else{
            this.title = 'Tu navegador no soporta Google Maps :(';
        }
    }

    getLocation(event){
        // this.latitude = event.coords.lat;
        // this.longitude = event.coords.lng;
        alert('Solo puedes añadir Reports en tu localización actual');
    }

    getReports(){
        this._reportService.getReports().subscribe( response =>{
            if(!response){
                this.success = 'fail';
            }else{
                console.log(response);
                this.response = response;
            }
        },error => {
			var errorMessage = <any>error;
			console.log(errorMessage);
			if(errorMessage != null){
				this.success = 'error';
			}
		});
    }

    onSubmit(form){
        console.log('si entro');
        this.report.latitude = this.latitude;
        this.report.longitude = this.longitude;
        this.report.department_id = 1;
        this.report.user_id = 1;
        console.log(this.report.latitude);
        this._reportService.saveReport(this.report).subscribe(
            response =>{
                if(response.id){
                    form.reset();
                    this.refresh();
                }
            }, error =>{
                console.log(<any>error);
            }
        );
    }

    refresh(){
        this.getReports();
    }

    // public filesToUpload: Array<File>;
    // fileChangeEvent(fileInput: any){
	// 	this.filesToUpload = <Array<File>>fileInput.target.files;
	// 	// console.log(this.filesToUpload);
	// }

}

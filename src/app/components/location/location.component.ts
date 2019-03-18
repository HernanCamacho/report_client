import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'location',
    templateUrl: './location.component.html'
})

export class LocationComponent implements OnInit{
    public title: string;
    public latitude: number;
    public longitude: number;

    constructor(){
        this.title = 'Mapa';
    }

    ngOnInit(){
        this.getUserLocation();
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
        this.latitude = event.coords.lat;
        this.longitude = event.coords.lng;
    }

}

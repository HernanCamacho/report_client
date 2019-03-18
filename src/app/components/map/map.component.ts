import { Component, OnInit, ViewChild } from '@angular/core';
import { Marcador } from '../../interfaces/map.interface';
import {} from '@types/googlemaps';

// services
import { MapService } from '../../services/map.service';
import { ReportService } from '../../services/report.service';

@Component({
    selector: 'map',
    templateUrl: './map.component.html',
    providers: [MapService, ReportService]
})

export class MapComponent implements OnInit{

    public title: string;
    public latitude: number;
    public longitude: number;
    public zoom: number;

    constructor(
        public _ms: MapService,
        public _reportService: ReportService
    ){
        this.title = 'Mapas';
        this.latitude = 19.110206;
        this.longitude = -104.363874;
        this.zoom = 12;
    }

    clickMapa(evento){

        let nuevoMarcador:Marcador ={
          lat:evento.coords.lat,
          lngt:evento.coords.lng,
          titulo:"Sin titulo",
          draggable:true
        }
        console.log(evento);
        this._ms.insertarMarcador(nuevoMarcador);
    }

    @ViewChild('gmap')
    gmapElement: any;
    map: google.maps.Map;
    isTracking = false;
    currentLat: any;
    currentLong: any;
    marker: google.maps.Marker;

    ngOnInit() {
        var mapProp = {
            center: new google.maps.LatLng(19.1102, -104.3638),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        this.findMe();
    }

    findMe() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.showPosition(position);
            });
        } else {
            alert("Geolocation no es soportada por este navegador");
        }
    }

    showPosition(position) {
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;

        let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.panTo(location);

        if(!this.marker) {
            this.marker = new google.maps.Marker({
                position: location,
                map: this.map,
                title: 'Got you!'
            });
        }else{
            this.marker.setPosition(location);
        }
    }

    saveReport(){
        alert('Reporte');
    }

}

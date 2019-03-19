import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{

    public title: string;

    constructor(){
        this.title = 'Genera un Report sobre incidencias en tu comunidad.';
    }

    ngOnInit(){
        console.log('HomeComponent initialized');
    }


}

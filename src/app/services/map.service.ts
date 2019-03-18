import { Marcador } from '../interfaces/map.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  marcadores:Marcador[]=[];

  constructor() {
    let nuevoMarcador:Marcador={
      lat: 19.110206,
      lngt: -104.363874,
      titulo:"Manzanillo, Colima",
      draggable:false
    }
    this.marcadores.push(nuevoMarcador);
   }
   insertarMarcador(marcador:Marcador){
    this.marcadores.push(marcador);
   }

}

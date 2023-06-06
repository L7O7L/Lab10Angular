import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendasService {

  markers: MarkerProperties[] = [

    { 
    
      position: { lat: -12.0441625, lng: -76.9554737},
      label: { color: 'black', text: 'Tienda N° 1', fontSize: '20px', fontWeight: 'bold' },
      title: 'Tienda 01',
      info: 'Ciudad de los Reyes'
  
    },

    { 
    
      position: { lat: -12.0331625, lng: -76.9554737},
      label: {color: 'black', text: 'Tienda N° 2', fontSize: '20px', fontWeight: 'bold'},
      title: 'Ciudad',
      info: 'Ciudad de los Reyes'
  
    },

    { 
    
      position: { lat: -12.0331625, lng: -76.9689937},
      label: {color: 'black', text: 'Tienda N° 3', fontSize: '20px', fontWeight: 'bold'},
      title: 'Ciudad',
      info: 'Ciudad de los Reyes'
  
    },

  ];

  constructor() { }

  getTiendas(): Observable<any> {
    return of(this.markers)
  }

  postTienda(marker: MarkerProperties): Observable<any>{

    return of(this.markers.push(marker))

  }

  putTienda(){



  }

}

interface MarkerProperties {

  position: {

    lat: number;
    lng: number;

  },
  label: {

    color: string;
    text: string;
    fontSize: string;
    fontWeight: string;

  },
  title: string;
  info: string;

};

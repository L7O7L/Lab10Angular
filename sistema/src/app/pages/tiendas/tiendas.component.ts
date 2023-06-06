import { Component, OnInit } from '@angular/core';
import { TiendasService } from 'src/app/services/tiendas.service';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})

// REALIZAR EDITAR ELIMIAR LISTAR HACIENDO USO DE LA LISTA markers GUARDAR ESTOS DATOS EN MONGODB

export class TiendasComponent implements OnInit {

  tiendas: [] = []

  constructor(private _tiendaService: TiendasService) {

  }

  ngOnInit(): void {
    this.getTiendas()
  }

  mapOptions: google.maps.MapOptions = {

    center: { lat: -12.03581, lng: -76.958392 },
    zoom: 14,
    mapTypeControl: false

  };

  getTiendasAddress(marker: MarkerProperties[]) {

    console.log(marker)

    const geocoder = new google.maps.Geocoder();
    const tiendas = []
    const distrito: string[] = [];
    const departamento: string[] = [];

    marker.forEach(result => {

      var prueba = geocoder.geocode({ location: result.position })

      prueba.then(function (query) {

        query.results.forEach(component => {

          if (component.types[0] == 'locality' && component.types[1] == 'political') {

            component.address_components.forEach(address => {

              if (address.types[0] == 'locality' && component.types[1] == 'political'){

                distrito.push(address.long_name);

              }

              if (address.types[0] == 'administrative_area_level_1' && component.types[1] == 'political'){

                departamento.push(address.long_name);

              }

            })

          }

        })

      })

    })
    
    tiendas.push(

      {

        

      }

    )

    console.log(departamento, distrito)

    return { departamento: departamento.sort(), 
    distrito: distrito.sort() }

  }

  tiendas_localidad: any[] = [ this.getTiendasAddress(this._tiendaService.markers) ];

  handleMapInitialized(map: google.maps.Map) {
    this._tiendaService.markers.forEach((marker: MarkerProperties) => {

      new google.maps.Marker({

        position: marker.position,
        label: marker.label,
        map,

      })

    });

    console.log(this.tiendas_localidad)

  }

  getTiendas() {

    this._tiendaService.getTiendas().subscribe(data => {
      console.log(data);
      this.tiendas = data;

    })

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
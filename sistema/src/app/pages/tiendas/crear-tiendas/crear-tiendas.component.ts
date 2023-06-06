import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TiendasService } from 'src/app/services/tiendas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-tiendas',
  templateUrl: './crear-tiendas.component.html',
  styleUrls: ['./crear-tiendas.component.css']
})
export class CrearTiendasComponent {

  tiendaForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _tiendaService: TiendasService){
    this.tiendaForm = this.fb.group({
        lng:  ['', Validators.required],
        lat: ['', Validators.required],
        tittle: ['', Validators.required],
        text: ['', Validators.required],
        info:    ['', Validators.required]
    })
  }

  agregarTienda(){

    const TIENDA = {
      position: {

        lat: this.tiendaForm.get('lat')?.value,
        lng: this.tiendaForm.get('lng')?.value

      },
      label: {

        color: 'black',
        text: this.tiendaForm.get('text')?.value,
        fontSize: '20px',
        fontWeight: 'bold'

      },

      title: this.tiendaForm.get('tittle')?.value,
      info: this.tiendaForm.get('info')?.value

    }

    Swal.fire({
      title: 'Creacion de Producto',
      text: "¿Desea crear el producto?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'

    }).then((result) => {

      if (result.isConfirmed) {

        this._tiendaService.postTienda(TIENDA).subscribe(data =>{
      
          this.router.navigate(['/tiendas'])
          
        }) 
      }
    })

    
  }

}

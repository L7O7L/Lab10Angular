import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})
export class CrearProductosComponent {

  productoForm: FormGroup;
  uploadFiles: Array<File> = [];

  constructor(private fb: FormBuilder,
              private router: Router,
              private _productoService: ProductoService){
    this.productoForm = this.fb.group({
        producto:  ['', Validators.required],
        categoria: ['', Validators.required],
        ubicacion: ['', Validators.required],
        imagen: ['', Validators.required],
        precio: ['', Validators.required]
    })
  }

  agregarProducto(){

    let formData = new FormData();

    for(let i = 0; i < this.uploadFiles.length; i++){
      formData.append("uploads[]", this.uploadFiles[i], this.uploadFiles[i].name)
    }

    const PRODUCTO: Producto = {
      producto: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      imagen: this.productoForm.get('imagen')?.value,
      precio: this.productoForm.get('precio')?.value,
    }

    formData.append('producto', PRODUCTO.producto)
    formData.append('categoria', PRODUCTO.categoria)
    formData.append('ubicacion', PRODUCTO.ubicacion)
    formData.append('imagen', PRODUCTO.imagen)
    formData.append('precio', PRODUCTO.precio)

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
        this._productoService.guardarProducto(formData).subscribe(data =>{
          console.log(data);  
          this.router.navigate(['/listar-productos'])
        }) 
      }
    })
    
  }

  onFileChange(e: any){
    //console.log(e);
    this.uploadFiles = e.target.files;
  }
    //console.log(this.productoForm)
  
}

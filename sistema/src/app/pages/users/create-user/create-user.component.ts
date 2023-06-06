import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/users';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  userForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private _userService: UsuarioService) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  agregarUsuario(){

    const USUARIO: Usuario = { 
      username: this.userForm.get('username')?.value,
      email: this.userForm.get('email')?.value,
      password: this.userForm.get('password')?.value
    }

    console.log(USUARIO)

    Swal.fire({
      title: 'Registro',
      text: "¿Desea registrarse?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._userService.guardarUsuario(USUARIO).subscribe(data =>{
          console.log(data);  
          this.router.navigate(['/'])
        }) 
      }
    })

  }

}

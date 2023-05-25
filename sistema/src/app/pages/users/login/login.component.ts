import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/users';
import { DataLoginService } from 'src/app/services/data-login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private dataLogin: DataLoginService){
      this.loginForm = this.fb.group(
        {
            email: ['', Validators.required],
            password: ['', Validators.required]
        }
      )
  }

  loginUser(){

   const USER: Usuario = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }

    this.dataLogin.login(USER).subscribe(data => {
      
      console.log(data);
      localStorage.setItem('token', data.token);
      this.router.navigate(['/listar-productos']);

    }, err => {

      if ( err.status == 404 ){

        this.router.navigate(['/']);

      }

    })

    this.router.navigate(['/listar-productos'])

  }

}



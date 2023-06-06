import { Component, Input, OnInit, Output } from '@angular/core';
import { DataLoginService } from 'src/app/services/data-login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  nombre: string = "";
  
  constructor(private loginServices: DataLoginService){

    console.log(loginServices.getToken())
  
    if ( loginServices.getToken() == null ) {

      

    }else {

      

    }

  }

  ngOnInit(): void {
    return
  }

  

}

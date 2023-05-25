import { CanActivate, Router } from '@angular/router';
import { DataLoginService } from './services/data-login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private authService: DataLoginService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.authService.signInUser()) {
      return true;
    }

    this.router.navigate(['/signin']);
    return false;
  }

}

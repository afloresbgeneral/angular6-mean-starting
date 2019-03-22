import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  canActivate() {
    const identity = this.userService.getIdentity();

    if ( identity && identity.role === 'ROLE_ADMIN') {
      return true;
    } else if (identity && identity.role === 'ROLE_USER') {
      this.router.navigate(['/']);
      return false;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }

}

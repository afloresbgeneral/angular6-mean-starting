import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel: UserModel;
  private identity;
  private token;

  constructor( public userService: UserService, public router: Router) {
    this.userModel  = new UserModel('', '', '', '', '' , 'ROLE_USER', '', '');
   }

  ngOnInit() {
    console.log('IDENTITY', this.userService.getIdentity());
    console.log('TOKEN', this.userService.geToken());

  }

  onSubmit() {
    this.userService.login(this.userModel).subscribe((res) => {
      this.identity = res;
        if (!this.identity || this.identity._id) {
          console.log('El usuario no se ha logeado correctamente');
        } else {
          this.identity.user.password = null;
          localStorage.setItem('identity', JSON.stringify(this.identity.user));
          console.log(this.identity);
          this.userModel.getToken = 'get';
          this.userService.login(this.userModel).subscribe((resp) => { // verificar si tipando resp se puede acceder a resp.token
            this.token = resp;
              if (!this.token.token) {
                console.log('no se ha obtenido el token');
              } else {
                localStorage.setItem('token', JSON.stringify(this.token.token));
                this.router.navigate(['/']);
                console.log('token');
                console.log(this.token);
              }

          }, (err) => {
            console.log();
          });
        }
    }, (err) => {
      console.log();
    });
  }

}

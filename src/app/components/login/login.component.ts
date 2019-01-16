import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel: UserModel;

  constructor( userService: UserService) {
    this.userModel  = new UserModel('', '', '', '', '' , 'ROLE_USER', '');

   }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.login()
    console.log(this.userModel);
  }

}

import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { GLOBAL } from '../../services/global';
import { UserService } from 'src/app/services/user.service';
import { UserServiceResponse } from '../../interfaces/response-interface';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public userModel: UserModel;
  public userServiceResponse: UserServiceResponse;
  public message: string;
  public status: boolean;

  constructor(
   public userService: UserService
  ) {
    this.userModel  = new UserModel('', '', '', '', '' , 'ROLE_USER', '', '');

  }

  ngOnInit() {

  }

  onSubmit(registerForm: NgForm) {
    this.userService.register(this.userModel).subscribe(
      (response: UserServiceResponse) => {
        if (response.user) {
          this.userModel = response.user;
          this.status = true;
          registerForm.reset();
        }
        this.message = response.message;
      }, error => {
        console.log('hey listen');
        console.log(error);
        this.status = false;
      }
    );
  }

}

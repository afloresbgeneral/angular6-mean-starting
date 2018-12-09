import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { GLOBAL } from '../../services/global';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public userModel: UserModel;
  public responseTest: any;

  constructor(
   public userService: UserService
  ) {
    this.userModel  = new UserModel('', '', '', '', '' , 'ROLE_USER', '');

  }

  ngOnInit() {

  }

  onSubmit() {
    this.userService.register(this.userModel).subscribe(
      (response) => {
        this.responseTest = response;
      }, error => {
        console.log('hey listen');
        console.log(error);
      }
    );
  }

}

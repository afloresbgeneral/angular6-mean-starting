import { Component, OnInit, DoCheck } from '@angular/core';
import * as $ from 'jquery';
import { UserService } from 'src/app/services/user.service';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'NG-ZOO';
  fromStorage: string;
  public identity;

  constructor(public userService: UserService, public router: Router) {

  }

  ngOnInit(): void {
    this.identity = this.userService.getIdentity();
  }

  ngDoCheck() {
    this.identity = this.userService.getIdentity();
  }

  logout() {
    localStorage.clear();
    this.identity = null;
    this.router.navigate(['login']);
  }


}



import { Component, OnInit, DoCheck } from '@angular/core';
import * as $ from 'jquery';
import { UserService } from 'src/app/services/user.service';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Router } from '@angular/router';
import { GLOBAL } from './services/global';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'NG-ZOO';
  fromStorage: string;
  public identity;
  public url: string;

  constructor(public userService: UserService, public router: Router) {
    this.url = GLOBAL.url;
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



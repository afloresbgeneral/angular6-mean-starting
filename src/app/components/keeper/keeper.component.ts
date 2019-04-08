import { Component, OnInit } from '@angular/core';
import {showAnimate} from '../animation';
import { UserService } from 'src/app/services/user.service';
import { GLOBAL } from 'src/app/services/global';

@Component({
  selector: 'app-keeper',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.css'],
  animations: [showAnimate]
})
export class KeeperComponent implements OnInit {

  public keepers = Array<any> ();
  public searchKeeper = '';
  public url = GLOBAL.url;

  constructor( public userService: UserService) { }

  ngOnInit() {
    this.getKeepers();
  }

  getKeepers() {
    this.userService.getKeepers().subscribe((res: any) => {
      if (!res) {
        alert('error');
        return;
      }
      this.keepers = res.keepers;
      console.log(res.keepers);

    }, (err) => {
      alert(err);
    });
  }

}

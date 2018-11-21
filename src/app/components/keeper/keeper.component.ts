import { Component, OnInit } from '@angular/core';
import {showAnimate} from '../animation';

@Component({
  selector: 'app-keeper',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.css'],
  animations: [showAnimate]
})
export class KeeperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

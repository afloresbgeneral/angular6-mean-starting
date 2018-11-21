import { Component, OnInit } from '@angular/core';
import {showAnimate} from '../animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [showAnimate]
})
export class HomeComponent implements OnInit {
  title = 'Home';
  constructor() { }

  ngOnInit() {
  }

}

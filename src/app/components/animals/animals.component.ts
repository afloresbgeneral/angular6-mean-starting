import { Component, OnInit } from '@angular/core';
import {showAnimate} from '../animation';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  animations: [showAnimate]
})
export class AnimalsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

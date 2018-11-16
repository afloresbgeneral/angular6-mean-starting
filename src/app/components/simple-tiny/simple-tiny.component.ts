import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-tiny',
  templateUrl: './simple-tiny.component.html',
  styleUrls: ['./simple-tiny.component.css']
})
export class SimpleTinyComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEditorKeyUp = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}

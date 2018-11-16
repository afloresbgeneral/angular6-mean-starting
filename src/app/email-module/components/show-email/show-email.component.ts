import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-show-email',
  templateUrl: './show-email.component.html',
  styleUrls: ['./show-email.component.css']
})
export class ShowEmailComponent implements OnInit, DoCheck {

  title = 'Show Email';
  fromStorage: string;

  constructor(  ) { }

  ngOnInit(): void {
    this.fromStorage = localStorage.getItem('emailContact');
    // console.log(localStorage.getItem('emailContact'));
  }

  ngDoCheck(): void {
    this.fromStorage = localStorage.getItem('emailContact');
    // console.log(localStorage.getItem('emailContact'));
  }

  clearStorage() {
    localStorage.removeItem('emailContact');
    localStorage.clear();
    this.fromStorage = null;

  }

}

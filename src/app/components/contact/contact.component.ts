import { Component, OnInit } from '@angular/core';
import {showAnimate} from '../animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [showAnimate]
})
export class ContactComponent implements OnInit {

  public emailContact: string;

  constructor() { }

  ngOnInit() {
  }

  saveEmail() {
    //console.log(this.emailContact);
    localStorage.setItem('emailContact', this.emailContact);
    console.log(localStorage.getItem('emailContact'));
  }

}

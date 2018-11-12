import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
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

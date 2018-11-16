import { Component, OnInit } from '@angular/core';
import {  } from '@angular/forms';

@Component({
  selector: 'app-save-email',
  templateUrl: './save-email.component.html',
  styleUrls: ['./save-email.component.css']
})
export class SaveEmailComponent implements OnInit {

  title = 'Save Email';
  fromStorage: string;
  public emailContact: string;


  constructor() { }

  ngOnInit(): void {
    this.fromStorage = localStorage.getItem('emailContact');
    // console.log(localStorage.getItem('emailContact'));
  }

  saveEmail() {
    //console.log(this.emailContact);
    localStorage.setItem('emailContact', this.emailContact);
    console.log(localStorage.getItem('emailContact'));
  }

}

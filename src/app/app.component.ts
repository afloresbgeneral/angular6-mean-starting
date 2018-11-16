import { Component, OnInit, DoCheck } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NG-ZOO';
  fromStorage: string;

  ngOnInit(): void {
    //console.log(localStorage.getItem('emailContact'));

  //   $(document).ready(function() {
  //     $('button').click(function() {
  //         console.log('hey ');
  //         const div = $('div');
  //         div.animate({left: '100px'}, 'slow');
  //         div.animate({fontSize: '5em'}, 'slow');
  //     });
  // });

  }

}



import { trigger, state, transition, animate, style } from '@angular/animations';
import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
  animations: [
    trigger('mark', [
      state('inactive', style({
        border: '5px solid #ccc'
      })),
      state('active', style({
        border: '5px solid yellow',
        background: 'red',
        borderRadius: '50px'
      })),
      transition('inactive => active', animate('300ms linear')),
      transition('active => inactive', animate('300ms linear'))

    ])
  ]
})
export class TiendaComponent implements OnChanges,  OnInit, DoCheck {

  public nombreDelParque: string;
  public miParque;
  public status = 'inactive';
  public buttonText = 'Active';

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('heyy');
    // console.log(changes);
  }

  ngOnInit() {

    $('#storeButton').click(function() {
      console.log('inittt');
      $('#texto').removeAttr('hidden').slideToggle();
    }
    );
  }

  ngDoCheck(): void {
    // console.log('heyy');
  }

  mostrarNombre() {
  }

  readDataFromOutput(event) {
    // console.log(event);
    this.miParque = event;
  }

  toggleState(status) {
    if (status === 'inactive') {
      this.status = 'active';
      this.buttonText = 'Inactive';
      console.log(this.status);
    } else if (status === 'active') {
      this.status = 'inactive';
      this.buttonText = 'Active';
      console.log(this.status);

    }
  }

}

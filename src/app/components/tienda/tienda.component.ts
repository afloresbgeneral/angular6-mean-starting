import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnChanges,  OnInit, DoCheck {

  public nombreDelParque: string;
  public miParque;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('heyy');
    console.log(changes);
  }

  ngOnInit() {
    console.log('inittt');
  }

  ngDoCheck(): void {
    console.log('heyy');
  }

  mostrarNombre() {
  }

  readDataFromOutput(event) {
    console.log(event);
    this.miParque = event;
  }

}

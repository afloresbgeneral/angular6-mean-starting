import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnInit, OnDestroy {

  @Input() nombre: string;
  @Input() metros: number;
  public vegetacion: string;
  public abierto: boolean;

  @Output() dataOutput = new EventEmitter();

  constructor() {
    this.nombre = '';
    this.metros = 450;
    this.vegetacion = 'tropical';
    this.abierto = false;
  }

  ngOnInit() {
  }


  ngOnDestroy(): void {
    console.log('THANOS RUNN!!');
  }


  emitirEvento() {
    this.dataOutput.emit({
      nombre: this.nombre,
      metros: this.metros,
      vegetacion: this.vegetacion,
      abierto: this.abierto
    });
  }

}

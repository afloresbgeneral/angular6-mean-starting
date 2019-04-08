import { Component, OnInit } from '@angular/core';
import {showAnimate} from '../animation';
import { AnimalModel } from '../../models/animal.model';
import { AnimalService } from 'src/app/services/animal.service';
import { AnimalServiceResponse } from '../../interfaces/response-interface';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  animations: [showAnimate]
})
export class AnimalsComponent implements OnInit {

  title = 'List Admin';
  animals = new Array(10);
  animalsList = Array<AnimalModel>();
  token = '';
  public search = '';

  constructor( private animalService: AnimalService ) { }

  ngOnInit() {
    this.listAnimals();
  }

  listAnimals() {
    this.animalService.listAnimals().subscribe((res: AnimalServiceResponse) => {
      if (res) {
        console.log(res);
        this.animalsList = res.animals;
      } else {
        console.log('Error al cargar resultado');
      }
    }, (err) => {
      console.log(err);
    });
  }

}

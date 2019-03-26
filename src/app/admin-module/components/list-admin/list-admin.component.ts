import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { AnimalModel } from '../../../models/animal.model';
import { AnimalServiceResponse } from '../../../interfaces/response-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {

  title = 'List Admin';
  animals = new Array(10);
  animalsList = Array<AnimalModel>();

  constructor( private animalService: AnimalService,
                private router: Router) { }

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

  toAnimalDetail(id: string) {
    this.router.navigate(['/animal-detail']);
    console.log(id);
  }

}

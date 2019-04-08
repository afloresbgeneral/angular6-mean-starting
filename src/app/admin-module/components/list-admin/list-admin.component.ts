import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { AnimalModel } from '../../../models/animal.model';
import { AnimalServiceResponse } from '../../../interfaces/response-interface';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {

  title = 'List Admin';
  animals = new Array(10);
  animalsList = Array<AnimalModel>();
  token = '';
  public search = '';

  constructor( private animalService: AnimalService,
                private router: Router,
                private userService: UserService) {
                  this.token = this.userService.geToken();
                 }

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
  // no se usa
  toAnimalDetail(id: string) {
    this.router.navigate(['/animal-detail']);
    console.log(id);
  }

  deleteAnimal(id: string) {
    this.animalService.deleteAnimal(this.token, id).subscribe((res) => {
      if (!res) {
        alert('Error en el servidor RES');
      } else {
        this.listAnimals();
      }
    }, (err) => {
      alert('Error en el servidor');
    });
  }

}

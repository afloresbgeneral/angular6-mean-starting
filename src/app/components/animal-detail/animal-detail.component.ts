import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '../../../../node_modules/@angular/router';
import { Params, ActivatedRoute } from '@angular/router';
import { AnimalModel } from '../../models/animal.model';
import { AnimalServiceResponse } from '../../interfaces/response-interface';
import { GLOBAL } from 'src/app/services/global';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {

  private token;
  private id: string;
  public animal: AnimalModel;
  public url = GLOBAL.url;


  constructor(private animalService: AnimalService,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
        this.token = this.userService.geToken();

               }

  ngOnInit() {
    this.getAnimal();
  }

  findAnimal() {

  }

  async getAnimal() {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
      console.log('id from animal detail: ', this.id);
      this.animalService.findAnimal(this.id, this.token).subscribe((res: AnimalServiceResponse) => {
        console.log('animal found', res.animal);
        this.animal = res.animal;
      }, (err) => {
        console.log(err);
      });
    });
  }

  getAnimalImage() {
    this.animalService.getAnimalImage(this.token, this.id).subscribe( (res) => {
      console.log(res);
    });
  }

}

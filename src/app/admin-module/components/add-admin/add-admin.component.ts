import { GLOBAL } from '../../../services/global';
import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../../services/animal.service';
import { AnimalModel } from '../../../models/animal.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { UserModel } from '../../../models/user.model';
import { AnimalServiceResponse } from '../../../interfaces/response-interface';


@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  public title = 'Add Animals Admin';
  public animal: AnimalModel;
  public url = GLOBAL.url;
  public message: string;
  public status = false;

  constructor( private animalService: AnimalService, private userService: UserService) {
    this.animal = new AnimalModel('', '', '', 0, '', '');
  }

  ngOnInit() {
  }

  addAnimal(animalForm: NgForm) {
    this.animal.user = this.userService.geToken();
    this.animalService.addAnimal( this.userService.geToken() , this.animal)
        .subscribe((res: AnimalServiceResponse) => {
          if (res.animal) {
            this.animal = res.animal;
            animalForm.reset();
          }
          this.message = res.message;
    }, (err) => {
      console.log(err);
      this.status = false;
    });
  }

}

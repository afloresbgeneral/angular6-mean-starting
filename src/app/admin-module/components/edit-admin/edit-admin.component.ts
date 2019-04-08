import { Component, OnInit } from '@angular/core';
import { Route } from '../../../../../node_modules/@angular/compiler/src/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { AnimalModel } from '../../../models/animal.model';
import { AnimalService } from '../../../services/animal.service';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { UserService } from '../../../services/user.service';
import { AnimalServiceResponse } from 'src/app/interfaces/response-interface';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  title = 'Edit Admin';
  public animal: AnimalModel;
  public status = false;
  public message: string;
  private id: string;

  constructor(private activatedRoute: ActivatedRoute,
              private animalService: AnimalService,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      this.id = params['id'];
      console.log('id from animal detail: ', this.id);
    });
    this.getAnimalInfo(this.id);

  }

  editAnimal(animalForm: NgForm) {
    console.log('Animal to edit, ', this.animal);
    this.animalService.editAnimal(this.id, this.userService.geToken(), this.animal )
      .subscribe((res: AnimalServiceResponse) => {
        console.log(res, 'resss fromm ts');
        if (res.animal) {
          this.animal = res.animal;
          console.log('navigate??');
          this.router.navigate(['/admin-panel/list']);
          animalForm.reset();
        }
        console.log('Animal response ', this.animal);
        this.message = res.message;


      }, (err) => {
        console.log(err);
        this.status = false;
      });
  }

   getAnimalInfo(id: string) {
    this.animalService.findAnimal(id, this.userService.geToken()).subscribe( (res: AnimalServiceResponse) => {
      console.log('FROM edit admin', res.animal);
      this.animal = res.animal;
      this.status = true;
    }, (err) => {

    } );
  }
}

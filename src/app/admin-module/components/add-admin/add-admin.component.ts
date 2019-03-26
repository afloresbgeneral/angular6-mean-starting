import { GLOBAL } from '../../../services/global';
import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../../services/animal.service';
import { AnimalModel } from '../../../models/animal.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { UserModel } from '../../../models/user.model';
import { AnimalServiceResponse } from '../../../interfaces/response-interface';
import { UploadService } from 'src/app/services/upload.service';


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
  public filesToUpload: Array<File>;
  public identity;
  public token;

  constructor(private animalService: AnimalService,
    private userService: UserService,
    private router: Router,
    private uploadService: UploadService) {
    this.animal = new AnimalModel('', '', '', 0, '', '');
    this.identity = this.userService.getIdentity();
    this.token = this.userService.geToken();
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  addAnimal(animalForm: NgForm) {
    this.animal.user = this.userService.geToken();
    this.animalService.addAnimal(this.userService.geToken(), this.animal)
      .subscribe((res: AnimalServiceResponse) => {
        if (res.animal) {
          this.animal = res.animal;

          // Subiendo imagen del animal
          if (this.filesToUpload) {
            console.log('inside if animal');
            this.uploadService.makeFileRequest(this.url + 'upload-image/' + this.animal._id,
              [], this.filesToUpload, this.token, 'image').then((resp) => {
                console.log('from adding image animal', resp);
              });
          }
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

  fileChangeEvent(image: any) {
    this.filesToUpload = <Array<File>>image.target.files;
    console.log(this.filesToUpload);

  }



}

import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { UserServiceResponse } from '../../interfaces/response-interface';
import { UploadService } from 'src/app/services/upload.service';
import { GLOBAL } from 'src/app/services/global';
import { IfStmt } from '../../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public title: string;
  public user: UserModel;
  public identity;
  public token;
  public message: string;
  public filesToUpload: Array<File>;
  private url: string;

  constructor(public userService: UserService, public uploadService: UploadService) {
      this.title = 'Update my profile';
      this.identity = this.userService.getIdentity();
      this.token = this.userService.geToken();
      this.user = this.identity;
      this.url = GLOBAL.url;

   }

  ngOnInit() {
    console.log('User edit component loaded', this.identity);
  }

  onSubmit() {
    this.userService.updateUser(this.user).subscribe((resp: UserServiceResponse) => {
      console.log(resp);
      localStorage.setItem('identity', JSON.stringify(this.user));
      this.message = resp.message;

      console.log('fILES TO UPLOAD', this.filesToUpload);
      // Subiendo la imagen del usuario
      if (this.filesToUpload) {
      this.uploadService.makeFileRequest(this.url + 'upload-image-user/' + this.user._id, [], this.filesToUpload, this.token, 'image')
        .then((result: any) => {
          const parsedResult = JSON.parse(result);
          this.user.image = parsedResult.user.image;
          localStorage.setItem('identity',  JSON.stringify(this.user));
          console.log(this.user);
        });
      }

    }, (err) => {
      console.log(err);
    } );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }

}
